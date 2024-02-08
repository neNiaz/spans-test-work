import { DragEvent, FC } from "react";
import styles from "./file-drop.module.scss";
import classNames from "classnames";
import { FadeInComponent } from "@/shared/components/fade-in/fade-in.tsx";
import { useAppDispatch } from "@/shared/hooks/reduxHelper.ts";
import { dogAddImage } from "@/shared/store/ducks/auth-control/actionCreators.ts";

interface Props {
  isActiveFileDrop: boolean;
}
const FileDrop: FC<Props> = ({ isActiveFileDrop }) => {
  const dispatch = useAppDispatch();

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const imageUrl = URL.createObjectURL(file);
    dispatch(dogAddImage(imageUrl));
  };

  return (
    <FadeInComponent>
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={classNames(styles.fileDrop, {
          [styles.fileDrop_active]: isActiveFileDrop,
        })}
      >
        <span className={styles.fileDrop_text}>Перетащите файлы сюда</span>
      </div>
    </FadeInComponent>
  );
};

export default FileDrop;
