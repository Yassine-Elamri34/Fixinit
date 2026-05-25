//data coming from the front and it reperesnt what front is allowed to sent 
//we used different because front end should not control everything from the front
namespace Fixinit.net.DTOs
{
    public class RegisterDto
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }
    }
}