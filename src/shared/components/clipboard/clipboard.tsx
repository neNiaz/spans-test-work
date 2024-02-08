import { FC } from "react";
import styles from "./clipboard.module.scss";
import COPYBOARD_IMAGE from "@/shared/images/copyboard.svg";
import { useCopyToClipboard } from "@/shared/hooks/useCopyToClipboard.ts";
import { FadeInComponent } from "@/shared/components/fade-in/fade-in.tsx";

interface Props {
  url: string;
}

const Clipboard: FC<Props> = ({ url }) => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopyClick = async () => {
    await copy(url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_wrapper}>
        <span className={styles.container_text}>{url}</span>
        {copiedText && (
          <FadeInComponent>
            <span className={styles.copiedText}>Скопировано!</span>
          </FadeInComponent>
        )}
      </div>
      <span className={styles.container_copy} onClick={handleCopyClick}>
        <img src={COPYBOARD_IMAGE} alt="" />
      </span>
    </div>
  );
};

export default Clipboard;
