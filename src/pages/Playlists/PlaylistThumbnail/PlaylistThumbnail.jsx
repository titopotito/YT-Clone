import "./PlaylistThumbnail.css";

export default function PlaylistThumbnail({ src }) {
    return (
        <>
            <img src="/images/dog.jpg" alt="" className="playlist-bg-1" />
            <img src="/images/dog.jpg" alt="" className="playlist-bg-2" />
            <img src="/images/dog.jpg" alt="" className="playlist-thumbnail" />
        </>
    );
}
