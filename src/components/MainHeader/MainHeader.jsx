import "./MainHeader.css";

export default function MainHeader({ toggleSidebarVisibility }) {
    return (
        <header id="header">
            <div>
                <button id="btn-nav" className="btn-icon" onClick={() => toggleSidebarVisibility()}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <h1 id="brand">
                    <a href="">
                        <i className="fa-brands fa-youtube"></i>
                        <span>YT Barebones</span>
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
                <button id="btn-create" className="btn-icon">
                    <i className="fa-solid fa-video"></i>
                </button>
                <button id="btn-notifications" className="btn-icon">
                    <i className="fa-regular fa-bell"></i>
                </button>
                <button id="btn-menu">
                    <div className="profile-pic">J</div>
                </button>
            </div>
        </header>
    );
}
