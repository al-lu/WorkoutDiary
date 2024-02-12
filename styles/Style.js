import { StyleSheet } from "react-native";

export default Style = StyleSheet.create({
  // Add workout screen
  addWorkoutViewContainer: {
    flex: 1,
  },
  addWorkoutScrollView: {
    flexGrow: 1,
  },

  addWorkoutLocationBtn: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  addWorkoutTextInputFields: {
    marginTop: 10,
  },
  selectDateBtn: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },

  addWorkoutBtnColumn: {
    flexGrow: 1,
    flexDirection: "column",

    justifyContent: "center",
    alignSelf: "center",
  },
  addWorkoutBtn: {
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  addWorkoutBtnText: {
    fontSize: 20,
    color: "#000000",
  },

  // Calendar
  calendar: {
    backgroundColor: "#ffffff",
    calendarBackground: "#ffffff",
    textSectionTitleColor: "#363636",
    textSectionTitleDisabledColor: "#d9e1e8",
    selectedDayBackgroundColor: "#000000",
    selectedDayTextColor: "#ffffff",
    todayTextColor: "#ef5858",
    dayTextColor: "#2d4150",
    textDisabledColor: "#d9e1e8",
    arrowColor: "#000000",
    monthTextColor: "#000000",
    textDayFontFamily: "monospace",
    textMonthFontFamily: "monospace",
    textDayHeaderFontFamily: "monospace",
    textTodayFontWeight: "bold",
    textDayFontWeight: "300",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "300",
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  },

  // Sportchips
  sportChip: {
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },

  // Workout list screen
  listWorkoutViewContainer: {
    flex: 1,
  },
  workoutsFlatlist: {
    flex: 1,
  },
  exerciseChipView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  exerciseChip: {},

  exerciseChipText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  exerciseCard: {
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "transparent",
  },
  exerciseIcon: {},
  exerciseCardContentRight: {
    alignItems: "center",
  },

  // Settings screen
  settingsViewContainer: {
    marginLeft: 40,
  },
  settingsMainViewContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,

    borderRadius: 6,
  },
  settingsUnitText: {
    fontSize: 20,
  },
  settingsRadioBtnView: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  radioBtnLabel: {
    flex: 0.3,
    alignSelf: "center",
  },
  radioBtnLabelText: {
    fontWeight: "bold",
  },
  toggleSwitchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderWidth: 1,

    borderRadius: 6,
  },
  toggleDarkModeText: {
    flex: 0.5,
    fontSize: 20,
  },
  toggleDarkModeSwitch: {
    flex: 0.5,
  },
});
