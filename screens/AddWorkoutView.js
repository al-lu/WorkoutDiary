import { useContext, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  Button,
  Modal,
  Portal,
  SegmentedButtons,
  TextInput,
} from "react-native-paper";
import { Calendar } from "react-native-calendars";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SportChips from "../components/SportChips";

import Style from "../styles/Style";

import {
  SettingsContext,
  SportSelectionContext,
  ThemeContext,
  WorkoutsContext,
} from "../contexts/Contexts";

import { darkColors, lightColors } from "../styles/ColorScheme";

import { FormatDate, VerifyInput } from "../functions/HelperFunctions";

export default function AddWorkoutView() {
  // Contexts
  const { workouts, setWorkouts } = useContext(WorkoutsContext);
  const { units } = useContext(SettingsContext);
  const { selectedSport, setSelectedSports, icon, setSelectedIcon } =
    useContext(SportSelectionContext);
  const { isDarkModeOn } = useContext(ThemeContext);

  // States
  const [exerciseLocation, setExerciseLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [numOfSets, setNumOfSets] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  // When date is selected -> close calendar modal
  const setDateSelected = (day) => {
    setIsCalendarVisible(false);
    setDate(day);
  };

  // Add workout to context
  const AddWorkout = () => {
    // Create id based on the largest ID value that is found from the array of objects
    // This is done because deleting items from the WorkoutList gets also rid of the corresponding ids
    // Just to be sure pick the largest number and add 1 to it
    id = workouts.reduce((acc, value) => {
      acc = acc > value.id ? acc : value.id;
      return acc + 1;
    }, 0);

    selectedExercise =
      exerciseLocation === "outdoors"
        ? {
            id,
            exerciseLocation,
            distance,
            duration,
            date,
            selectedSport,
            icon,
          }
        : // Because Gym and Home locations don't measure distance but instead use number of sets
          {
            id,
            exerciseLocation,
            numOfSets,
            duration,
            date,
            selectedSport,
            icon,
          };
    setWorkouts((prev) => [...prev, selectedExercise]);

    // Deselect all fields
    setExerciseLocation("");
    setDistance("");
    setNumOfSets("");
    setDuration("");
    setDate("");
    setSelectedSports("");
    setSelectedIcon("");
  };

  // Disable "Add Workout" button if any fields are empty
  const IsButtonDisabled = (
    exerciseLocation,
    distance,
    duration,
    date,
    numOfSets,
    selectedSport
  ) => {
    let buttonDisabled;
    switch (exerciseLocation) {
      case "":
        buttonDisabled = true;
        break;

      case "outdoors":
        if (
          distance === "" ||
          duration === "" ||
          date === "" ||
          selectedSport === ""
        ) {
          buttonDisabled = true;
        }
        break;

      case "gym":
        if (
          numOfSets == "" ||
          duration == "" ||
          date == "" ||
          selectedSport == ""
        ) {
          buttonDisabled = true;
        }
        break;

      case "home":
        if (
          numOfSets == "" ||
          duration == "" ||
          date == "" ||
          selectedSport == ""
        ) {
          buttonDisabled = true;
        }
        break;

      default:
        buttonDisabled = false;
    }
    return buttonDisabled;
  };

  return (
    <SafeAreaProvider>
      <View style={Style.addWorkoutViewContainer}>
        <ScrollView contentContainerStyle={Style.addWorkoutScrollView}>
          <SegmentedButtons
            style={Style.addWorkoutLocationBtn}
            value={exerciseLocation}
            onValueChange={setExerciseLocation}
            buttons={[
              {
                value: "outdoors",
                label: "Outdoors",
                icon: "tree",
              },
              {
                value: "gym",
                label: "Gym",
                icon: "dumbbell",
              },
              {
                value: "home",
                label: "Home",
                icon: "home",
              },
            ]}
          />
          <SportChips location={exerciseLocation} />
          {exerciseLocation === "outdoors" ? (
            <View>
              <TextInput
                style={Style.addWorkoutTextInputFields}
                label={
                  "Distance " + (units.value === "km" ? "( km )" : "( mi )")
                }
                keyboardType="numeric"
                value={distance}
                maxLength={10}
                onChangeText={(distance) => {
                  !VerifyInput(distance).errorFound
                    ? setDistance(distance)
                    : Alert.alert(
                        VerifyInput(distance).errorHeading,
                        VerifyInput(distance).errorText
                      );
                }}
              />
            </View>
          ) : (
            <View>
              <TextInput
                style={Style.addWorkoutTextInputFields}
                label="Number of sets ( total )"
                keyboardType="numeric"
                value={numOfSets}
                maxLength={10}
                onChangeText={(numOfSets) => {
                  !VerifyInput(numOfSets).errorFound
                    ? setNumOfSets(numOfSets)
                    : Alert.alert(
                        VerifyInput(numOfSets).errorHeading,
                        VerifyInput(numOfSets).errorText
                      );
                }}
              />
            </View>
          )}

          <TextInput
            style={Style.addWorkoutTextInputFields}
            label="Duration ( min )"
            keyboardType="numeric"
            value={duration}
            maxLength={10}
            onChangeText={(duration) => {
              !VerifyInput(duration).errorFound
                ? setDuration(duration)
                : Alert.alert(
                    VerifyInput(duration).errorHeading,
                    VerifyInput(duration).errorText
                  );
            }}
          />
          <Portal>
            <Modal visible={isCalendarVisible} style={Style.calendarmodal}>
              <Calendar
                onDayPress={(day) => {
                  setDateSelected(day.dateString);
                }}
                theme={Style.calendar}
                markedDates={{
                  [date]: {
                    selected: true,
                  },
                }}
              ></Calendar>
            </Modal>
          </Portal>
          {!isCalendarVisible && (
            <Pressable onPress={() => setIsCalendarVisible(true)}>
              <Button
                mode="contained-tonal"
                style={Style.selectDateBtn}
                icon={"calendar"}
              >
                {date ? FormatDate(date) : "Select Date"}
              </Button>
            </Pressable>
          )}
          {!isCalendarVisible && (
            <KeyboardAvoidingView style={Style.addWorkoutBtnColumn}>
              <Button
                mode="contained"
                buttonColor={
                  isDarkModeOn
                    ? darkColors.colors.buttonEnabledColor
                    : lightColors.colors.buttonEnabledColor
                }
                style={Style.addWorkoutBtn}
                disabled={IsButtonDisabled(
                  exerciseLocation,
                  distance,
                  duration,
                  date,
                  numOfSets,
                  selectedSport
                )}
                onPress={AddWorkout}
              >
                <Text style={Style.addWorkoutBtnText}>Add</Text>
              </Button>
            </KeyboardAvoidingView>
          )}
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
