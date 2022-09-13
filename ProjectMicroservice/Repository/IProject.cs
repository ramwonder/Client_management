using ProjectMicroservice.Model;

namespace ProjectMicroservice.Repository
{
    public interface IProject
    {
        Task<List<Project>> ViewProjectDetails();
        Task<Project> GetProjectDetails(int ProjectId);
    }
}
