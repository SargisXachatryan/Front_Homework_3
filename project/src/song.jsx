export const Song = ({ title, duration, artist, id, onDelete, onMove, inPlaylist, moveSongDown, index }) => {
    return (
        <div className="song">
            <p>{title}</p>
            <strong> By {artist}</strong>
            <small> {duration} mins</small><br />
            <button onClick={onDelete}>Delete</button>
            {!inPlaylist && <button onClick={onMove}>Move to Playlist</button>}
            {inPlaylist && <button onClick={() => moveSongDown(index)}>Move Down</button>}
        </div>
    )
}
