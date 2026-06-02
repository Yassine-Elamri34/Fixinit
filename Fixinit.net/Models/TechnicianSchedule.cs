namespace Fixinit.net.Models
{
    public class TechnicianSchedule
    {
        public int Id { get; set; }

        public int TechnicianId { get; set; }

        public string DayOfWeek { get; set; } = string.Empty;

        public string StartHour { get; set; } = string.Empty;

        public string EndHour { get; set; } = string.Empty;

        public bool IsAvailable { get; set; }
    }
}