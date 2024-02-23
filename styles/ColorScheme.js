import { StyleSheet } from "react-native";

const lightColors = StyleSheet.create({
  colors: {
    primary: "#000000",
    secondaryContainer: "#b4e0c4",
    error: "#ba1a1a",
    background: "#e8e8e8",
    surface: "#bebedd",
    onSurface: "#000000",
    surfaceVariant: "#cecbd0",
    onSurfaceVariant: "#000000",
    outline: "#7c757e",
    notification: "#ef5858",
    elevation: {
      level0: "transparent",
      level1: "#f8f2fb",
      level2: "#f4ecf8",
      level3: "#f0e7f6",
      level4: "#efe5f5",
      level5: "#8d84ec",
    },
    surfaceDisabled: "#7e7e7e",
    onSurfaceDisabled: "#bebebe",
    buttonEnabledColor: "#8fd0a7",
    tabBarBackground: "#9394b2",
    tabBarActiveTintColor: "#000000",
    tabBarInactiveTintColor: "#dedede",
    tabBarActiveBackgroundColor: "#ffffff",
    toastLightBackgroundColor: "#1b1a1a",
    toastLightTextColor: "#e4e4e4",
  },
});

const darkColors = StyleSheet.create({
  colors: {
    primary: "#ffffff",
    secondaryContainer: "#499165",
    onSecondaryContainer: "#ffffff",
    error: "#ba1a1a",
    background: "#181a22",
    surface: "#4a4a67",
    onSurface: "#ffffff",
    surfaceVariant: "#3a373c",
    onSurfaceVariant: "#ffffff",
    outline: "#ffffff",
    outlineVariant: "#ffffff",
    notification: "#ef5858",
    elevation: {
      level0: "transparent",
      level1: "#f8f2fb",
      level2: "#ac7ac6",
      level3: "#f0e7f6",
      level4: "#efe5f5",
      level5: "#8d84ec",
    },
    surfaceDisabled: "#7e7e7e",
    onSurfaceDisabled: "#7e5991",
    buttonEnabledColor: "#70ea9d",
    tabBarBackground: "#252531",
    tabBarActiveTintColor: "#000000",
    tabBarInactiveTintColor: "#dedede",
    tabBarActiveBackgroundColor: "#ffffff",
    toastDarkBackgroundColor: "#e4e4e4",
    toastDarkTextColor: "#1b1a1a",
  },
});

export { lightColors, darkColors };
