import styles from "./header.module.scss";
import LOGO_IMAGE from "@/shared/images/Logo.svg";
import PROFILE_IMAGE from "@/shared/images/Profile.svg";
import BURGER_IMAGE from "@/shared/images/burfer.svg";
import { useMediaQuery } from "@/shared/hooks/useMeduaQuery.ts";
import ImageUploader from "@/shared/components/image-uploader/image-uploader.tsx";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/shared/store/ducks/auth-control/reducer.ts";
import BaseButton from "@/shared/components/base-button/base-button.tsx";

const Header = () => {
  const liItems = ["Gallery", "About", "Store"];
  const { isMobile } = useMediaQuery();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userImage = isAuthenticated ? PROFILE_IMAGE : BURGER_IMAGE;

  console.log("isAuthenticated", isAuthenticated);
  return (
    <header className={styles.container}>
      <section>
        <span>
          <img src={LOGO_IMAGE} alt="logo" />
        </span>
      </section>
      <section className={styles.container_info}>
        <ul>
          {!isMobile &&
            liItems.map((elements, key) => {
              return <li key={key}>{elements}</li>;
            })}
          {!isAuthenticated ? (
            <BaseButton text={"Log in"} variant={"outline"} />
          ) : (
            <img src={userImage} alt="user photo" />
          )}
          {(isMobile && <img src={BURGER_IMAGE} alt="..." />) || (
            <ImageUploader variant={"full-black"} />
          )}
        </ul>
      </section>
    </header>
  );
};

export default Header;
