using API.Spacenet.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Domain.Repositories
{
    public interface ISupportRepository
    {
        Task<Support> GetByIdAsync(int id);
        Task<ICollection<Support>> GetSupportsAsync();
        Task<Support> CreateAsync(Support support);
        Task EditAsync(Support support);
        Task DeleteAsync(Support support);
    }
}
