import React from 'react'
import { Song } from './Song'

export const Playlist = ({ name, songs, onDelete, moveSongDown }) => {
  return (
    <div>
      <h2>{name}</h2>
      {songs.map((song, index) => (
        <Song
          key={song.id}
          {...song}
          onDelete={() => onDelete(song.id)}
          moveSongDown={moveSongDown}
          index={index}
          inPlaylist={true}
        />
      ))}
    </div>
  )
}