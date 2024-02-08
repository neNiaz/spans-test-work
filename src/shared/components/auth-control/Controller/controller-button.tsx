import { FC } from "react";
import classNames from "classnames";
import styles from "../auth-control.module.scss";

interface Props {
  text: string;
  active: boolean;
}

const ControllerButton: FC<Props> = ({ active, text }) => {
  return (
    <div
      className={classNames(styles.container_control, {
        [styles.container_control_active]: active,
      })}
    >
      <button>
        <span className={styles.container_font}>{text}</span>
      </button>
    </div>
  );
};

export default ControllerButton;
