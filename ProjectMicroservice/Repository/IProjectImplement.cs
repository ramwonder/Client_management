using Microsoft.EntityFrameworkCore;
using ProjectMicroservice.Model;

namespace ProjectMicroservice.Repository
{
    public class IProjectImplement : IProject
    {
        private readonly MyContext _context;
        public IProjectImplement(MyContext context)
        {
            _context = context;
        }
        public async Task<Project> GetProjectDetails(int ProjectId)
        {
            var stock = await _context.projects.Where(x => x.ProjectId == ProjectId).Select(x => new Project()
            {
                ProjectId=x.ProjectId,
                ProjectName=x.ProjectName,
                ProjectCost=x.ProjectCost,
                ClientId=x.ClientId,
                Duration=x.Duration,
                Status=x.Status
               
            }).FirstOrDefaultAsync();

            return stock;
        }

        public  async Task<List<Project>> ViewProjectDetails()
        {
            return await _context.projects.ToListAsync();
        }
    }
}
