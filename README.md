# Development

### Link to Deployed Website
`https://tiredcheetah888.github.io/development`

### Goal and Value of the Application
The goal of this app is to add songs from the song library to a playlist. You can filter the songs by genre and vibe, as well as sort them by song length.

### Usability Principles Considered

I placed the NavFilter section on the top so it's easy for users to access. I also placed the Playlist section to the right of the song cards so that it is always visible to users. I organized the heirarchy of information on the song cards according to what users expect to see first.

### Organization of Components

I have separate components for SongItem, PlaylistItem, Navfilter, and Playlist.
SongItems organize the song data displayed, PlaylistItems organize how the songs are displayed in the Playlist.
Navfilter holds my sort and filter functionality.
Playlist is where items get added/removed.

### How Data is Passed Down Through Components
Data is passed using props. Data from App.js populates the data for each SongItem.

### How the User Triggers State Changes

Users trigger state changes when they select a type of filter and/or sort method. They also strigger state changes when they add and remove items from the playlist. 
