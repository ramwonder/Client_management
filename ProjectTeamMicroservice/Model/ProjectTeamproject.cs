using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectTeamMicroservice.Model
{
    public class ProjectTeamproject
    {
        public int Id { get; set; }

        [ForeignKey("ProjectTeam")]
        public int ProjectTeamId { get; set; }
        public string ProjectManager { get; set; }
        public string Department { get; set; }

        public string ProjectId { get; set; }
        public string ProjectName { get; set; }

        public int ClientId { get; set; }
        public string ClientName { get; set; }

        public string status { get; set; }

        public string Progress { get; set; }

        

    }
}
