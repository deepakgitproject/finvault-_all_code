//namespace FinVault.Shared.Contracts.Responses;

// Generic wrapper — EVERY endpoint returns this shape
// { "success": true, "message": "...", "data": {...}, "errors": [] }
//public class ApiResponse<T>
//{
//    public bool Success { get; set; }
//    public string Message { get; set; } = string.Empty;
//    public T? Data { get; set; }
//    public List<string> Errors { get; set; } = new();

//    public static ApiResponse<T> Ok(T data, string message = "Success") =>
//        new() { Success = true, Message = message, Data = data };

//    public static ApiResponse<T> Fail(string message, List<string>? errors = null) =>
//        new() { Success = false, Message = message, Errors = errors ?? new() };
//}


namespace FinVault.Shared.Contracts.Responses;
// Generic wrapper - EVERY endpoint returns this shape
public class ApiResponse<T>
{
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
    public T? Data { get; set; }
    public List<string> Errors { get; set; } = new();
    public static ApiResponse<T> Ok(T data, string msg = "Success")
       => new() { Success = true, Message = msg, Data = data };
    public static ApiResponse<T> Fail(string msg, List<string>? errs = null)
        => new()
        {
            Success = false,
            Message = msg,
            Errors = errs ?? new()
        };
}