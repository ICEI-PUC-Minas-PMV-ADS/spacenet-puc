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
    public class SupportMap : IEntityTypeConfiguration<Support>
    {
        public void Configure(EntityTypeBuilder<Support> builder)
        {
            builder.ToTable("SUPORTE");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                .HasColumnName("IDSUPORTE")
                .UseMySqlIdentityColumn();

            builder.Property(x => x.PersonId)
                .HasColumnName("IDPESSOA");

            builder.Property(x => x.Title)
                .HasColumnName("TITULO");

            builder.Property(x => x.Description)
                .HasColumnName("DESCRICAO");

            builder.Property(x => x.StatusChamado)
                .HasColumnName("STATUSCHAMADO");

            builder.Property(x => x.CreateDate)
                .HasColumnName("DATACRIADO");

            builder.Property(x => x.UpdateDate)
                .HasColumnName("ATUALIZACAODATA");

            builder.HasOne(x => x.Person)
                .WithMany(x => x.Supports);
        }
    }
}
