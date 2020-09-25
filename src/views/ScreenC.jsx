import React from "react";
import TextView from "../components/TextView";

const ScreenC = ({ route }) => {
  const id = route.params && route.params.number || parseInt(Math.random() * 1000)
  return (
    <TextView>Screen C - {id}</TextView>
  )
};

export default ScreenC;
