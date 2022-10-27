using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Application.DTOs.Validations
{
    internal class SupportDTOValidator : AbstractValidator<SupportDTO>
    {
        public SupportDTOValidator()
        {
            RuleFor(x => x.Document)
                .NotNull()
                .NotEmpty()
                .WithMessage("Documento deve ser informado!");

            RuleFor(x => x.Title)
                .NotNull()
                .NotEmpty()
                .WithMessage("Documento deve ser informado!");

            RuleFor(x => x.Description)
                .NotNull()
                .NotEmpty()
                .WithMessage("Documento deve ser informado!");

            RuleFor(x => x.StatusChamado)
                .NotNull()
                .NotEmpty()
                .WithMessage("Status deve ser informado!");
        }
    }
}
