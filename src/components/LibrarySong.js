import React from 'react';

const LibrarySong = ({song, setCurrentSong, songs, audioRef, isPlaying, setSongs, setSongInfo, songInfo}) => {

    const songSelectHandler = async () => {
        setSongInfo({...songInfo, animationPercentage: 0});
        await setCurrentSong(song);
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
        if (isPlaying) audioRef.current.play();
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