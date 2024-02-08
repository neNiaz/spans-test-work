import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

export const FadeInComponent: FC<Props> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className={classNames(className)}
    >
      {children}
    </motion.div>
  );
};
