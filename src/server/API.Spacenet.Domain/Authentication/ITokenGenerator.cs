using API.Spacenet.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Domain.Authentication
{
    public interface ITokenGenerator
    {
        dynamic Generator(Person person);
    }
}
