FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["src/Services/Gateway/FinVault.Gateway/FinVault.Gateway.csproj", "src/Services/Gateway/FinVault.Gateway/"]
RUN dotnet restore "src/Services/Gateway/FinVault.Gateway/FinVault.Gateway.csproj"
COPY . .
WORKDIR "/src/src/Services/Gateway/FinVault.Gateway"
RUN dotnet publish "FinVault.Gateway.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:8080
ENTRYPOINT ["dotnet", "FinVault.Gateway.dll"]
