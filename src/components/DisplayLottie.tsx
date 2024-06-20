"use client"
import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "./Loading";

interface DisplayLottieProps {
  animationData: any;
}

export default class DisplayLottie extends Component<DisplayLottieProps> {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}
