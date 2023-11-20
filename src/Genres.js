import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Genres() {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/genres?page=1&limit=100')
            .then(response => response.json())
            .then(data => {
                setGenres(data.map(g =>
                    <li key={g.id}>{g.name}<DisplayDetailGenres genreId={g.id}/></li>
                    )
                );
            });
    }, []);
    return ( 
      <ul>{genres}</ul>
    );
}

function DisplayDetailGenres({genreId}) {
    const[detailGenre, setDetailGenre] = useState(null);
    function handleClick() {
        fetch(`http://localhost:8000/genres/${genreId}`)
            .then(response => response.json())
            .then(data => {
                setDetailGenre(data.albums.slice(0, 5).map(album => 
                    <Link key={album} to={`/albums/${album}`}><li><DisplayAlbum albumId={album} /></li>
                    </Link>
                ));
            });
    }

    return (
        <div>
            <button onClick={handleClick}>
                voir détails
            </button>
            <ul>{detailGenre}</ul>
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

export default Genres;