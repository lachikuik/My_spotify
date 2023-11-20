import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AlbumDetails() {
    const { id } = useParams();
    const [data, setResponse] = useState();
   
    useEffect(
        () => {
            fetch(`http://localhost:8000/albums/${id}`)
                .then((response) => response.json())
                .then((data) => setResponse(data))
        }, []);
    return (
        <div>
            {data && data.tracks.map((song) => 
                <figure key= {song.id}>
                    <figcaption>{song.track_no}/{song.name}</figcaption>
                    <audio
                        controls
                        src={song.mp3}>
                    </audio>
                </figure>
            )}
        </div>
    )
}

export default AlbumDetails;