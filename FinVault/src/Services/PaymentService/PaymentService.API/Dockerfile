FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["src/Services/PaymentService/PaymentService.API/PaymentService.API.csproj", "src/Services/PaymentService/PaymentService.API/"]
# Copy shared and application dependencies
COPY ["src/Shared/FinVault.Shared.Contracts/FinVault.Shared.Contracts.csproj", "src/Shared/FinVault.Shared.Contracts/"]
COPY ["src/Services/PaymentService/PaymentService.Application/PaymentService.Application.csproj", "src/Services/PaymentService/PaymentService.Application/"]
COPY ["src/Services/PaymentService/PaymentService.Domain/PaymentService.Domain.csproj", "src/Services/PaymentService/PaymentService.Domain/"]
COPY ["src/Services/PaymentService/PaymentService.Infrastructure/PaymentService.Infrastructure.csproj", "src/Services/PaymentService/PaymentService.Infrastructure/"]
RUN dotnet restore "src/Services/PaymentService/PaymentService.API/PaymentService.API.csproj"
COPY . .
WORKDIR "/src/src/Services/PaymentService/PaymentService.API"
RUN dotnet publish "PaymentService.API.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:8080
ENTRYPOINT ["dotnet", "PaymentService.API.dll"]
