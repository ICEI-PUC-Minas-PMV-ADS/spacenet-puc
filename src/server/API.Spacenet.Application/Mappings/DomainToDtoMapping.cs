using API.Spacenet.Application.DTOs;
using API.Spacenet.Domain.Entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Application.Mappings
{
    public class DomainToDtoMapping : Profile
    {
        public DomainToDtoMapping()
        {
            CreateMap<Person, PersonResultDTO>();
            CreateMap<Person, PersonDTO>();
            CreateMap<Support, SupportDetailDTO>()
                .ForMember(x => x.Person, opt => opt.Ignore())
                .ConstructUsing((model, context) =>
                {
                    var dto = new SupportDetailDTO
                    {
                        id = model.Id,
                        Title = model.Title,
                        UpdateDate = model.UpdateDate,
                        Person = model.Person.Name,
                    };
                    return dto;
                });
            CreateMap<Support, SupportByIdDTO>()
                .ForMember(x => x.Person, opt => opt.Ignore())
                .ConstructUsing((model, context) =>
                {
                    var dtoById = new SupportByIdDTO
                    {
                        id = model.Id,
                        Title = model.Title,
                        Description = model.Description,
                        Status = model.StatusChamado,
                        CreateDate = model.CreateDate,
                        UpdateDate= model.UpdateDate,
                        Person = model.Person.Name,
                    };
                    return dtoById;
                });
        }
    }
}
