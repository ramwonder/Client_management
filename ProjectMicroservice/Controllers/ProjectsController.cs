﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using log4net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectMicroservice.Model;

namespace ProjectMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly MyContext _context;

        public ProjectsController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> Getprojects()
        {
            ILog logg = LogManager.GetLogger(typeof(Program));
            if (_context.projects == null)
          {
              return NotFound();
          }
            logg.Info("project information retrived successfully");
            return await _context.projects.ToListAsync();
        }

        // GET: api/Projects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
            ILog logg = LogManager.GetLogger(typeof(Program));
            if (_context.projects == null)
          {
              return NotFound();
          }
            var project = await _context.projects.FindAsync(id);

            if (project == null)
            {
                return NotFound();
            }
            logg.Info("project information retrived successfully");


            return project;
        }

        // PUT: api/Projects/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProject(int id, Project project)
        {
            ILog logg = LogManager.GetLogger(typeof(Program));
            if (id != project.ProjectId)
            {
                return BadRequest();
            }

            _context.Entry(project).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                logg.Info("project information updated successfully");
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(id))
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

        // POST: api/Projects
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Project>> PostProject(Project project)
        {
            ILog logg = LogManager.GetLogger(typeof(Program));
            if (_context.projects == null)
          {
              return Problem("Entity set 'MyContext.projects'  is null.");
          }
            _context.projects.Add(project);
            await _context.SaveChangesAsync();
            logg.Info("project information posted successfully");
            return CreatedAtAction("GetProject", new { id = project.ProjectId }, project);
        }

        // DELETE: api/Projects/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(int id)
        {
            ILog logg = LogManager.GetLogger(typeof(Program));
            if (_context.projects == null)
            {
                return NotFound();
            }
            var project = await _context.projects.FindAsync(id);
            if (project == null)
            {
                return NotFound();
            }

            _context.projects.Remove(project);
            await _context.SaveChangesAsync();
            logg.Info("project information deleted successfully");

            return NoContent();
        }

        private bool ProjectExists(int id)
        {
            return (_context.projects?.Any(e => e.ProjectId == id)).GetValueOrDefault();
        }
    }
}
