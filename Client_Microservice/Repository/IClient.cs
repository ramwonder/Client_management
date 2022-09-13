using Client_Microservice.Model;

namespace Client_Microservice.Repository
{
    public interface IClient
    {
        Task<List<Client>> ViewClientsDetails();
        Task<Client> GetClientsDetails(int ClientId);
      

    }
}
