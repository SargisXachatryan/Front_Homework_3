import { useState } from 'react'
import './App.css'
import { SongList } from './Songlist'
import { Playlist } from './Playlist'

function App() {
  const [songs, setSongs] = useState([
    { id: 101, title: "Symphony No 40", artist: "Mozart", duration: 20 },
    { id: 102, title: "Symphony No 30", artist: "Mozart", duration: 15 },
    { id: 103, title: "Symphony No 20", artist: "Mozart", duration: 25 },
    { id: 104, title: "Symphony No 10", artist: "Mozart", duration: 18 }
  ])

  const [playlist, setPlaylist] = useState([])

  const removeFromSongList = id => {
    setSongs(songs.filter(x => x.id !== id))
  }

  const removeFromPlaylist = id => {
    setPlaylist(playlist.filter(x => x.id !== id))
  }

  const handleMoveToPlaylist = (song) => {
    if (!playlist.find(s => s.id === song.id)) {
      setPlaylist([...playlist, song])
    }
  }

  const moveSongDown = (index, isPlaylist) => {
    if (isPlaylist) {
      if (index < playlist.length - 1) {
        const newPlaylist = [...playlist]
        ;[newPlaylist[index], newPlaylist[index + 1]] = [newPlaylist[index + 1], newPlaylist[index]]
        setPlaylist(newPlaylist)
      }
    } else {
      if (index < songs.length - 1) {
        const newSongs = [...songs]
        ;[newSongs[index], newSongs[index + 1]] = [newSongs[index + 1], newSongs[index]]
        setSongs(newSongs)
      }
    }
  }

  return (
    <>
      <div className="row">
        <SongList items={songs} onDelete={removeFromSongList} onMove={handleMoveToPlaylist} moveSongDown={moveSongDown} />
      </div>
      <div className="row">
        <Playlist name="Liked" songs={playlist} onDelete={removeFromPlaylist} moveSongDown={(index) => moveSongDown(index, true)} />
      </div>
    </>
  )
}

export default App
