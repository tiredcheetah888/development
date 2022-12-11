export default function PlaylistItem({item, timesAdded}){
    if (timesAdded != null && timesAdded > 0){
        return (
            <div className="playlist-item">
            <p>{item.title} : play {timesAdded}x</p>
            </div>
        );
    }
    return <div classname="playlist-item"></div>;
}