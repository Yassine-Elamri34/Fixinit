using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Fixinit.net.Data;
using Fixinit.net.DTOs;
using Fixinit.net.Models;

namespace Fixinit.net.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TechnicianController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _environment;

    public TechnicianController( 
        ApplicationDbContext context,
        IWebHostEnvironment environment
    )
        {
            _context = context;
            _environment = environment;
        }

        [HttpPost("update-profile")]
        public IActionResult UpdateProfile(UpdateTechnicianDto dto)
        {
            var technician = _context.Technicians
                .FirstOrDefault(t => t.UserId == dto.UserId);

            if (technician == null)
            {
                technician = new Technician
                {
                    UserId = dto.UserId
                };

                _context.Technicians.Add(technician);
            }
            technician.FirstName = dto.FirstName;
            technician.LastName = dto.LastName;
            technician.Description = dto.Description;
            technician.HourlyRate = dto.HourlyRate;
            technician.City = dto.City;
            technician.Region = dto.Region;
            technician.IsAvailable = dto.IsAvailable;

            _context.SaveChanges();

            return Ok("Technician profile updated");
        }

        [HttpPost("save-schedule")]
        public IActionResult SaveSchedule(
            List<TechnicianSchedule> schedules
        )
        {
            if (!schedules.Any())
            {
                return BadRequest("No schedules provided");
            }

            int technicianId = schedules.First().TechnicianId;

            var existingSchedules = _context.TechnicianSchedules
                .Where(s => s.TechnicianId == technicianId)
                .ToList();

            _context.TechnicianSchedules.RemoveRange(existingSchedules);

            _context.TechnicianSchedules.AddRange(schedules);

            _context.SaveChanges();

            return Ok("Schedule updated successfully");
        }

        [HttpGet("profile/{userId}")]
        public IActionResult GetProfile(int userId)
        {
            var technician = _context.Technicians
                .FirstOrDefault(t => t.UserId == userId);

            if (technician == null)
            {
                return NotFound();
            }

            return Ok(technician);
        }

        [HttpGet("schedule/{technicianId}")]
        public IActionResult GetSchedule(int technicianId)
        {
            var schedules = _context.TechnicianSchedules
                .Where(s => s.TechnicianId == technicianId)
                .ToList();

            return Ok(schedules);
        }
        [HttpGet("all")]
        public IActionResult GetAllTechnicians()
        {
            var technicians = _context.Technicians.ToList();

            return Ok(technicians);
        }

        [HttpPost("upload-picture")]
        public async Task<IActionResult> UploadPicture(
            [FromForm] UploadProfilePictureDto dto
        )
        {
            var technician = _context.Technicians
                .FirstOrDefault(t => t.UserId == dto.UserId);

            if (technician == null)
            {
                return NotFound("Technician not found");
            }

            var uploadsFolder = Path.Combine(
    Directory.GetCurrentDirectory(),
    "wwwroot",
    "images"
);

            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            var fileName =
                Guid.NewGuid().ToString()
                + Path.GetExtension(dto.File.FileName);

            var filePath =
                Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(
                filePath,
                FileMode.Create
            ))
            {
                await dto.File.CopyToAsync(stream);
            }

            technician.ProfilePicture =
                "/images/" + fileName;

            _context.SaveChanges();

            return Ok(technician.ProfilePicture);
        }
    }


}
