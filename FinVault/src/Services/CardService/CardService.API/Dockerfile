FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080

COPY src/Services/CardService/CardService.API/publish/ .

ENV ASPNETCORE_URLS=http://+:8080
ENTRYPOINT ["dotnet", "CardService.API.dll"]
