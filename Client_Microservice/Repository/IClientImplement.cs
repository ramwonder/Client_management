using Client_Microservice.Model;
using Microsoft.EntityFrameworkCore;

namespace Client_Microservice.Repository
{
    public class IClientImplement : IClient
    {
        private readonly ClientContext _context;
        public IClientImplement(ClientContext context)
        {
            _context = context;
        }

        public async Task<Client> GetClientsDetails(int ClientId)
        {
            var stock = await _context.Clients.Where(x => x.ClientId == ClientId).Select(x => new Client()
            {
                ClientId = x.ClientId,
                ClientName = x.ClientName,
                CompanyName = x.CompanyName,
                Phone=x.Phone,
                Location=x.Location,
                Email=x.Email,
                CreatedDate = x.CreatedDate
            }).FirstOrDefaultAsync();

            return stock;
        }

        public async Task<List<Client>> ViewClientsDetails()
        {
            return await _context.Clients.ToListAsync();
        }
    }
}
