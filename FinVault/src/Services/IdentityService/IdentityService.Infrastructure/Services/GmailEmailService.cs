using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Configuration;
using IdentityService.Domain.Interfaces;

namespace IdentityService.Infrastructure.Services;

public class GmailEmailService(IConfiguration config) : IEmailService
{
    public async Task SendEmailAsync(string toEmail, string subject, string htmlBody, CancellationToken ct = default)
    {
        var senderEmail = config["Email:SenderAddress"]!;
        var senderName = config["Email:SenderName"] ?? "FinVault";
        var appPassword = config["Email:AppPassword"]!;

        using var message = new MailMessage();
        message.From = new MailAddress(senderEmail, senderName);
        message.To.Add(new MailAddress(toEmail));
        message.Subject = subject;
        message.Body = htmlBody;
        message.IsBodyHtml = true;

        using var smtp = new SmtpClient("smtp.gmail.com", 587);
        smtp.Credentials = new NetworkCredential(senderEmail, appPassword);
        smtp.EnableSsl = true;

        await smtp.SendMailAsync(message, ct);
    }
}