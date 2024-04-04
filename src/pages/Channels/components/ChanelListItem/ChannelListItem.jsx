import "./ChannelListItem.css";

export default function ChannelListItem() {
    return (
        <li id="channel-list-item">
            <a href="">
                <figure>
                    <img src="/images/default_user_image.jpg" alt="" />
                </figure>
                <div className="channel-details">
                    <h3>Jeikage</h3>
                    <div>
                        <span>@Jeikage </span>
                        <i className="fa-solid fa-circle dot"></i>
                        <span>3.94K subscribers</span>
                    </div>
                    <p>
                        Irure do aliqua veniam ipsum sit sunt ad sit nostrud mollit proident. Lorem velit aliquip
                        reprehenderit irure velit magna. Exercitation occaecat cupidatat sit commodo. Cupidatat quis
                        laboris adipisicing enim anim et voluptate minim occaecat laborum cupidatat sit sunt sint.
                    </p>
                </div>
                <div>
                    <button className="btn-round">
                        <i className="fa-regular fa-bell"></i>
                        <span> Subscribe</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
            </a>
        </li>
    );
}
