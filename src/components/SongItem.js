import './SongItem.css';
function vibeCheck(vibe){
    if (vibe === true){
        return "calm"
    } return "upbeat"
}

export default function SongItem({item, onClickAdd, onClickRemove}){
    return (
        <div className="song-item">
        <div>
        <img src={item.image} alt={item.title} />
        <h4>{item.title} </h4>
        <p> {item.artist}</p>
        <div class='buttons'>
        <button onClick={() => onClickAdd(item.id, item.length)}>+</button>
        <button onClick={() => onClickRemove(item.id, item.length)}> - </button>
        </div>
        </div>
        <div class= "info">
        <p> Genre: {item.genre} </p>
        <p> Vibe: {vibeCheck(item.calm)}</p>
        <p> Time: {item.length} min</p>
        </div>
        </div>
    );
}