import { useCallback, useState } from "react";

type UseCopyToClipboardHook = () => [
  string,
  (text: string) => Promise<boolean>,
];

export const useCopyToClipboard: UseCopyToClipboardHook = () => {
  const [copiedText, setCopiedText] = useState("");

  const copy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText("");
      return false;
    }
  }, []);

  return [copiedText, copy];
};
