using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PaymentService.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddPaymentOtp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "OtpExpiresAt",
                table: "Payments",
                type: "datetimeoffset",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OtpHash",
                table: "Payments",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OtpExpiresAt",
                table: "Payments");

            migrationBuilder.DropColumn(
                name: "OtpHash",
                table: "Payments");
        }
    }
}
