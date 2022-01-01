import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";

interface AppStatusBarProps {
  backgroundColor: string
  barStyle?: 'default' | 'light-content' | 'dark-content'
}

export const AppStatusBar = ({ backgroundColor, ...props }: AppStatusBarProps): JSX.Element | null => {
  const isFocused = useIsFocused()

  return isFocused
    ? <StatusBar backgroundColor={backgroundColor} {...props} />
    : null
};
