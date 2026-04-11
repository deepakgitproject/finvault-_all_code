// File: CardIssuer.cs - Domain entity for card issuers (banks) like HDFC, ICICI, SBI, etc.
namespace CardService.Domain.Entities;

public class CardIssuer
{
    public Guid Id { get; private set; }  // Unique identifier for this issuer
    public string Name { get; private set; } = string.Empty;  // Bank/issuer name
    public byte CardLength { get; private set; }  // Expected card number length (e.g., 16 digits)
    public string BinPrefixes { get; private set; } = string.Empty;  // Card number prefixes (first 6 digits)
    public DateTimeOffset CreatedAt { get; private set; }  // When this issuer record was created

    // Private constructor for EF Core
    private CardIssuer() { }

    // Factory method to create a new card issuer
    public static CardIssuer Create(string name, byte cardLength, string binPrefixes)
    {
        return new CardIssuer
        {
            Id = Guid.NewGuid(),
            Name = name,
            CardLength = cardLength,
            BinPrefixes = binPrefixes,
            CreatedAt = DateTimeOffset.UtcNow
        };
    }
}
