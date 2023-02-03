import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme(
  {
    colors: {
      brand: {
        100: "#FF3c00",
      },
    },
    fonts: {
      body: "Open Sans, sans-serif",
    },
    styles: {
      global: () => ({
        body: {
          bg: "gray.200",
        },
      }),
    },
  },
  {
    config,
  }
);

// 3. extend the theme
