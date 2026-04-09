namespace CardService.Domain.Interfaces;

public interface ICardEncryptionService
{
    string Encrypt(string plainText);
    string Decrypt(string cipherText);
}
