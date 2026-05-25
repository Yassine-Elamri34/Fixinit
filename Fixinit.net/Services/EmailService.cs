using MailKit.Net.Smtp;
using MimeKit;

namespace Fixinit.net.Services
{
    public class EmailService
    {
        public void SendEmail(string toEmail, string subject, string body)
        {
            var email = new MimeMessage();

            email.From.Add(
                MailboxAddress.Parse("elamriyassin34@gmail.com")
            );

            email.To.Add(
                MailboxAddress.Parse(toEmail)
            );

            email.Subject = subject;

            email.Body = new TextPart("html")
            {
                Text = body
            };

            using var smtp = new SmtpClient();

            smtp.Connect(
    "smtp.gmail.com",
    587,
    MailKit.Security.SecureSocketOptions.StartTls
);

            smtp.Authenticate(
                "elamriyassin34@gmail.com",
                "ozvp wfqz equp bzyh"
            );

            smtp.Send(email);

            smtp.Disconnect(true);
        }
    }
}