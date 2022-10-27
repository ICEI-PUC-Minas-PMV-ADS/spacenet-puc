using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Application.DTOs
{
    public class SupportDetailDTO
    {
        public int id { get; set; }
        public string Person { get; set; }
        public string Title { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
