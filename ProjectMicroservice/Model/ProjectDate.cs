using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectMicroservice.Model
{
    public class ProjectDate
    {
 
        public int Id { get; set; }

        [ForeignKey("Project")]
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
    }
}
