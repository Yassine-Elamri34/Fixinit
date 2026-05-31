using Microsoft.AspNetCore.Http;

namespace Fixinit.net.DTOs
{
    public class UploadProfilePictureDto
    {
        public int UserId { get; set; }

        public IFormFile File { get; set; }
    }
}