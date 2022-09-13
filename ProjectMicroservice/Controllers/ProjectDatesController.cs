using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectMicroservice.Model;

namespace ProjectMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectDatesController : ControllerBase
    {
        private readonly MyContext _context;

        public ProjectDatesController(MyContext context)
        {
            _context = context;
        }

        // GET: api/ProjectDates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectDate>>> GetprojectDates()
        {
          if (_context.projectDates == null)
          {
              return NotFound();
          }
            return await _context.projectDates.ToListAsync();
        }

        // GET: api/ProjectDates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectDate>> GetProjectDate(int id)
        {
          if (_context.projectDates == null)
          {
              return NotFound();
          }
            var projectDate = await _context.projectDates.FindAsync(id);

            if (projectDate == null)
            {
                return NotFound();
            }

            return projectDate;
        }

        // PUT: api/ProjectDates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjectDate(int id, ProjectDate projectDate)
        {
            if (id != projectDate.Id)
            {
                return BadRequest();
            }

            _context.Entry(projectDate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectDateExists(id))
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

        // POST: api/ProjectDates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProjectDate>> PostProjectDate(ProjectDate projectDate)
        {
          if (_context.projectDates == null)
          {
              return Problem("Entity set 'MyContext.projectDates'  is null.");
          }
            _context.projectDates.Add(projectDate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjectDate", new { id = projectDate.Id }, projectDate);
        }

        // DELETE: api/ProjectDates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjectDate(int id)
        {
            if (_context.projectDates == null)
            {
                return NotFound();
            }
            var projectDate = await _context.projectDates.FindAsync(id);
            if (projectDate == null)
            {
                return NotFound();
            }

            _context.projectDates.Remove(projectDate);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjectDateExists(int id)
        {
            return (_context.projectDates?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
