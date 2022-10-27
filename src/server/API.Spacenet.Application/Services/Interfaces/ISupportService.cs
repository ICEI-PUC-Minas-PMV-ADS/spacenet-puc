using API.Spacenet.Application.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Application.Services.Interfaces
{
    public interface ISupportService
    {
        Task<ResultService<SupportDTO>> CreateAsync(SupportDTO supportDTO);
        Task<ResultService<SupportByIdDTO>> GetByIdAsync(int id);
        Task<ResultService<ICollection<SupportDetailDTO>>> GetAsync();
        Task<ResultService<SupportDTO>> UpdateAsync(SupportDTO supportDTO);
        Task<ResultService> RemoveAsync(int id);
    }
}
