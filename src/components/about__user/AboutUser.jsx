import React from "react";
import SocialNetwork from "../social__network/SocialNetwork";
import UserInfo from "../user__info/UserInfo";
import UserName from "../user__name/UserName";
import './AboutUser.css'

const AboutUser = ({ username, id, userInfo }) => {
  return (
    <div className="about__user">
      <UserName username={username} id={id} />
      <div className="about">about</div>
      <UserInfo userInfo={userInfo} />
      <SocialNetwork />
    </div>
  );
};

export default AboutUser;
