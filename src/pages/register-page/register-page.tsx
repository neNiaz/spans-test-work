import { FC, useState } from "react";
import rightOctopus from "@/shared/images/Right.jpg";
import styles from "./register-page.module.scss";
import Input, {
  InputCheckboxProps,
} from "@/shared/components/input/input-checkbox.tsx";
import AuthControl from "@/shared/components/auth-control/auth-control.tsx";
import BaseButton from "@/shared/components/base-button/base-button.tsx";
import CLOSE_IMAGE from "@/shared/images/close.svg";
import SlidesGallery from "@/shared/components/slides/slides-gallery.tsx";
import { useMediaQuery } from "@/shared/hooks/useMeduaQuery.ts";
import { FadeInComponent } from "@/shared/components/fade-in/fade-in.tsx";
import { useNavigate } from "react-router-dom";
import { setIsAuthenticated } from "@/shared/store/ducks/auth-control/reducer.ts";
import { useAppDispatch } from "@/shared/hooks/reduxHelper.ts";

interface Props {}

const RegisterPage: FC<Props> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const { isMobile, isDesktopXLarge } = useMediaQuery();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsLoading(true);
    dispatch(setIsAuthenticated(true));

    // Имитация, так как бека нет.
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  const inputValues: InputCheckboxProps[] = [
    {
      text: "What’s your name?*",
      placeholder: "My name is...",
      value: password,
      setValue: (e) => setPassword(e),
      type: "text",
    },
    {
      text: "Your Email*",
      placeholder: "ivanivanov@gmail.ru",
      value: email,
      setValue: (e) => setEmail(e),
      type: "email",
    },
  ];

  return (
    <>
      <FadeInComponent>
        <div className={styles.container}>
          <section className={styles.container_section_input}>
            <AuthControl />
            <div className={styles.container_inputs}>
              {inputValues.map(
                ({ text, placeholder, type, value, setValue }, key) => {
                  return (
                    <Input
                      key={key}
                      text={text}
                      placeholder={placeholder}
                      type={type}
                      value={value}
                      setValue={setValue}
                    />
                  );
                },
              )}
            </div>
            <BaseButton
              text={"Next"}
              variant={"full-black"}
              onClick={handleButtonClick}
              isLoading={isLoading}
            />
            <SlidesGallery isMobile={isMobile} />
          </section>

          <section className={styles.container_section_image}>
            <picture>
              <source srcSet={rightOctopus} type="image/jpeg" />
              <img alt="404" src={rightOctopus} loading="lazy" />
            </picture>
          </section>
          {!isDesktopXLarge && (
            <section className={styles.container_close}>
              <img src={CLOSE_IMAGE} alt="x" />
            </section>
          )}
        </div>
      </FadeInComponent>
    </>
  );
};

export default RegisterPage;
