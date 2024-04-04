export default function Playlist() {
    return (
        <li className="playlist">
            <a href="">
                <img src="/images/dog.jpg" alt="" className="playlist-bg-1" />
                <img src="/images/dog.jpg" alt="" className="playlist-bg-2" />
                <img src="/images/dog.jpg" alt="" className="playlist-thumbnail" />
                <div className="playlist-details">
                    <h3>Liked Videos</h3>
                    <div>
                        Private <i className="fa-solid fa-circle dot"></i> Playlist
                    </div>
                    <div>Updated today</div>
                </div>
            </a>
            <a href="">View full playlist</a>
        </li>
    );
}
