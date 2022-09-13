using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectTeamMicroservice.Model;

namespace ProjectTeamMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectTeamsController : ControllerBase
    {
        private readonly ProjectTeamContext _context;

        public ProjectTeamsController(ProjectTeamContext context)
        {
            _context = context;
        }

        // GET: api/ProjectTeams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectTeam>>> GetprojectTeams()
        {
          if (_context.projectTeams == null)
          {
              return NotFound();
          }
            return await _context.projectTeams.ToListAsync();
        }

        // GET: api/ProjectTeams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectTeam>> GetProjectTeam(int id)
        {
          if (_context.projectTeams == null)
          {
              return NotFound();
          }
            var projectTeam = await _context.projectTeams.FindAsync(id);

            if (projectTeam == null)
            {
                return NotFound();
            }

            return projectTeam;
        }

        // PUT: api/ProjectTeams/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjectTeam(int id, ProjectTeam projectTeam)
        {
            if (id != projectTeam.ProjectTeamId)
            {
                return BadRequest();
            }

            _context.Entry(projectTeam).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectTeamExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProjectTeams
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProjectTeam>> PostProjectTeam(ProjectTeam projectTeam)
        {
          if (_context.projectTeams == null)
          {
              return Problem("Entity set 'ProjectTeamContext.projectTeams'  is null.");
          }
            _context.projectTeams.Add(projectTeam);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjectTeam", new { id = projectTeam.ProjectTeamId }, projectTeam);
        }

        // DELETE: api/ProjectTeams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjectTeam(int id)
        {
            if (_context.projectTeams == null)
            {
                return NotFound();
            }
            var projectTeam = await _context.projectTeams.FindAsync(id);
            if (projectTeam == null)
            {
                return NotFound();
            }

            _context.projectTeams.Remove(projectTeam);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjectTeamExists(int id)
        {
            return (_context.projectTeams?.Any(e => e.ProjectTeamId == id)).GetValueOrDefault();
        }
    }
}
