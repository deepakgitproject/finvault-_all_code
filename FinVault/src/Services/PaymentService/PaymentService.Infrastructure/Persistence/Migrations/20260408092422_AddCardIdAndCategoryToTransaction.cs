using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PaymentService.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddCardIdAndCategoryToTransaction : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CardId",
                table: "Transactions",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Transactions",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "Card Bill");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_CardId",
                table: "Transactions",
                column: "CardId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Transactions_CardId",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "CardId",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Transactions");
        }
    }
}
