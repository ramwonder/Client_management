using System.ComponentModel.DataAnnotations;

namespace ProjectTeamMicroservice.Model
{
    public class ProjectTeam
    {
        [Key]
        public int ProjectTeamId { get; set; }
        public string ProjectTeamName { get; set; }

        public string ProjectTeamManager { get; set; }

        public string ProjectTeamMember { get; set; }

        public string WorkLocation { get; set; }

        public string TeamEmail { get; set; }
    }
}
