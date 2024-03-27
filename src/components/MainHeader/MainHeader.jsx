import "./MainHeader.css";

export default function MainHeader({ toggleSidebarVisibility }) {
    return (
        <header id="header">
            <div>
                <button id="btn-nav" className="btn-basic" onClick={() => toggleSidebarVisibility()}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <h1 id="brand">
                    <a href="">
                        <i className="fa-brands fa-youtube"></i>
                        <span>YT Clone</span>
                    </a>
                </h1>
            </div>
            <div>
                <form action="" id="search-form">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
            <div>
                <button id="btn-create" className="btn-basic">
                    <i className="fa-solid fa-video"></i>
                </button>
                <button id="btn-notifications" className="btn-basic">
                    <i className="fa-regular fa-bell"></i>
                </button>
                <button id="btn-menu">
                    <div className="profile-pic">J</div>
                </button>
            </div>
        </header>
    );
}
