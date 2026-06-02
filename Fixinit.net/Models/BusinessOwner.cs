namespace Fixinit.net.Models
{
    public class BusinessOwner
    {
        public int BusinessOwnerId { get; set; }

        public int UserId { get; set; }

        public string BusinessName { get; set; } = string.Empty;

        public string ContactPersonFirstName { get; set; } = string.Empty;

        public string ContactPersonLastName { get; set; } = string.Empty;

        public string BusinessType { get; set; } = string.Empty;

        public string PhoneNumber { get; set; } = string.Empty;

        public string Address { get; set; } = string.Empty;

        public string City { get; set; } = string.Empty;

        public string Region { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string ProfilePicture { get; set; } = string.Empty;
    }
}