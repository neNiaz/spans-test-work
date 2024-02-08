import { FC } from "react";
import styles from "./auth-control.module.scss";
import ControllerButton from "./Controller/controller-button.tsx";
import ControllerServices from "@/shared/components/auth-control/Controller/controller-services.tsx";

interface Props {}

const AuthControl: FC<Props> = () => {
  const buttons = [
    {
      text: "Sign Up",
      active: false,
    },
    {
      text: "Log in",
      active: true,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        {buttons.map(({ active, text }, key) => {
          return <ControllerButton key={key} text={text} active={active} />;
        })}
      </div>
      <ControllerServices />
    </>
  );
};

export default AuthControl;
