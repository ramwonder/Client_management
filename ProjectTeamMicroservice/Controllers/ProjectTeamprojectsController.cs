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
    public class ProjectTeamprojectsController : ControllerBase
    {
        private readonly ProjectTeamContext _context;

        public ProjectTeamprojectsController(ProjectTeamContext context)
        {
            _context = context;
        }

        // GET: api/ProjectTeamprojects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectTeamproject>>> GetprojectTeamprojects()
        {
          if (_context.projectTeamprojects == null)
          {
              return NotFound();
          }
            return await _context.projectTeamprojects.ToListAsync();
        }

        // GET: api/ProjectTeamprojects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectTeamproject>> GetProjectTeamproject(int id)
        {
          if (_context.projectTeamprojects == null)
          {
              return NotFound();
          }
            var projectTeamproject = await _context.projectTeamprojects.FindAsync(id);

            if (projectTeamproject == null)
            {
                return NotFound();
            }

            return projectTeamproject;
        }

        // PUT: api/ProjectTeamprojects/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjectTeamproject(int id, ProjectTeamproject projectTeamproject)
        {
            if (id != projectTeamproject.Id)
            {
                return BadRequest();
            }

            _context.Entry(projectTeamproject).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectTeamprojectExists(id))
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

        // POST: api/ProjectTeamprojects
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProjectTeamproject>> PostProjectTeamproject(ProjectTeamproject projectTeamproject)
        {
          if (_context.projectTeamprojects == null)
          {
              return Problem("Entity set 'ProjectTeamContext.projectTeamprojects'  is null.");
          }
            _context.projectTeamprojects.Add(projectTeamproject);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjectTeamproject", new { id = projectTeamproject.Id }, projectTeamproject);
        }

        // DELETE: api/ProjectTeamprojects/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjectTeamproject(int id)
        {
            if (_context.projectTeamprojects == null)
            {
                return NotFound();
            }
            var projectTeamproject = await _context.projectTeamprojects.FindAsync(id);
            if (projectTeamproject == null)
            {
                return NotFound();
            }

            _context.projectTeamprojects.Remove(projectTeamproject);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjectTeamprojectExists(int id)
        {
            return (_context.projectTeamprojects?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
