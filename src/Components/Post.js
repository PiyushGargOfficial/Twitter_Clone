import React from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import "../CSS/Post.css";
import { Avatar } from "@material-ui/core";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Piyush Garg
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />@ PiyushGarg
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Hello Guys, Whats UP!!</p>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/564x/16/e6/83/16e6835bf18eb46f09bf8831a904943e.jpg"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
