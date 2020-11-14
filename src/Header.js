import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Playlists"
          type="text"
        />
      </div>
      <div className="header__right"></div>
      <Avatar src={user?.images[0].url} alt="Brendan's avatar" />
      <h4>{user?.display_name}</h4>
    </div>
  );
}

export default Header;