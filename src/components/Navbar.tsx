import { ExploreIcon } from "../assets/components/ExploreIcon";
import { OfferIcon } from "../assets/components/OfferIcon";
import { PersonOutlineIcon } from "../assets/components/PersonOutlineIcon";

export default function Navbar() {
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <ExploreIcon fill="#2c2c2c" width="36px" height="36px" />
            <p>Explore</p>
          </li>
          <li className="navbarListItem">
            <OfferIcon fill="#2c2c2c" width="36px" height="36px" />
            <p>Offer</p>
          </li>
          <li className="navbarListItem">
            <PersonOutlineIcon fill="#2c2c2c" width="36px" height="36px" />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
