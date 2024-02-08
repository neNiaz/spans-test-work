import { ChangeEvent, FC } from "react";
import styles from "./input-checkbox.module.scss";
import HIDE_IMAGE from "@/shared/images/hide.svg";

export interface InputCheckboxProps {
  type: "text" | "email";
  value: string;
  setValue: (e: string) => void;
  placeholder: string;
  text: string;
}

const InputCheckbox: FC<InputCheckboxProps> = ({
  type,
  text,
  placeholder,
  value,
  setValue,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={styles.container_input}>
        <span className={styles.container_text}>{text}</span>
        <div className={styles.container_input_wrapper}>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={styles.container_input__color}
          />
          <img src={HIDE_IMAGE} alt="-" loading={"lazy"} />
        </div>
      </div>
    </>
  );
};

export default InputCheckbox;
