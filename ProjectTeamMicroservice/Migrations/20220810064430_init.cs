using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectTeamMicroservice.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClientFeedbacks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeamId = table.Column<int>(type: "int", nullable: false),
                    TeamName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProjectId = table.Column<int>(type: "int", nullable: false),
                    ProjectName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    client_rating_project_process = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    client_rating_Project_status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientFeedbacks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "projectTeamprojects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectTeamId = table.Column<int>(type: "int", nullable: false),
                    ProjectManager = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Department = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProjectId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProjectName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClientId = table.Column<int>(type: "int", nullable: false),
                    ClientName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Progress = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_projectTeamprojects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "projectTeams",
                columns: table => new
                {
                    ProjectTeamId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProjectTeamName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProjectTeamManager = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProjectTeamMember = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WorkLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TeamEmail = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_projectTeams", x => x.ProjectTeamId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClientFeedbacks");

            migrationBuilder.DropTable(
                name: "projectTeamprojects");

            migrationBuilder.DropTable(
                name: "projectTeams");
        }
    }
}
