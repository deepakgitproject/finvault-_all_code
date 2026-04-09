using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BillingService.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Bills",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CardId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TotalAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    MinimumDue = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    AmountPaid = table.Column<decimal>(type: "decimal(18,2)", nullable: false, defaultValue: 0m),
                    DueDate = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    BillingMonth = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: false),
                    Status = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeletedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    UpdatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bills", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RewardTiers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    MinPoints = table.Column<int>(type: "int", nullable: false),
                    CashbackPercent = table.Column<decimal>(type: "decimal(4,2)", nullable: false),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RewardTiers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PaymentSchedules",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BillId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ScheduledDate = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    UpdatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentSchedules", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaymentSchedules_Bills_BillId",
                        column: x => x.BillId,
                        principalTable: "Bills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RewardAccounts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TierId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AvailablePoints = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    TotalEarned = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    UpdatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RewardAccounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RewardAccounts_RewardTiers_TierId",
                        column: x => x.TierId,
                        principalTable: "RewardTiers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RewardTransactions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RewardAccountId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PaymentId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Type = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Points = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RewardTransactions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RewardTransactions_RewardAccounts_RewardAccountId",
                        column: x => x.RewardAccountId,
                        principalTable: "RewardAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "RewardTiers",
                columns: new[] { "Id", "CashbackPercent", "CreatedAt", "MinPoints", "Name" },
                values: new object[,]
                {
                    { new Guid("11111111-1111-1111-1111-111111111111"), 0.50m, new DateTimeOffset(new DateTime(2026, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), 0, "Silver" },
                    { new Guid("22222222-2222-2222-2222-222222222222"), 1.00m, new DateTimeOffset(new DateTime(2026, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), 5000, "Gold" },
                    { new Guid("33333333-3333-3333-3333-333333333333"), 2.00m, new DateTimeOffset(new DateTime(2026, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), 20000, "Platinum" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bills_UserId_CardId_BillingMonth",
                table: "Bills",
                columns: new[] { "UserId", "CardId", "BillingMonth" },
                unique: true,
                filter: "[IsDeleted] = 0");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentSchedules_BillId",
                table: "PaymentSchedules",
                column: "BillId");

            migrationBuilder.CreateIndex(
                name: "IX_RewardAccounts_TierId",
                table: "RewardAccounts",
                column: "TierId");

            migrationBuilder.CreateIndex(
                name: "IX_RewardAccounts_UserId",
                table: "RewardAccounts",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RewardTiers_Name",
                table: "RewardTiers",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RewardTransactions_RewardAccountId",
                table: "RewardTransactions",
                column: "RewardAccountId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PaymentSchedules");

            migrationBuilder.DropTable(
                name: "RewardTransactions");

            migrationBuilder.DropTable(
                name: "Bills");

            migrationBuilder.DropTable(
                name: "RewardAccounts");

            migrationBuilder.DropTable(
                name: "RewardTiers");
        }
    }
}
