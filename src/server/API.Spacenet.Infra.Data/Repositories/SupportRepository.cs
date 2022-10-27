using API.Spacenet.Domain.Entities;
using API.Spacenet.Domain.Repositories;
using API.Spacenet.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Spacenet.Infra.Data.Repositories
{
    public class SupportRepository :ISupportRepository
    {
        private readonly ApplicationDbContext _db;
        public SupportRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<Support> CreateAsync(Support support)
        {
            _db.Add(support);
            await _db.SaveChangesAsync();
            return support;
        }

        public async Task DeleteAsync(Support support)
        {
            _db.Remove(support);
            await _db.SaveChangesAsync();
        }

        public async Task EditAsync(Support support)
        {
            _db.Update(support);
            await _db.SaveChangesAsync();
        }

        public async Task<Support> GetByIdAsync(int id)
        {
            return await _db.Supports
                .Include(x => x.Person)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<ICollection<Support>> GetSupportsAsync()
        {
            return await _db.Supports
                .Include(_x => _x.Person)
                .ToListAsync();
        }
    }
}
