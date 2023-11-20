import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ "display": "block" }}>
            <div>
                <Link to="/albums">
                    <button variant="outlined">
                        Albums
                    </button>
                </Link>
            </div>
            <div><Link to="/genres">
                <button variant="outlined">
                    Genres
                </button>
            </Link></div>
            <div><Link to="/artists">
                <button variant="outlined">
                    Artistes
                </button>
            </Link></div>
        </div>
    )
}
export default Home;