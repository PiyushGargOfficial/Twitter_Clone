import React from "react";
import "../CSS/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        {/* Brings the tweet and all the information using the tweet id with the styling as well. It's like an embedding*/}
        <TwitterTweetEmbed tweetId={"1387901003664699392"} />

        {/* Brings the whole timeline based on the screenName */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        {/* Takes you to twitter where all the text mentioned in the options appear */}
        <TwitterShareButton
          url={"https://facebook.com/piyushgarg01"}
          options={{ text: "#reactjs is awesome", via: "Piyushxx" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
