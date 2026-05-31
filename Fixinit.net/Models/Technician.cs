namespace Fixinit.net.Models
{
    public class Technician
    {
        public int TechnicianId { get; set; }

        public int UserId { get; set; }
        public string FirstName { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;
        public string ProfilePicture { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public decimal HourlyRate { get; set; }

        public string City { get; set; } = string.Empty;

        public string Region { get; set; } = string.Empty;

        public bool IsAvailable { get; set; }
    }
}