using MassTransit;

namespace NotificationService.Infrastructure.Messaging.Publishers;

public class EventPublisher(IPublishEndpoint publishEndpoint) : Domain.Interfaces.IEventPublisher
{
    public async Task PublishAsync<T>(T @event, CancellationToken ct) where T : class =>
        await publishEndpoint.Publish(@event, ct);
}
