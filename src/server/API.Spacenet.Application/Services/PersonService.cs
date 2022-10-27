using API.Spacenet.Application.DTOs;
using API.Spacenet.Application.DTOs.Validations;
using API.Spacenet.Application.Services.Interfaces;
using API.Spacenet.Domain.Entities;
using API.Spacenet.Domain.Repositories;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Application.Services
{
    public class PersonService : IPersonService
    {
        private readonly IPersonRepository _personRepository;
        private readonly IMapper _mapper;
        public PersonService(IPersonRepository personRepository, IMapper mapper)
        {
            _personRepository = personRepository;
            _mapper = mapper;
        }

        public async Task<ResultService<PersonDTO>> CreateAsync(PersonDTO personDTO)
        {
            if (personDTO == null)
                return ResultService.Fail<PersonDTO>("Objeto deve ser informado!");

            var result = new PersonDTOValidator().Validate(personDTO);
            if (!result.IsValid)
                return ResultService.RequestError<PersonDTO>("Problemas de validade!", result);

            personDTO.Password = BCrypt.Net.BCrypt.HashPassword(personDTO.Password);
            var person = _mapper.Map<Person>(personDTO);
            var data = await _personRepository.CreateAsync(person);
            return ResultService.Ok<PersonDTO>(_mapper.Map<PersonDTO>(data));
        }

        public async Task<ResultService> DeleteAsync(int id)
        {
            var person = await _personRepository.GetByIdAsync(id);
            if (person == null)
                return ResultService.Fail("Pessoa NÃO ENCONTRADA!");

            await _personRepository.DeleteAsync(person);
            return ResultService.Ok($"Pessoa do Id: {id} Foi DELETADA!");
        }

        public async Task<ResultService<ICollection<PersonResultDTO>>> GetAllAsync()
        {
            var people = await _personRepository.GetPeopleAsync();
            return ResultService.Ok<ICollection<PersonResultDTO>>(_mapper.Map<ICollection <PersonResultDTO>> (people));
        }

        public async Task<ResultService<PersonResultDTO>> GetByIdAsync(int id)
        {
            var person = await _personRepository.GetByIdAsync(id);
            if (person == null)
                return ResultService.Fail<PersonResultDTO>("Pessoa NÃO ENCONTRADA ou NÃO EXISTE!");

            return ResultService.Ok(_mapper.Map<PersonResultDTO>(person));
        }

        public async Task<ResultService> UpdateAsync(PersonDTO personDTO)
        {
            if (personDTO == null)
                return ResultService.Fail("Objeto deve ser informado!");

            var validation = new PersonDTOValidator().Validate(personDTO);
            if (!validation.IsValid)
                return ResultService.RequestError("Problema com a VALIDAÇÃO dos CAMPOS!", validation);

            var person = await _personRepository.GetByIdAsync(personDTO.Id);
            if (person == null)
                return ResultService.Fail("Pessoa NÃO ENCONTRADA!");

            personDTO.Password = BCrypt.Net.BCrypt.HashPassword(personDTO.Password);
            person = _mapper.Map<PersonDTO, Person>(personDTO, person);
            await _personRepository.EditAsync(person);
            return ResultService.Ok("Pessoa editada com SUCESSO!");
        }
    }
}
