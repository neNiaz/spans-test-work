import { FC } from "react";
import MAIL_SOCIAL from "@/shared/images/Social-1.svg";
import GOOGLE_SOCIAL from "@/shared/images/Social-2.svg";
import SANKCIA_SOCIAL from "@/shared/images/Social.svg";
import OR_IMAGE from "@/shared/images/Or.svg";
import styles from "../auth-control.module.scss";

interface Props {}

const ControllerServices: FC<Props> = () => {
  return (
    <>
      <div className={styles.container_image}>
        <div className={styles.container_images}>
          <picture>
            <source srcSet={MAIL_SOCIAL} type="imagex/svg" />
            <img alt="404" src={MAIL_SOCIAL} loading="lazy" />
          </picture>
          <picture>
            <source srcSet={GOOGLE_SOCIAL} type="imagex/svg" />
            <img alt="404" src={GOOGLE_SOCIAL} loading="lazy" />
          </picture>
          <picture>
            <source srcSet={SANKCIA_SOCIAL} type="imagex/svg" />
            <img alt="404" src={SANKCIA_SOCIAL} loading="lazy" />
          </picture>
        </div>
      </div>
      <div className={styles.container_separate}>
        <picture>
          <source srcSet={OR_IMAGE} type="imagex/svg" />
          <img alt="404" src={OR_IMAGE} loading="lazy" />
        </picture>
      </div>
    </>
  );
};

export default ControllerServices;
