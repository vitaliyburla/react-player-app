import React from 'react';
import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus, songInfo, setSongInfo}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className={'library-songs'}>
                {songs.map((song) => (
                    <LibrarySong audioRef={audioRef}
                                 setCurrentSong={setCurrentSong}
                                 setSongInfo={setSongInfo}
                                 songInfo={songInfo}
                                 isPlaying={isPlaying}
                                 setSongs={setSongs}
                                 song={song}
                                 songs={songs}
                                 id={song.id}
                                 key={song.id}/>
                ))}
            </div>
        </div>
    )
}

export default Library;