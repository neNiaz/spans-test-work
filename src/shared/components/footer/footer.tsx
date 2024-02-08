import styles from "./footer.module.scss";
import FOOTER_IMAGE from "@/shared/images/tiktok.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <span>
        <img src={FOOTER_IMAGE} alt="img" />
      </span>
      <span className={styles.container_text}>Privacy Policy</span>
    </footer>
  );
};

export default Footer;
