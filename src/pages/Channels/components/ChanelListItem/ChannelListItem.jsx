import { useState } from "react";
import "./ChannelListItem.css";
import InfoContainer from "../../../../components/InfoContainer/InfoContainer";
import DetailsContainer from "../../../../components/DetailsContainer/DetailsContainer";
import DropdownContainer from "../../../../components/DropdownContainer/DropdownContainer";

const OPTIONS = { ALL: "All", PERSONALIZE: "Personalize", NONE: "None", UNSUBSCRIBE: "Unsubscribe" };

export default function ChannelListItem() {
    return (
        <li className="channel-list-item">
            <a href="">
                <figure>
                    <img src="/images/default_user_image.jpg" alt="" />
                </figure>
            </a>
            <a href="">
                <DetailsContainer>
                    <h3 className="details-container-title">Jeikage</h3>
                    <InfoContainer size={"small"}>
                        <span>@Jeikage </span>
                        <span>3.94K subscribers</span>
                    </InfoContainer>
                    <InfoContainer size={"small"}>
                        <p>
                            Irure do aliqua veniam ipsum sit sunt ad sit nostrud mollit proident. Lorem velit aliquip
                            reprehenderit irure velit magna. Exercitation occaecat cupidatat sit commodo. Cupidatat quis
                            laboris adipisicing enim anim et voluptate minim occaecat laborum cupidatat sit sunt sint.
                        </p>
                    </InfoContainer>
                </DetailsContainer>
            </a>
            <div>
                <DropdownContainer
                    btnConfig={{
                        className: "btn-round",
                        icon1: "fa-regular fa-bell",
                        text: "Subscribed",
                        icon2: "fa-solid fa-chevron-down",
                    }}
                    hideOnClick={false}
                >
                    <li>
                        <i className="fa-solid fa-bell"></i>
                        <span>{OPTIONS.ALL}</span>
                    </li>
                    <li>
                        <i className="fa-regular fa-bell"></i>
                        <span>{OPTIONS.PERSONALIZE}</span>
                    </li>
                    <li>
                        <i className="fa-regular fa-bell-slash"></i>
                        <span>{OPTIONS.NONE}</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-user-minus"></i>
                        <span>{OPTIONS.UNSUBSCRIBE}</span>
                    </li>
                </DropdownContainer>
            </div>
        </li>
    );
}
