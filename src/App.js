import React, {useRef, useState} from 'react';
//Import Styles
import './styles/app.scss';
//Import Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//Import Util
import data from './util';

function App() {
    const audioRef = useRef(null);
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration})
    }
    return (
        <div className="App">
            <Song currentSong={currentSong}/>
            <Player songInfo={songInfo}
                    setSongInfo={setSongInfo}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    currentSong={currentSong}/>
            <Library audioRef={audioRef}
                     setSongs={setSongs}
                     isPlaying={isPlaying}
                     songs={songs}
                     setCurrentSong={setCurrentSong}/>
            <audio onTimeUpdate={timeUpdateHandler}
                   onLoadedMetadata={timeUpdateHandler}
                   ref={audioRef}
                   src={currentSong.audio}>
            </audio>
        </div>
    );
}

export default App;
