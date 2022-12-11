import './App.css';
import {useState} from "react";
import SongItem from "./components/SongItem";
import Playlist from './components/Playlist';
import NavFilter from './components/NavFilter'

const Songs = [
  {id: 0, title: "Give You The World", artist: "Steve Lacy", length: 4.33, genre: "R&B", calm: true, image: process.env.PUBLIC_URL + "/" + 'assets/images/steve.jpeg'},
  {id: 1, title: "Rainforest", artist: "Noname", length: 2.41, genre: "Rap",calm: false,image: process.env.PUBLIC_URL + "/" + 'assets/images/noname.jpg'},
  {id: 2, title: "Stay Flo", artist: "Solange", length: 2.55, genre: "R&B",calm: false,image: process.env.PUBLIC_URL + "/" + 'assets/images/solange.jpg'},
  {id: 3, title: "Consideration", artist: "Rihanna ft. SZA", length: 2.40, genre: "R&B",calm: false,image: process.env.PUBLIC_URL + "/" + 'assets/images/rihanna.png'},
  {id: 4, title: "She's Mine Pt.2", artist: "J. Cole", length: 4.38, genre: "Rap",calm: true,image: process.env.PUBLIC_URL + "/" + 'assets/images/jcole.jpeg'},
  {id: 5, title: "Love Language", artist: "SZA", length: 3.03, genre: "R&B",calm: true,image: process.env.PUBLIC_URL + "/" + 'assets/images/SZA.png'},
  {id: 6, title: "Lift Me Up", artist: "Rihanna", length: 3.15, genre: "R&B",calm: true,image: process.env.PUBLIC_URL + "/" + 'assets/images/rihanna2.jpeg'},
  {id: 7, title: "Hold On", artist: "The Internet", length: 6.45, genre: "R&B",calm: true,image: process.env.PUBLIC_URL + "/" + 'assets/images/internet.jpeg'},
  {id: 8, title: "Come Through and Chill", artist: "Miguel ft. J. Cole", length: 5.22, genre: "R&B",calm: true,image: process.env.PUBLIC_URL + "/" + 'assets/images/miguel.jpeg'},
  {id: 9, title: "Birdsong", artist: "Lute ft. JID, Saba", length: 3.26, genre: "Rap",calm: true,image: process.env.PUBLIC_URL + "/" + 'assets/images/lute.jpg'},
  {id: 10, title: "Same Drugs", artist: "Chance the Rapper", length: 4.17, genre: "Rap",calm: true,image: process.env.PUBLIC_URL + "/" + 'assets/images/chance.jpeg'},
  {id: 11, title: "Pink Matter", artist: "Frank Ocean ft. Andre 3000", length: 4.28, genre: "R&B",calm: true,image: process.env.PUBLIC_URL + "/" + 'assets/images/frank.jpeg'}

]

function App() {

  const [playlist, setPlaylist] = useState(Array(Songs.length).fill(0));
  const [allSongs, setSongs] = useState([...Songs]);
  const [playlistDuration, setDuration] = useState(0);
  const [genre, setGenre] = useState("all");
  const [vibe, setVibe] = useState("all");
  const [sort, setSort] = useState(null);

  
  const sorter = (selected) => {
    let sortCrit = selected.target.value;
    setSort(sortCrit)
    sortType()
  }

  function sortType(){
    let updatedLibrary
    if (sort === "shortToLong"){
      updatedLibrary = allSongs.sort(function(a, b){return a.length - b.length});
      setSongs(updatedLibrary);
    } else{
      updatedLibrary = allSongs.sort(function(a, b){return b.length - a.length});
      setSongs(updatedLibrary);
    }
  }


  function addToPlaylist(index, length){
      playlist[index] = playlist[index] + 1;
      setPlaylist({...playlist});
      setDuration(playlistDuration + length);
  }

  function removeFromPlaylist(index, length){
    if(playlist[index] > 0){
      playlist[index] = playlist[index] - 1;
      setPlaylist({...playlist});
      setDuration(playlistDuration - length);
    }
  }

  function resetPlaylist(){
      setPlaylist(Array(Songs.length).fill(0));
      setDuration(0);
  }

  const selectVibeFilter = (selected) => {
    setVibe(selected.target.value);
  }

  const selectGenreFilter = (selected) => {
    setGenre(selected.target.value);
  }

  const matchVibeFilter = item => {
    if(vibe === "all"){
      return true;
    } else if (vibe === "calm"){
        return item.calm;
    } else if (vibe === "upbeat"){
        return !(item.calm);
    }
  }

  const matchGenreFilter = item => {
    if(genre == "all"){
      return true;
    } else{
      return genre === item.genre;
    }
  }

  
  return (
    <div className="App">
      <div className="header">
      <h2> ⚡ PLAYLIST MAKER ⚡ </h2>
      <NavFilter selectVibeFilter={selectVibeFilter} selectGenreFilter={selectGenreFilter} sorter={sorter}/>
      </div>
      <div class="content">
      <div className="songs">
        {allSongs.map((item) => (
          matchVibeFilter(item) &&
          matchGenreFilter(item) &&
          <SongItem item={item} onClickAdd={addToPlaylist} onClickRemove={removeFromPlaylist}/>
        ))}
      </div>
      <div>
      <Playlist songs={Songs} playlist={playlist} playlistDuration={playlistDuration} onClick={resetPlaylist}/>
      </div>
      </div> 
    </div>
  );
}

export default App;
