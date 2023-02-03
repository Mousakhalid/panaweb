import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
  } from "@chakra-ui/react";

  
  type ColorSwitch = Omit<IconButtonProps, "aria-label">;
  
  export const ColorModeSwitcher = (props: ColorSwitch) => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  
    return (
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        {...props}
      />
    );
  };