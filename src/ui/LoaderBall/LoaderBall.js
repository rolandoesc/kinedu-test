import React from "react";

const LoaderBall = ({classes}) => {
  // <div class="ball__loader">
  //   <div class="ball--loader__ball ball__1"></div>
  //   <div class="ball--loader__ball ball__2"></div>
  //   <div class="ball--loader__ball ball__3"></div>
  // </div>

  return (
    <div className={"ball--loader__ball " + classes }></div>
  )
}

export default LoaderBall;