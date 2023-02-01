import '../../styles/sidebar.scss';

import yoga from "../../assets/yoga.svg";
import natation from "../../assets/swimmer.svg";
import velo from "../../assets/biker.svg";
import alter from "../../assets/dumbbell.svg";

/**
 * @description The Component that show the Sidebar nav
 * @property {Function} Sidebar nav by activitie
 * @returns { HTMLElement}
 */
function Sidebar() {
    return(
        <div className="sidebar">
            <nav className="sidebar__nav">
                <ul className="sidebar__icons">
                    <img src={yoga} alt="yoga sport" className="logo__img" />
                    <img src={natation} alt="natation sports" className="logo__img" />
                    <img src={velo} alt="velo sports" className="logo__img" />
                    <img src={alter} alt="alter sports" className="logo__img" />
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;