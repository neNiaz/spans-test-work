import { useMediaQuery as useMedia } from "react-responsive";

export const useMediaQuery = () => {
  const isMobile = useMedia({ query: "(max-width: 767px)" });
  const isTablet = useMedia({ query: "(min-width: 768px)" });
  const isLaptop = useMedia({ query: "(min-width: 1024px)" });
  const isDesktopXLarge = useMedia({ query: "(min-width: 1440px)" });
  const isLandscape = useMedia({ query: "(max-width: 1023px)" });

  return { isMobile, isTablet, isLaptop, isDesktopXLarge, isLandscape };
};
