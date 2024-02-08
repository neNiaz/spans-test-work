import styles from "./content.module.scss";
import PHOTO_IMAGE from "@/shared/images/photoparat.svg";
import ARROW_IMAGE from "@/shared/images/arrow.svg";
import SETTINGS_IMAGE from "@/shared/images/settings.svg";
import LIKE_IMAGE from "@/shared/images/like.svg";
import LIKED_IMAGE from "@/shared/images/liked.svg";
import TRASHER_IMAGE from "@/shared/images/trasher.svg";
import CLOSE_IMAGE from "@/shared/images/close.svg";
import BaseButton from "@/shared/components/base-button/base-button.tsx";
import { useMediaQuery } from "@/shared/hooks/useMeduaQuery.ts";
import { FC, memo, useEffect, useMemo, useState } from "react";
import { FadeInComponent } from "@/shared/components/fade-in/fade-in.tsx";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHelper.ts";
import {
  dogDeleteImage,
  dogLikeImage,
  fetchDogs,
} from "@/shared/store/ducks/content/actionCreators.ts";

import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/shared/components/modal/modal.tsx";
import Clipboard from "@/shared/components/clipboard/clipboard.tsx";
import ImageUploader from "@/shared/components/image-uploader/image-uploader.tsx";
import FileDrop from "@/shared/components/file-drop/file-drop.tsx";

const Content: FC = memo(() => {
  const [open, setOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [isActiveFileDrop, setIsActiveFileDrop] = useState(false);
  const { isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();

  const { isLoading, dogs, error } = useAppSelector((state) => state.dogSlice);

  const isNotEmpty = dogs?.message?.length;

  const handleClick = (url: string) => {
    setPhotoUrl(url);
    setOpen(true);
  };

  const handleDeleteImage = (photo: string) => {
    dispatch(dogDeleteImage(photo));
  };

  const handleLikeImage = (photo: string) => {
    dispatch(dogLikeImage(photo));
  };

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  useEffect(() => {
    const handleDragOver = (e: MouseEvent) => {
      e.preventDefault();
      setIsActiveFileDrop(true);
    };

    const handleDragLeaveOrDrop = (e: MouseEvent) => {
      e.preventDefault();
      setIsActiveFileDrop(false);
    };

    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("dragleave", handleDragLeaveOrDrop);
    document.addEventListener("drop", handleDragLeaveOrDrop);

    return () => {
      document.removeEventListener("dragover", handleDragOver);
      document.removeEventListener("dragleave", handleDragLeaveOrDrop);
      document.removeEventListener("drop", handleDragLeaveOrDrop);
    };
  }, []);

  const useRenderImages = () => {
    const images = dogs?.message?.map((photoId) => {
      return (
        <FadeInComponent
          key={`${photoId.url}`}
          className={styles.container_content_fade}
        >
          <motion.span onClick={() => handleClick(photoId.url)}>
            <img
              className={styles.container_content_img}
              src={photoId.url}
              loading={"lazy"}
              alt="dog img"
            />
          </motion.span>
          <motion.span
            className={styles.container_content_like}
            onClick={() => handleLikeImage(photoId.url)}
          >
            <img src={photoId.liked ? LIKED_IMAGE : LIKE_IMAGE} alt="like" />
          </motion.span>
          <motion.span
            className={styles.container_content_trash}
            onClick={() => handleDeleteImage(photoId.url)}
          >
            <img src={TRASHER_IMAGE} alt="trash" />
          </motion.span>
        </FadeInComponent>
      );
    });

    return useMemo(() => <AnimatePresence>{images}</AnimatePresence>, [images]);
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.container_gallery}>
          <div className={styles.container_gallery_items}>
            <span>Gallery</span>
            <div className={styles.container_gallery_select}>
              {isTablet ? (
                <>
                  <select>
                    <option value="0">All</option>
                    <option value="1">Favorite</option>
                    <option value="2">Сначала старые</option>
                    <option value="3">Сначала новые</option>
                  </select>
                  <span className={styles.container_gallery_arrow}>
                    <img src={ARROW_IMAGE} alt="" />
                  </span>
                </>
              ) : (
                <>
                  <img src={SETTINGS_IMAGE} alt="" />
                </>
              )}
            </div>
          </div>
          <div className={styles.container_content}>
            {!isNotEmpty && <span>Gallery is empty</span>}
            <div className={styles.container_content_grid}>
              {useRenderImages()}
            </div>
            <div className={styles.load_more}>
              <BaseButton
                text={"Load More"}
                variant={"full-blue"}
                color={"blue"}
                className={styles.load_more_button}
              />
            </div>
          </div>
          {isLoading && <span>Loading</span>}
          {error && <span>Error</span>}
        </section>
        <section className={styles.container_right}>
          <div className={styles.container_right_magic}>
            <span>
              <img src={PHOTO_IMAGE} alt="" />
            </span>
            <ImageUploader color={"pink"} variant={"none"} />
          </div>
          <div className={styles.container_right_banner}>
            <BaseButton text={"Upgrade"} variant={"full-black"}></BaseButton>
          </div>
        </section>
      </div>
      <AnimatePresence>
        {open && (
          <Modal open={open}>
            <div className={styles.container_modal}>
              <span
                className={styles.container_modal_close}
                onClick={() => setOpen(false)}
              >
                <img src={CLOSE_IMAGE} alt="" />
              </span>
              <span className={styles.container_modal_photo}>
                <img src={photoUrl} alt="" />
              </span>
              <span className={styles.container_modal_font}>
                Share this with your social Community
              </span>
              <Clipboard url={photoUrl} />
            </div>
          </Modal>
        )}
        {isActiveFileDrop && <FileDrop isActiveFileDrop={isActiveFileDrop} />}
      </AnimatePresence>
    </>
  );
});

export default Content;
