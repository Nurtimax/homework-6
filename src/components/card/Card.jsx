import React from "react";
import AboutUser from "../about__user/AboutUser";
import BackgroundColor from "../background__color/BackgroundColor";
import CardWrapper from "../card_wrapper/CardWrapper";
import UserProfile from "../user_profile/UserProfile";
import "./Card.css";

const Card = ({ userData }) => {
  return (
    <div className="Card">
      <BackgroundColor style={userData.wallpaper} />
      <CardWrapper>
        <UserProfile profilePic={userData.profilePic} alt={userData.username} />
        <AboutUser
          username={userData.username}
          id={userData.id}
          userInfo={userData.userInfo}
        ></AboutUser>
      </CardWrapper>
    </div>
  );
};

export default Card;
