import { FC, ReactNode, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import { FadeInComponent } from "@/shared/components/fade-in/fade-in.tsx";

interface Props {
  children: ReactNode;
  open: boolean;
}

const modalRootElement = document.querySelector("#modal");

const Modal: FC<Props> = ({ children, open }) => {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    modalRootElement?.appendChild(element);

    return () => {
      modalRootElement?.removeChild(element);
    };
  });

  if (open) {
    return createPortal(
      <FadeInComponent>
        <div className={styles.container}>
          <div className={styles.container_content}>{children}</div>
        </div>
      </FadeInComponent>,
      element,
    );
  }

  return null;
};

export default Modal;
