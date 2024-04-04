import { useState } from "react";
import "./ChannelListItem.css";

export default function ChannelListItem() {
    const SortOptions = { ALL: "All", PERSONALIZE: "Personalize", NONE: "None", UNSUBSCRIBE: "Unsubscribe" };

    const [sortOption, setSortOption] = useState(SortOptions[1]);
    const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false);

    function toggleSortDropdownVisibility() {
        setIsSortDropdownVisible(!isSortDropdownVisible);
    }

    return (
        <li className="channel-list-item">
            <a href="">
                <figure>
                    <img src="/images/default_user_image.jpg" alt="" />
                </figure>
            </a>
            <a href="">
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
            </a>
            <div>
                <div className="dropdown-container">
                    <button className="btn-round" onClick={() => toggleSortDropdownVisibility()}>
                        <i className="fa-regular fa-bell"></i>
                        <span>Subscribed</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    {isSortDropdownVisible ? (
                        <Dropdown
                            SortOptions={SortOptions}
                            toggleSortDropdownVisibility={toggleSortDropdownVisibility}
                            setSortOption={setSortOption}
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </li>
    );
}

function Dropdown({ SortOptions, toggleSortDropdownVisibility, setSortOption }) {
    return (
        <ul className="dropdown">
            <li>
                <i className="fa-solid fa-bell"></i>
                <span>{SortOptions.ALL}</span>
            </li>
            <li>
                <i className="fa-regular fa-bell"></i>
                <span>{SortOptions.PERSONALIZE}</span>
            </li>
            <li>
                <i className="fa-regular fa-bell-slash"></i>
                <span>{SortOptions.NONE}</span>
            </li>
            <li>
                <i className="fa-solid fa-user-minus"></i>
                <span>{SortOptions.UNSUBSCRIBE}</span>
            </li>
        </ul>
    );
}
