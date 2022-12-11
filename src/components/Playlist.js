import PlaylistItem from "./PlaylistItem"
import './Playlist.css';

export default function Playlist({songs, playlist, playlistDuration, onClick}){
    return(
        <div className="playlist">
            <div className="heading">
            <div><h3>My Playlist</h3></div>
            <div><p>Duration: {(Math.round(playlistDuration* 100) / 100).toFixed(2)} min </p></div>
            </div>
            {songs.map((item) => ( 
            <PlaylistItem item={item} timesAdded={playlist[item.id]}/>
            ))}
            <button onClick={onClick}> Reset </button>
        </div>
    )
}