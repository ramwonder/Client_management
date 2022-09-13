using ProjectTeamMicroservice.Model;

namespace ProjectTeamMicroservice.Repository
{
    public interface IProjectTeam
    {

        Task<List<ProjectTeam>> ViewprojectTeamsDetails();
        Task<ProjectTeam> GetProjectTeamDetails(int TeamId);
    }
}
