import React, { useEffect } from "react";

import styles from "./styles.module.scss";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  animationDuration?: number;
};

const Slider = ({
  children,
  className,
  innerClassName,
  animationDuration = 20,
}: Props) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--animation-duration",
      `${animationDuration}s`
    );
  }, [animationDuration]);

  return (
    <div className={`main-slider relative overflow-hidden ${className}`}>
      <div
        className={clsx("flex h-full", styles.marquee)}
        style={{ width: "max-content" }}
      >
        <span
          className={`${innerClassName} min-w-fit flex items-center whitespace-nowrap h-full pl-6`}
        >
          {children}
        </span>
        <span
          className={`${innerClassName} min-w-fit flex items-center whitespace-nowrap h-full`}
        >
          {children}
        </span>
      </div>
    </div>
  );
};

export default Slider;
