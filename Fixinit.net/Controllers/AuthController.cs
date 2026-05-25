//this down here means allow this fiole to use code from other places 
using Microsoft.AspNetCore.Mvc;
using Fixinit.net.Data;
using Fixinit.net.DTOs;
using Fixinit.net.Models;
using Fixinit.net.Services;


namespace Fixinit.net.Controllers
    //it means this file belongs to controllers section 
{
    [ApiController]
    //this class is an API controller
    [Route("api/[controller]")]
    //this creates the routes
    public class AuthController : ControllerBase
        //i created a controller called AuthController

    {
        private readonly ApplicationDbContext _context;
        // i created a database connection variable 

        private readonly EmailService _emailService;
        //email service variable i used it to send emails



        public AuthController(
    ApplicationDbContext context,
    EmailService emailService
)
           // this is our constructor
        {
            _context = context;

            _emailService = emailService;
            //store email service object
        }





        [HttpPost("register")]
        //this creates an endpoint : POST /api/Auth/register
        public IActionResult Register(RegisterDto dto)
           //this is the function that handles regesitration 
           //the regsiter dto this is the one that receives the data from teh frontend
        {
            var token = Guid.NewGuid().ToString();
            //we cretaed a random token to check who clicked the email 
            //Guid is Globally unique identifier 
            //To,string because URL's and database store text easily 
            var user = new User
            {
                //this is the new user object
                Name = dto.Name,
                Email = dto.Email,
                Password = dto.Password,
                Role = dto.Role,
                IsEmailConfirmed = false,
                //they will only be able to lgin only if it's true
                EmailConfirmationToken = token
            };
            //copy frontend values into user model

            _context.Users.Add(user);
            //prepare user insertion into databse
            _context.SaveChanges();
            //now it saves
            var confirmationLink =
                $"https://localhost:7294/api/Auth/confirm-email?token={token}";
            //this one created the email confirmation url 
            _emailService.SendEmail(
                user.Email,
                "Confirm Your Email",
                $"Click here to confirm your account: {confirmationLink}"
            );
            //here is the confirmation text

            return Ok("User registered successfully");
            // here is the confirmation 
        }





        [HttpGet("confirm-email")]
        //this create endpoint for email
        public IActionResult ConfirmEmail(string token)
            //this is the confirm mail function 
        {
            var user = _context.Users
                //access users table from database
                .FirstOrDefault(
                    u => u.EmailConfirmationToken == token
                    //find user who recieved that exact token 
                );
            //find first user matching token 

            if (user == null)
            {
                return BadRequest("Invalid token");
            }
            //if no matching user 

            user.IsEmailConfirmed = true;
            //the account is officilay verifoed now 1 instead of 0
            user.EmailConfirmationToken = null;
            // this ones deletes token after use 
            _context.SaveChanges();

            return Ok("Email confirmed successfully");
        }






        [HttpPost("login")]
        //this one is to create endpoint
        public IActionResult Login(LoginDto dto)
            //login function recives frontend login data 
        {
            var user = _context.Users
                //this is the user table 
                .FirstOrDefault(
                    u => u.Email == dto.Email
                );
            // this one is to find user whosee email matches login email

            if (user == null)
            {
                return BadRequest("User not found");
            }
            // email does not exist
           
            if (user.Password != dto.Password)
            {
                return BadRequest("Invalid password");
            }

            if (!user.IsEmailConfirmed)
            {
                return BadRequest("Please confirm your email first");
            }

            return Ok(new
            {
                message = "Login successful",
                role = user.Role
            });
            //login success 
        }
    }
}