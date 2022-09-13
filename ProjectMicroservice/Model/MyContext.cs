using Microsoft.EntityFrameworkCore;

namespace ProjectMicroservice.Model
{
    public class MyContext:DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options) { }

      public  DbSet<Project> projects { get; set; }
      public  DbSet<ProjectDate> projectDates { get; set; }

    }
}
