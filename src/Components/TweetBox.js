import React, { useState } from "react";
import "../CSS/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Piyush Garg",
      username: "piyushgarg",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://avatars.githubusercontent.com/u/52882017?s=400&u=90a28831b50112c0d908b6ceef0e716847de6b8d&v=4",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/52882017?s=400&u=90a28831b50112c0d908b6ceef0e716847de6b8d&v=4" />
          <input
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          type="submit"
          className="tweetBox__tweetButton"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
