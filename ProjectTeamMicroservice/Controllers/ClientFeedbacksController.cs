using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using log4net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectTeamMicroservice.Model;

namespace ProjectTeamMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientFeedbacksController : ControllerBase
    {
        private readonly ProjectTeamContext _context;

        public ClientFeedbacksController(ProjectTeamContext context)
        {
            _context = context;
        }

        // GET: api/ClientFeedbacks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientFeedback>>> GetClientFeedbacks()
        {
            ILog logg = LogManager.GetLogger(typeof(Program));
            if (_context.ClientFeedbacks == null)
          {
              return NotFound();
          }
            logg.Info("Client information retrived successfully");
            return await _context.ClientFeedbacks.ToListAsync();
        }

        // GET: api/ClientFeedbacks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClientFeedback>> GetClientFeedback(int id)
        {
            ILog logg = LogManager.GetLogger(typeof(Program));
            if (_context.ClientFeedbacks == null)
          {
              return NotFound();
          }
            var clientFeedback = await _context.ClientFeedbacks.FindAsync(id);

            if (clientFeedback == null)
            {
                return NotFound();
            }
            logg.Info("projecteam information retrived successfully");
            return clientFeedback;
        }

        // PUT: api/ClientFeedbacks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClientFeedback(int id, ClientFeedback clientFeedback)
        {
            ILog logg = LogManager.GetLogger(typeof(Program));
            if (id != clientFeedback.Id)
            {
                return BadRequest();
            }

            _context.Entry(clientFeedback).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                logg.Info("projecteam information updated successfully");
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientFeedbackExists(id))
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

        // POST: api/ClientFeedbacks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ClientFeedback>> PostClientFeedback(ClientFeedback clientFeedback)
        {
            ILog logg = LogManager.GetLogger(typeof(Program));
            if (_context.ClientFeedbacks == null)
          {
              return Problem("Entity set 'ProjectTeamContext.ClientFeedbacks'  is null.");
          }
            _context.ClientFeedbacks.Add(clientFeedback);
            await _context.SaveChangesAsync();
            logg.Info("projecteam information posted successfully");

            return CreatedAtAction("GetClientFeedback", new { id = clientFeedback.Id }, clientFeedback);
        }

        // DELETE: api/ClientFeedbacks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClientFeedback(int id)
        {
            ILog logg = LogManager.GetLogger(typeof(Program));
            if (_context.ClientFeedbacks == null)
            {
                return NotFound();
            }
            var clientFeedback = await _context.ClientFeedbacks.FindAsync(id);
            if (clientFeedback == null)
            {
                return NotFound();
            }

            _context.ClientFeedbacks.Remove(clientFeedback);
            await _context.SaveChangesAsync();
            logg.Info("projecteam information deleted successfully");

            return NoContent();
        }

        private bool ClientFeedbackExists(int id)
        {
            return (_context.ClientFeedbacks?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
