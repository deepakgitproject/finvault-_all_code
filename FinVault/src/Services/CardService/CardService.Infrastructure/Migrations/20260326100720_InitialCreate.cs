using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CardService.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CardIssuers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    CardLength = table.Column<byte>(type: "tinyint", nullable: false),
                    BinPrefixes = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CardIssuers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CreditCards",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MaskedNumber = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    CardholderName = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    ExpiryMonth = table.Column<byte>(type: "tinyint", nullable: false),
                    ExpiryYear = table.Column<short>(type: "smallint", nullable: false),
                    IssuerId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CreditLimit = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    OutstandingBalance = table.Column<decimal>(type: "decimal(18,2)", nullable: false, defaultValue: 0m),
                    BillingCycleStartDay = table.Column<byte>(type: "tinyint", nullable: false),
                    IsDefault = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    IsVerified = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeletedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    UpdatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CreditCards", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CreditCards_CardIssuers_IssuerId",
                        column: x => x.IssuerId,
                        principalTable: "CardIssuers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "CardIssuers",
                columns: new[] { "Id", "BinPrefixes", "CardLength", "CreatedAt", "Name" },
                values: new object[,]
                {
                    { new Guid("aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"), "4", (byte)16, new DateTimeOffset(new DateTime(2026, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), "Visa" },
                    { new Guid("bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb"), "51,52,53,54,55,2221-2720", (byte)16, new DateTimeOffset(new DateTime(2026, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), "MasterCard" },
                    { new Guid("cccccccc-cccc-cccc-cccc-cccccccccccc"), "34,37", (byte)15, new DateTimeOffset(new DateTime(2026, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), "Amex" },
                    { new Guid("dddddddd-dddd-dddd-dddd-dddddddddddd"), "60,65,81,82,508", (byte)16, new DateTimeOffset(new DateTime(2026, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), "RuPay" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_CardIssuers_Name",
                table: "CardIssuers",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CreditCards_IssuerId",
                table: "CreditCards",
                column: "IssuerId");

            migrationBuilder.CreateIndex(
                name: "IX_CreditCards_UserId_MaskedNumber",
                table: "CreditCards",
                columns: new[] { "UserId", "MaskedNumber" },
                unique: true,
                filter: "[IsDeleted] = 0");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CreditCards");

            migrationBuilder.DropTable(
                name: "CardIssuers");
        }
    }
}
