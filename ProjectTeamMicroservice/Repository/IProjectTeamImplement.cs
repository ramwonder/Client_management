using Microsoft.EntityFrameworkCore;
using ProjectTeamMicroservice.Model;

namespace ProjectTeamMicroservice.Repository
{
    public class IProjectTeamImplement : IProjectTeam
    {
        private readonly ProjectTeamContext _context;
        public IProjectTeamImplement(ProjectTeamContext context)
        {
            _context = context;
        }

        public async  Task<ProjectTeam> GetProjectTeamDetails(int TeamId)
        {
            var stock = await _context.projectTeams.Where(x => x.ProjectTeamId == TeamId).Select(x => new ProjectTeam()
            {
                ProjectTeamId=x.ProjectTeamId,
                ProjectTeamName=x.ProjectTeamName,
                ProjectTeamManager=x.ProjectTeamManager,
                ProjectTeamMember=x.ProjectTeamMember,
                TeamEmail=x.TeamEmail,
                WorkLocation=x.WorkLocation
              

            }).FirstOrDefaultAsync();

            return stock;
        }

        public async Task<List<ProjectTeam>> ViewprojectTeamsDetails()
        {
            return await _context.projectTeams.ToListAsync();
        }
    }
}
