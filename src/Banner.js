import React, { useState } from "react";
import "./banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [searchShow, setSearchShow] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {searchShow ? <Search /> : null}
        <Button
          onClick={() => {
            setSearchShow(!searchShow);
          }}
          className="banner_searchButton"
          variant="outlined"
        >
          {searchShow ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>
          Go <br /> Near
        </h1>

        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
