import React from "react";
import { FaStar } from "react-icons/fa";
import { iconProps } from ".";
import { getTailwindColor } from "@/utils/get tailwind color";

export default function StarIcon(props: iconProps) {
  return (
    <>
      <FaStar
        fill={getTailwindColor("yellow", "400")}
        {...props}
      />
    </>
  );
}
