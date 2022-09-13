using Microsoft.EntityFrameworkCore;

namespace Client_Microservice.Model
{
    public class ClientContext : DbContext
    {
        public ClientContext(DbContextOptions<ClientContext> options):base(options)
        {

        }

        public DbSet<Client> Clients { get; set; }
    }
}
