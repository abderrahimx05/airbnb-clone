import React, { useState } from "react";
import "./banner.css";
import { Button } from "@material-ui/core";
function Banner() {
  const [searchShow, setSearchShow] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {searchShow ? <h1>Show date picker</h1> : null}
        <Button
          onClick={() => {
            setSearchShow(!searchShow);
          }}
          className="banner_searchButton"
          variant="outlined"
        >
          Search Dates
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
