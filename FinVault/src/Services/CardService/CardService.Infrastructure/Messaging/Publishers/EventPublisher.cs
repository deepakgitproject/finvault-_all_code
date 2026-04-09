using MassTransit;
using CardService.Domain.Interfaces;

namespace CardService.Infrastructure.Messaging.Publishers;

public class EventPublisher(IPublishEndpoint publishEndpoint) : IEventPublisher
{
    public async Task PublishAsync<T>(T @event, CancellationToken ct = default)
        where T : class
    {
        await publishEndpoint.Publish(@event, ct);
    }
}
