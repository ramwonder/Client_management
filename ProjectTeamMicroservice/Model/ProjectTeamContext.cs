using Microsoft.EntityFrameworkCore;

namespace ProjectTeamMicroservice.Model
{
    public class ProjectTeamContext:DbContext
    {
        public ProjectTeamContext(DbContextOptions<ProjectTeamContext> options) : base(options) { }

        public DbSet<ProjectTeam> projectTeams { get; set; }
        public DbSet<ProjectTeamproject> projectTeamprojects { get; set; }

        public DbSet<ClientFeedback> ClientFeedbacks { get; set; }
    }
}
