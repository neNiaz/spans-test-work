import { ChangeEvent, FC, useRef } from "react";
import BaseButton, {
  ButtonProps,
} from "@/shared/components/base-button/base-button.tsx";
import { dogAddImage } from "@/shared/store/ducks/auth-control/actionCreators.ts";
import { useAppDispatch } from "@/shared/hooks/reduxHelper.ts";

interface Props extends Partial<ButtonProps> {
  variant: "full-black" | "full-blue" | "outline" | "none";
  color?: "white" | "pink" | "black" | "blue";
}

const ImageUploader: FC<Props> = ({ variant, color }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      dispatch(dogAddImage(imageUrl));
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />
      <BaseButton
        text={"Make magic"}
        variant={variant}
        color={color}
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default ImageUploader;
