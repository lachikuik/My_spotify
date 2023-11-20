import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
export default function Artists() {
    const [Artists, setArtists] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/artists?limit=20')
            .then(response => response.json())
            .then(data => {
                setArtists(data.map(art =>
                    <li key={art.id}>{art.name} <DisplayDetailArtists artistId={art.id} /></li>

                    )
                );
            });
    }, []);
    return ( 
        <div>
      <ul>{Artists}</ul>
</div>
    );
}

function DisplayDetailArtists({artistId}) {
    const[detailArtists, setDetailArtists] = useState(null);
    function handleClick() {
        fetch(`http://localhost:8000/albums/artist/${artistId}`)
            .then(response => response.json())
            .then(data => {
                setDetailArtists(data.map(album =>
                    <Link key={album.id} to={`/albums/${album.id}`}>
                    <li><DisplayAlbum albumId={album.id} /></li>
                    </Link>
                ));
            });
    }

    return (
        <div>
            <button onClick={handleClick}>
                voir détails
            </button>
            <ul>{detailArtists}</ul>
        </div>
    );
}

function DisplayAlbum({albumId}) {
    const[album, setAlbum] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:8000/albums/${albumId}`)
            .then(response => response.json())
            .then(data => {
                setAlbum(<div>{data.album.name}</div>);
            })
    }, []);

    return (
        <div>{album}</div>
    )
}