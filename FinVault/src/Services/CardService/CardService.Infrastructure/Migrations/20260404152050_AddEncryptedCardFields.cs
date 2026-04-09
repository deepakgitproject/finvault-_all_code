using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CardService.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddEncryptedCardFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_CreditCards_UserId_MaskedNumber",
                table: "CreditCards");

            migrationBuilder.AddColumn<string>(
                name: "CardNumberLastFour",
                table: "CreditCards",
                type: "nvarchar(4)",
                maxLength: 4,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EncryptedCVV",
                table: "CreditCards",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EncryptedCardNumber",
                table: "CreditCards",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_CreditCards_UserId_CardNumberLastFour_CardholderName",
                table: "CreditCards",
                columns: new[] { "UserId", "CardNumberLastFour", "CardholderName" },
                unique: true,
                filter: "[IsDeleted] = 0");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_CreditCards_UserId_CardNumberLastFour_CardholderName",
                table: "CreditCards");

            migrationBuilder.DropColumn(
                name: "CardNumberLastFour",
                table: "CreditCards");

            migrationBuilder.DropColumn(
                name: "EncryptedCVV",
                table: "CreditCards");

            migrationBuilder.DropColumn(
                name: "EncryptedCardNumber",
                table: "CreditCards");

            migrationBuilder.CreateIndex(
                name: "IX_CreditCards_UserId_MaskedNumber",
                table: "CreditCards",
                columns: new[] { "UserId", "MaskedNumber" },
                unique: true,
                filter: "[IsDeleted] = 0");
        }
    }
}
