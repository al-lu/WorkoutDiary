import { useContext } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RadioButton, Switch, Text } from "react-native-paper";

import { SettingsContext, ThemeContext } from "../contexts/Contexts";
import { DistanceUnitsData } from "../data/DistanceUnitsData";
import Style from "../styles/Style";

export default function SettingsView() {
  // Contexts
  const { units, setUnits } = useContext(SettingsContext);
  const { isDarkModeOn, setIsDarkModeOn } = useContext(ThemeContext);

  const onToggleSwitch = () => setIsDarkModeOn(!isDarkModeOn);

  return (
    <SafeAreaProvider>
      <View
        style={[
          Style.settingsMainViewContainer,
          { borderColor: isDarkModeOn ? "#ffffff" : "#000000" },
        ]}
      >
        <Text style={Style.settingsUnitText}>Units</Text>
        <View style={Style.settingsViewContainer}>
          <RadioButton.Group onValueChange={setUnits} value={units}>
            {DistanceUnitsData.map((unit) => (
              <View style={Style.settingsRadioBtnView} key={unit.id}>
                <View style={Style.radioBtnLabel}>
                  <Text style={Style.radioBtnLabelText}>{unit.label}</Text>
                </View>
                <View style={Style.settingsRadioBtnView}>
                  <RadioButton value={unit} />
                </View>
              </View>
            ))}
          </RadioButton.Group>
        </View>
      </View>
      <View
        style={[
          Style.toggleSwitchContainer,
          { borderColor: isDarkModeOn ? "#ffffff" : "#000000" },
        ]}
      >
        <Text style={Style.toggleDarkModeText}>Dark mode</Text>
        <Switch
          style={Style.toggleDarkModeSwitch}
          value={isDarkModeOn}
          onValueChange={onToggleSwitch}
        />
      </View>
    </SafeAreaProvider>
  );
}
