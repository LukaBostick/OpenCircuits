import {CircuitInfoHelpers} from "shared/utils/CircuitInfoHelpers";
import {HeaderPopups} from "shared/state/Header/state";

import {HeaderLeft} from "./Left";
import {HeaderRight} from "./Right";

import "./index.scss";

type Utility = {
    popupName: HeaderPopups;
    img: string;
    text: string;
}

type Props = {
    img: string;
    helpers: CircuitInfoHelpers;
    extraUtilities: Utility[];
}
export const Header = ({ img, helpers, extraUtilities }: Props) => (
    <header id="header">
        <HeaderLeft helpers={helpers} />

        <div>
            <a href="/home" target="_blank">
                <img className="header__center__logo" src={img} height="100%" alt="OpenCircuits logo" />
            </a>
            <a href="https://github.com/OpenCircuits/OpenCircuits/" rel="noreferrer" target="_blank">
                <img className="header__center__github" src="img/icons/github.svg" height="100%" alt="GitHub logo" />
            </a>
        </div>

        <HeaderRight helpers={helpers} extraUtilities={extraUtilities} />
    </header>
);
