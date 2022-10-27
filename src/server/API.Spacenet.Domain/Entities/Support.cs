using API.Spacenet.Domain.Validation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace API.Spacenet.Domain.Entities
{
    public class Support
    {
        public int Id { get; private set; }
        public int PersonId { get; private set; }
        public string Title { get; private set; }
        public string Description { get; private set; }
        public string StatusChamado { get; private set; }
        public DateTime CreateDate { get; private set; }
        public DateTime UpdateDate { get; private set; }
        public Person Person { get; set; }

        public Support(int personId, string title, string description, string statusChamado)
        {
            Validation(personId, title, description, statusChamado);
        }

        public Support(int id, int personId, string title, string description, string statusChamado)
        {
            DomainValidationException.When(id <= 0, "Id deve ser válido!");
            Id = id;
            Validation(personId, title, description, statusChamado);
        }

        public void Edit(int id, int personId, string title, string description, string statusChamado)
        {
            DomainValidationException.When(id <= 0, "Id deve ser válido!");
            Id = id;
            Validation(personId, title, description, statusChamado);
        }

        private void Validation(int personId, string title, string description, string statusChamado)
        {
            DomainValidationException.When(personId <= 0, "Id da pessoa deve ser informado!");
            DomainValidationException.When(string.IsNullOrEmpty(title), "Título deve ser informado!");
            DomainValidationException.When(string.IsNullOrEmpty(description), "Descrição deve ser informado!");

            PersonId = personId;
            Title = title;
            Description = description;
            StatusChamado = statusChamado;
            CreateDate = DateTime.Now;
            UpdateDate = DateTime.Now;

        }
    }
}
