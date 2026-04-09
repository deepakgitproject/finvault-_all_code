using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PaymentService.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddExternalBillPayment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ExternalBillPayments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CardId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BillerName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    BillerCategory = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    BillNumber = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: false),
                    Status = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    OtpHash = table.Column<string>(type: "nvarchar(512)", maxLength: 512, nullable: true),
                    OtpExpiresAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    FailureReason = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    UpdatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExternalBillPayments", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ExternalBillPayments_UserId",
                table: "ExternalBillPayments",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ExternalBillPayments");
        }
    }
}
