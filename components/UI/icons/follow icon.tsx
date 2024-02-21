import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { iconProps } from ".";

export default function FollowIcon(props: iconProps) {
  return (
    <>
      <FaUserFriends {...props} />
    </>
  );
}
