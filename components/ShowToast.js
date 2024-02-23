import { View } from "react-native";
import Toast from "react-native-root-toast";
import Style from "../styles/Style";
import { Icon } from "react-native-paper";
import { darkColors, lightColors } from "../styles/ColorScheme";

const ShowToast = (message, duration, isDarkMode) => {
  return (
    <View style={Style.toastContainer}>
      {Toast.show(
        <>
          <Icon
            style={Style.toastIcon}
            size={20}
            source={require("../assets/Logo.png")}
          />
          {` ${message}`}
        </>,
        {
          duration: Toast.durations[duration.toUpperCase()],
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          opacity: 1,
          backgroundColor: Boolean(isDarkMode)
            ? darkColors.colors.toastDarkBackgroundColor
            : lightColors.colors.toastLightBackgroundColor,
          textColor: Boolean(isDarkMode)
            ? darkColors.colors.toastDarkTextColor
            : lightColors.colors.toastLightTextColor,
        }
      )}
    </View>
  );
};

export default ShowToast;
