//this is The bridge between the asp and sql 
using Fixinit.net.Models;
using Microsoft.EntityFrameworkCore;

namespace Fixinit.net.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options
        ) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Technician> Technicians { get; set; }

        public DbSet<TechnicianSchedule> TechnicianSchedules { get; set; }

        public DbSet<BusinessOwner> BusinessOwners { get; set; }
        public DbSet<Request> Requests { get; set; }
    }
}