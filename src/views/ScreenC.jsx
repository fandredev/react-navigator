import React from "react";
import TextView from "../components/TextView";

const ScreenC = ({ route }) => {
  const id = route.params?.number || { params: {number: parseInt(Math.random() * 100) }}
  return (
    <TextView>Screen C - {id}</TextView>
  )
};

export default ScreenC;
