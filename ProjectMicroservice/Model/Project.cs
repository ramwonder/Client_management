using System.ComponentModel.DataAnnotations;

namespace ProjectMicroservice.Model
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }

        public int Progress { get; set; }
        public int? ProjectCost { get; set; }

        public int Duration { get; set; }

        public int ClientId { get; set; }

        public string Status{ get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }


    }
}
