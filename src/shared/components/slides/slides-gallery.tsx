import { FC } from "react";
import styles from "./slides-gallery.module.scss";
import classNames from "classnames";

interface Props {
  isMobile: boolean;
}

const SlidesGallery: FC<Props> = ({ isMobile }) => {
  return (
    <>
      {isMobile && (
        <div className={styles.container}>
          <span className={styles.container_dot}></span>
          <span
            className={classNames(styles.container_dot, {
              [styles.container_dot_active]: true,
            })}
          ></span>
          <span className={styles.container_dot}></span>
        </div>
      )}
    </>
  );
};

export default SlidesGallery;
