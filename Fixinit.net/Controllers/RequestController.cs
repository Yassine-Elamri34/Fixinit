using Microsoft.AspNetCore.Mvc;
using Fixinit.net.Data;
using Fixinit.net.Models;

namespace Fixinit.net.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RequestController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RequestController(
            ApplicationDbContext context
        )
        {
            _context = context;
        }

        [HttpPost("create")]
        public IActionResult CreateRequest(
            Request request
        )
        {
            _context.Requests.Add(request);

            _context.SaveChanges();

            return Ok(
                "Request created successfully"
            );
        }

        [HttpGet("all")]
        public IActionResult GetAllRequests()
        {
            return Ok(
                _context.Requests.ToList()
            );
        }

        [HttpGet("technician/{technicianId}")]
        public IActionResult GetTechnicianRequests(
            int technicianId
        )
        {
            var requests =
                _context.Requests
                .Where(
                    r => r.TechnicianId ==
                    technicianId
                )
                .ToList();

            return Ok(requests);
        }

        [HttpPut("accept/{requestId}")]
        public IActionResult AcceptRequest(
            int requestId
        )
        {
            var request =
                _context.Requests
                .FirstOrDefault(
                    r => r.RequestId ==
                    requestId
                );

            if (request == null)
            {
                return NotFound();
            }

            request.Status = "Accepted";

            _context.SaveChanges();

            return Ok(
                "Request accepted"
            );
        }
        [HttpGet("business/{businessOwnerId}")]
        public IActionResult GetBusinessRequests(
    int businessOwnerId
)
        {
            var requests = _context.Requests
                .Where(r => r.BusinessOwnerId == businessOwnerId)
                .ToList();

            return Ok(requests);
        }
        [HttpPut("decline/{requestId}")]
        public IActionResult DeclineRequest(
            int requestId
        )
        {
            var request =
                _context.Requests
                .FirstOrDefault(
                    r => r.RequestId ==
                    requestId
                );

            if (request == null)
            {
                return NotFound();
            }

            request.Status = "Declined";

            _context.SaveChanges();

            return Ok(
                "Request declined"
            );
        }
    }
}