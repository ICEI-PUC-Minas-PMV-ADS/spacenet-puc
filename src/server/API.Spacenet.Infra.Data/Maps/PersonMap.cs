using API.Spacenet.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Infra.Data.Maps
{
    public class PersonMap : IEntityTypeConfiguration<Person>
    {
        public void Configure(EntityTypeBuilder<Person> builder)
        {
            builder.ToTable("PESSOA");
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Id)
                .HasColumnName("IDPESSOA")
                .UseMySqlIdentityColumn();

            builder.Property(c => c.Document)
                .HasColumnName("DOCUMENTO");

            builder.Property(c => c.Email)
                .HasColumnName("EMAIL");

            builder.Property(c => c.Name)
                .HasColumnName("NOME");

            builder.Property(c => c.Password)
                .HasColumnName("SENHA");

            builder.Property(c => c.Phone)
                .HasColumnName("CELULAR");

            builder.Property(c => c.BirthdayDate)
                .HasColumnName("DATADENASCIMENTO");

            builder.Property(c => c.CreateDate)
                .HasColumnName("DATACRIADO");

            builder.HasMany(c => c.Supports)
                .WithOne(p => p.Person)
                .HasForeignKey(c => c.PersonId);
        }
    }
}
