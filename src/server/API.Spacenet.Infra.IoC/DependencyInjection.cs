using API.Spacenet.Application.Mappings;
using API.Spacenet.Application.Services;
using API.Spacenet.Application.Services.Interfaces;
using API.Spacenet.Domain.Authentication;
using API.Spacenet.Domain.Repositories;
using API.Spacenet.Infra.Data.Authentication;
using API.Spacenet.Infra.Data.Context;
using API.Spacenet.Infra.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Infra.IoC
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection");
            var serverVersion = ServerVersion.AutoDetect(connectionString);

            services.AddDbContext<ApplicationDbContext>(
            dbContextOptions => dbContextOptions
                .UseMySql(connectionString, serverVersion));

            services.AddScoped<IPersonRepository, PersonRepository>();
            services.AddScoped<ISupportRepository, SupportRepository>();
            services.AddScoped<ITokenGenerator, TokenGenerator>();
            return services;
        }

        public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAutoMapper(typeof(DomainToDtoMapping));
            services.AddScoped<IPersonService, PersonService>();
            services.AddScoped<ISupportService, SupportService>();
            services.AddScoped<IUserService, UserService>();
            return services;
        }
    }
}
