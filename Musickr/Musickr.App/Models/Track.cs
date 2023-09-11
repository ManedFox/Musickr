namespace Musickr.App.Models;

public class Track
{
    // Title of the track
    public string Title { get; set; }
    
    // Author of the track
    public string Author { get; set; }
    
    // SoundCloud URL of the track
    public string Url { get; set; }
    
    // Genre of the track
    public string Genre { get; set; }
    
    // Artwork URL of the track
    public string ArtworkUrl { get; set; }
    
    // Track tags
    public string[] Tags { get; set; }
}