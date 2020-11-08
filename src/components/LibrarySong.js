import React from 'react';

const LibrarySong = ({song, setCurrentSong, songs, id, audioRef, isPlaying, setSongs}) => {

    const songSelectHandler = () => {
        setCurrentSong(song);
        const newSongs = songs.map((s) => {
            if(s === song) {
                return {
                    ...s,
                    active: true
                };
            } else {
                return {
                    ...s,
                    active: false
                };
            }
        });
        setSongs(newSongs);
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audioRef.current.play()
                });
            }
        }
    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;