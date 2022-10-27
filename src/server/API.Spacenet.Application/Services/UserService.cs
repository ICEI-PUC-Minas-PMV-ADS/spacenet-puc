using API.Spacenet.Application.DTOs;
using API.Spacenet.Application.DTOs.Validations;
using API.Spacenet.Application.Services.Interfaces;
using API.Spacenet.Domain.Authentication;
using API.Spacenet.Domain.Entities;
using API.Spacenet.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IPersonRepository _personRepository;
        private readonly ITokenGenerator _tokenGenerator;

        public UserService(IPersonRepository personRepository, ITokenGenerator tokenGenerator)
        {
            _personRepository = personRepository;
            _tokenGenerator = tokenGenerator;
        }

        public async Task<ResultService<dynamic>> GenerateTokenAsync(UserDTO userDTO)
        {
            if (userDTO == null)
                return ResultService.Fail<dynamic>("Objeto deve ser informado!");

            var validator = new UserDTOValidator().Validate(userDTO);
            if (!validator.IsValid)
                return ResultService.RequestError<dynamic>("Problemas de validação!", validator);
            var user = await _personRepository.GetUserByEmailAndPasswordAsync(userDTO.Email, userDTO.Password);
            if (user == null)
                return ResultService.Fail<dynamic>("Email ou senha inválidos!");

            return ResultService.Ok(_tokenGenerator.Generator(user));
        }
    }
}
