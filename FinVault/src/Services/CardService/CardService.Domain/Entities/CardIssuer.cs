namespace CardService.Domain.Entities;

public class CardIssuer
{
    public Guid Id { get; private set; }
    public string Name { get; private set; } = string.Empty;
    public byte CardLength { get; private set; }
    public string BinPrefixes { get; private set; } = string.Empty;
    public DateTimeOffset CreatedAt { get; private set; }

    private CardIssuer() { }

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
