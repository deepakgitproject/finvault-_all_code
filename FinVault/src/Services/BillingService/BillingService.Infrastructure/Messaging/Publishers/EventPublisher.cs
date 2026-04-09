using MassTransit;
using BillingService.Domain.Interfaces;

namespace BillingService.Infrastructure.Messaging.Publishers;

// MassTransit's IPublishEndpoint handles routing to the correct RabbitMQ exchange
// Application layer only calls IEventPublisher — never sees MassTransit directly
public class EventPublisher(IPublishEndpoint publishEndpoint) : IEventPublisher
{
    public async Task PublishAsync<T>(T @event, CancellationToken ct = default)
        where T : class
    {
        await publishEndpoint.Publish(@event, ct);
    }
}
