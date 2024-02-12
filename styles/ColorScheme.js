import { StyleSheet } from "react-native";

const lightColors = StyleSheet.create({
  colors: {
    primary: "#000000",
    secondaryContainer: "#b4e0c4",
    error: "rgb(186, 26, 26)",
    background: "rgb(232, 232, 232)",
    surface: "#bebedd",
    onSurface: "rgb(0, 0, 0)",
    surfaceVariant: "rgb(206, 203, 208)",
    onSurfaceVariant: "rgb(0, 0, 0)",
    outline: "rgb(124, 117, 126)",
    notification: "#ef5858",
    elevation: {
      level0: "transparent",
      level1: "rgb(248, 242, 251)",
      level2: "rgb(244, 236, 248)",
      level3: "rgb(240, 231, 246)",
      level4: "rgb(239, 229, 245)",
      level5: "#8d84ec",
    },
    surfaceDisabled: "#7e7e7e",
    onSurfaceDisabled: "rgba(190, 190, 190, 1)",
    buttonEnabledColor: "#8fd0a7",
    tabBarBackground: "#9394b2",
    tabBarActiveTintColor: "rgb(0, 0, 0)",
    tabBarInactiveTintColor: "rgb(222, 222, 222)",
    tabBarActiveBackgroundColor: "white",
  },
});

const darkColors = StyleSheet.create({
  colors: {
    primary: "#ffffff",
    secondaryContainer: "#499165",
    onSecondaryContainer: "rgb(255, 255, 255)",
    error: "rgb(186, 26, 26)",
    background: "#181a22",
    surface: "#4a4a67",
    onSurface: "#ffffff",
    surfaceVariant: "rgb(58, 55, 60)",
    onSurfaceVariant: "#ffffff",
    outline: "#ffffff",
    outlineVariant: "rgb(255, 255, 255)",
    notification: "#ef5858",
    elevation: {
      level0: "transparent",
      level1: "rgb(248, 242, 251)",
      level2: "rgb(172, 122, 198)",
      level3: "rgb(240, 231, 246)",
      level4: "rgb(239, 229, 245)",
      level5: "#8d84ec",
    },
    surfaceDisabled: "#7e7e7e",
    onSurfaceDisabled: "rgb(126, 89, 146)",
    buttonEnabledColor: "#70ea9d",
    tabBarBackground: "#252531",
    tabBarActiveTintColor: "rgb(0, 0, 0)",
    tabBarInactiveTintColor: "rgb(222, 222, 222)",
    tabBarActiveBackgroundColor: "white",
  },
});

export { lightColors, darkColors };
