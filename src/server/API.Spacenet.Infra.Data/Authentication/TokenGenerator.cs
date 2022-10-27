using API.Spacenet.Domain.Authentication;
using API.Spacenet.Domain.Entities;
using API.Spacenet.Domain.Repositories;
using API.Spacenet.Infra.Data.Repositories;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Infra.Data.Authentication
{
    public class TokenGenerator : ITokenGenerator
    {
        public dynamic Generator(Person person)
        {
            var user = (person.Name);
            var claims = new List<Claim>
            {
                new Claim("Id", person.Id.ToString()),
                new Claim("Email", person.Email)
            };

            var expires = DateTime.Now.AddHours(8);
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("[yourSecretCode]"));
            var tokenData = new JwtSecurityToken(
                signingCredentials: new SigningCredentials(key,SecurityAlgorithms.HmacSha256Signature),
                expires: expires,
                claims: claims
            );

            var token = new JwtSecurityTokenHandler().WriteToken(tokenData);
            return new
            {
                User = user,
                Access_Token = token,
                Expiration = expires
            };
        }
    }
}
