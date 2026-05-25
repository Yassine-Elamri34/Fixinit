//our  database structure 
namespace Fixinit.net.Models
    //means this file belongs to models folder group 
{
    public class User
        //i created a template for every user 
    {
        public int Id { get; set; }

        public string Name { get; set; }
        // to remove the underline green we can put this :
        //public string Name { get; set; } = string.Empty;
        //it basicly means that name starts as empty instead of null 
        public string Email { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }

        public string? EmailConfirmationToken { get; set; }
        //? null is allowed 
        //it means somtimes this can be empty 

        public bool IsEmailConfirmed { get; set; }
    }
}