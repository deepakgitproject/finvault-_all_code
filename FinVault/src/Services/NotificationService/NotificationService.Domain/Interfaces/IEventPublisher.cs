namespace NotificationService.Domain.Interfaces;

// Abstraction for publishing events to RabbitMQ
// Application layer calls this — never sees MassTransit directly
public interface IEventPublisher
{
    Task PublishAsync<T>(T @event, CancellationToken ct = default) where T : class;
}
