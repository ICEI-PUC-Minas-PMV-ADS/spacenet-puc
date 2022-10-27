using API.Spacenet.Domain.Validation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Domain.Entities
{
    public sealed class Person
    {
        public int Id { get; private set; }
        public string Name { get; private set; }
        public string Email { get; private set; }
        public string Document { get; private set; }
        public string Phone { get; private set; }
        public string Password { get; private set; }
        public string BirthdayDate { get; private set; }
        public DateTime CreateDate { get; private set;  }
        public ICollection<Support> Supports { get; set; }

        public Person(string document, string name, string phone, string birthdayDate, string email, string password)
        {
            Validation(document, name, phone, birthdayDate, email, password);
            Supports = new List<Support>();
        }

        public Person(int id, string document, string name, string phone, string birthdayDate, string email, string password)
        {
            DomainValidationException.When(id < 0, "Id deve ser válido!");
            Id = id;
            Validation(document, name, phone, birthdayDate, email, password);
            Supports = new List<Support>();
        }

        private void Validation(string document, string name, string phone, string birthdayDate, string email, string password)
        {
            DomainValidationException.When(string.IsNullOrEmpty(name), "Nome deve ser informado!");
            DomainValidationException.When(string.IsNullOrEmpty(document), "Documento deve ser informado!");
            DomainValidationException.When(string.IsNullOrEmpty(phone), "Telefone deve ser informado!");
            DomainValidationException.When(string.IsNullOrEmpty(birthdayDate), "Data de Nascimento deve ser informado!");
            DomainValidationException.When(string.IsNullOrEmpty(email), "Email deve ser informado!");
            DomainValidationException.When(string.IsNullOrEmpty(password), "Senha deve ser informado!");

            Name = name;
            Document = document;
            Phone = phone;
            BirthdayDate = birthdayDate;
            Email = email;
            Password = password;
            CreateDate = DateTime.Now;
        }
    }
}
