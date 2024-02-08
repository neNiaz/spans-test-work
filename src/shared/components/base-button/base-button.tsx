import { FC } from "react";
import styles from "./base-button.module.scss";
import classNames from "classnames";

export interface ButtonProps {
  text: string;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
  onRedirect?: () => void;
  variant: "full-black" | "full-blue" | "outline" | "none";
  color?: "white" | "pink" | "black" | "blue";
}

const BaseButton: FC<ButtonProps> = ({
  text,
  className,
  isLoading = false,
  onClick,
  onRedirect,
  color = "white",
  variant = "full",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (onRedirect) {
      onRedirect();
    }
  };

  return (
    <button
      className={classNames(styles.container_button, className, {
        [styles.loading]: isLoading,
        [styles[`variant-${variant}`]]: variant,
        [styles[`color-${color}`]]: color,
      })}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
};

export default BaseButton;
