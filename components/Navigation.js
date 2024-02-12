import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import { useContext } from "react";

import TopAppBar from "./TopAppBar";

import AddWorkoutView from "../screens/AddWorkoutView";
import ListWorkoutView from "../screens/ListWorkoutView";
import SettingsView from "../screens/SettingsView";
import { ThemeContext, WorkoutsContext } from "../contexts/Contexts";
import { darkColors, lightColors } from "../styles/ColorScheme";

const Navigation = () => {
  const { isDarkModeOn } = useContext(ThemeContext);
  const { workouts } = useContext(WorkoutsContext);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer theme={isDarkModeOn ? darkColors : lightColors}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Boolean(isDarkModeOn)
              ? darkColors.colors.tabBarBackground
              : lightColors.colors.tabBarBackground,
          },
          headerShown: true,
          header: (props) => <TopAppBar {...props} />,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Add Workout") {
              iconName = focused ? "add-outline" : "add";
            } else if (route.name === "List Of Workouts") {
              iconName = focused ? "list-outline" : "list";
            } else if (route.name === "Settings") {
              iconName = focused ? "cog-outline" : "cog";
            }

            return <Ionicons name={iconName} size={35} color={color} />;
          },
          tabBarActiveTintColor: isDarkModeOn
            ? darkColors.colors.tabBarActiveTintColor
            : lightColors.colors.tabBarActiveTintColor,
          tabBarInactiveTintColor: isDarkModeOn
            ? darkColors.colors.tabBarInactiveTintColor
            : lightColors.colors.tabBarInactiveTintColor,
          tabBarActiveBackgroundColor: isDarkModeOn
            ? darkColors.colors.tabBarActiveBackgroundColor
            : lightColors.colors.tabBarActiveBackgroundColor,
        })}
      >
        <Tab.Screen name="Add Workout" component={AddWorkoutView} />
        <Tab.Screen
          options={{
            tabBarBadge: Object.keys(workouts).length,
          }}
          name="List Of Workouts"
          component={ListWorkoutView}
        />
        <Tab.Screen name="Settings" component={SettingsView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
