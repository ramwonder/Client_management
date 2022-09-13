using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Client_Microservice.Model
{
    public class Client
    {
        [Key]
        public int ClientId { get; set; }
        public string ClientName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Location { get; set; }

        public string CompanyName { get; set; }

        public DateTime CreatedDate { get; set; }

        public static implicit operator Client(ActionResult<Client> v)
        {
            throw new NotImplementedException();
        }
    }
}
