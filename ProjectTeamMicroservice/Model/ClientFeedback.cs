using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectTeamMicroservice.Model
{
    public class ClientFeedback
    {
        public int Id { get; set; }

        [ForeignKey("ProjectTeam")]
        public int TeamId{ get; set; }
        public string TeamName { get; set; }
        public int ProjectId { get; set; }

        public string ProjectName { get; set; }

        public string client_rating_project_process{ get; set; }

        public string client_rating_Project_status { get; set; }

    }
}
