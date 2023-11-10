namespace api.Utilities;

public class Headers
{
    public const string UserId = nameof(UserId);

    public static string GetUserId(IHeaderDictionary headers)
    {
        return headers.TryGetValue(UserId, out var userId) ? userId! : string.Empty;
    }
}
