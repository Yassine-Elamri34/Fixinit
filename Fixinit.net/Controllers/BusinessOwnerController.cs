using Microsoft.AspNetCore.Mvc;
using Fixinit.net.Data;
using Fixinit.net.Models;
using Fixinit.net.DTOs;

namespace Fixinit.net.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BusinessOwnerController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BusinessOwnerController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("update-profile")]
        public IActionResult UpdateProfile(
            UpdateBusinessOwnerDto dto
        )
        {
            var businessOwner = _context.BusinessOwners
                .FirstOrDefault(
                    b => b.UserId == dto.UserId
                );

            if (businessOwner == null)
            {
                businessOwner = new BusinessOwner
                {
                    UserId = dto.UserId
                };

                _context.BusinessOwners.Add(
                    businessOwner
                );
            }

            businessOwner.BusinessName =
                dto.BusinessName;

            businessOwner.ContactPersonFirstName =
                dto.ContactPersonFirstName;

            businessOwner.ContactPersonLastName =
                dto.ContactPersonLastName;

            businessOwner.BusinessType =
                dto.BusinessType;

            businessOwner.PhoneNumber =
                dto.PhoneNumber;

            businessOwner.Address =
                dto.Address;

            businessOwner.City =
                dto.City;

            businessOwner.Region =
                dto.Region;

            businessOwner.Description =
                dto.Description;

            _context.SaveChanges();

            return Ok(
                "Business profile updated successfully"
            );
        }

        [HttpGet("profile/{userId}")]
        public IActionResult GetProfile(
            int userId
        )
        {
            var businessOwner =
                _context.BusinessOwners
                .FirstOrDefault(
                    b => b.UserId == userId
                );

            if (businessOwner == null)
            {
                return NotFound();
            }

            return Ok(businessOwner);
        }
    }
}