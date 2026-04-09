FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080

COPY src/Services/IdentityService/IdentityService.API/publish/ .

ENV ASPNETCORE_URLS=http://+:8080
ENTRYPOINT ["dotnet", "IdentityService.API.dll"]