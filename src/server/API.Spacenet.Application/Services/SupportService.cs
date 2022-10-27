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
    public class SupportService : ISupportService
    {
        private readonly ISupportRepository _supportRepository;
        private readonly IPersonRepository _personRepository;
        private readonly IMapper _mapper;

        public SupportService(ISupportRepository supportRepository, IPersonRepository personRepository, IMapper mapper)
        {
            _supportRepository = supportRepository;
            _personRepository = personRepository;
            _mapper = mapper;
        }

        public async Task<ResultService<SupportDTO>> CreateAsync(SupportDTO supportDTO)
        {
            if (supportDTO == null)
                return ResultService.Fail<SupportDTO>("Objeto deve ser informado!");

            var validate = new SupportDTOValidator().Validate(supportDTO);
            if (!validate.IsValid)
                return ResultService.RequestError<SupportDTO>("Problemas de Validação!", validate);

            var personId = await _personRepository.GetIdByDocumentAsync(supportDTO.Document);
            var support = new Support(personId, supportDTO.Title, supportDTO.Description, supportDTO.StatusChamado);

            var data = await _supportRepository.CreateAsync(support);
            supportDTO.Id = data.Id;
            return ResultService.Ok<SupportDTO>(supportDTO);
        }

        public async Task<ResultService<ICollection<SupportDetailDTO>>> GetAsync()
        {
            var supports = await _supportRepository.GetSupportsAsync();
            return ResultService.Ok(_mapper.Map<ICollection<SupportDetailDTO>>(supports));
        }

        public async Task<ResultService<SupportByIdDTO>> GetByIdAsync(int id)
        {
            var support = await _supportRepository.GetByIdAsync(id);
            if (support == null)
                return ResultService.Fail<SupportByIdDTO>("Chamado não encontrado!");

            return ResultService.Ok(_mapper.Map<SupportByIdDTO>(support));
        }

        public async Task<ResultService> RemoveAsync(int id)
        {
            var support = await _supportRepository.GetByIdAsync(id);
            if (support == null)
                return ResultService.Fail("Chamado não encontrado!");

            await _supportRepository.DeleteAsync(support);
            return ResultService.Ok($"Chamado de id: {id} foi deletado!");
        }

        public async Task<ResultService<SupportDTO>> UpdateAsync(SupportDTO supportDTO)
        {
            if (supportDTO == null)
                return ResultService.Fail<SupportDTO>("Objeto deve ser informado!");

            var result = new SupportDTOValidator().Validate(supportDTO);
            if (!result.IsValid)
                return ResultService.RequestError<SupportDTO>("Problemas de validação!", result);

            var support = await _supportRepository.GetByIdAsync(supportDTO.Id);
            if (support == null)
                return ResultService.Fail<SupportDTO>("Chamado não encontrado!");

            var personId = await _personRepository.GetIdByDocumentAsync(supportDTO.Document);
            support.Edit(support.Id, personId, supportDTO.Title, supportDTO.Description, supportDTO.StatusChamado);
            await _supportRepository.EditAsync(support);
            return ResultService.Ok(supportDTO);
        }
    }
}
