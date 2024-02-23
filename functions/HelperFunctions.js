const FormatDate = (date) => {
  // Convert string date to date obj
  newDateObject = new Date(date);

  let formattedDate =
    newDateObject.getDate() +
    "." +
    Number(newDateObject.getMonth() + 1) +
    "." +
    newDateObject.getFullYear();

  return formattedDate;
};

const CalculateTotalDistance = (workoutsArray, units) => {
  const totalDistance = workoutsArray
    // Filter outdoor locations and calculate total distance
    .filter(
      (locationOutdoors) => locationOutdoors.exerciseLocation === "outdoors"
    )
    .reduce(
      (result, { traveledDistance }) => (result += Number(traveledDistance)),
      0
    );
  return units === "km"
    ? totalDistance.toFixed(2) + " km"
    : (totalDistance / 1.609344).toFixed(2) + " mi";
};

const CalculateTotalSets = (workoutsArray) => {
  const totalSets = workoutsArray
    // Filter gym workouts and calculate total sets
    .filter((locationGym) => locationGym.exerciseLocation === "gym")
    .reduce((result, { numOfSets }) => (result += Number(numOfSets)), 0);

  return totalSets + " sets";
};

const ParceNumber = (num) => {
  let output;
  if (Number.isInteger(Number(num))) {
    output = Number(num).toFixed(0);
  } else {
    output = Number(num).toFixed(2);
  }
  return output;
};

const ConvertMinutesToHours = (minutes) => {
  return Math.floor(minutes / 60) + " h " + (minutes % 60) + " min";
};

const CalculateTotalTimeSpent = (workoutsArray) => {
  // Calculate total time spent at home
  const totalTimeSpentAtHome = workoutsArray
    .filter((locationHome) => locationHome.exerciseLocation === "home")
    .reduce((result, { duration }) => (result += Number(duration)), 0);

  return (
    Math.floor(totalTimeSpentAtHome / 60) +
    " h " +
    (totalTimeSpentAtHome % 60) +
    " min"
  );
};

// User input error handling
const VerifyInput = (input, isFloatAllowed) => {
  let errorText;
  let errorHeading;
  if (input < 0 || input === "-") {
    errorFound = true;
    errorHeading = "Negative input";
    errorText = "Only positive numbers are allowed";
  } else if (isNaN(input)) {
    errorFound = true;
    errorHeading = "Invalid input";
    errorText = "Only numbers are allowed";
  } else if (input.includes(".")) {
    if (isFloatAllowed) {
      if (input.split(".")[1].length > 2) {
        errorFound = true;
        errorHeading = "Decimal error";
        errorText = "Only numbers with two decimal places are allowed";
      } else {
        errorFound = false;
      }
    } else {
      errorFound = true;
      errorHeading = "Integer error";
      errorText = "Only whole numbers are allowed";
    }
  } else {
    errorFound = false;
  }
  return { errorFound, errorHeading, errorText };
};

export {
  FormatDate,
  CalculateTotalDistance,
  CalculateTotalSets,
  ConvertMinutesToHours,
  ParceNumber,
  CalculateTotalTimeSpent,
  VerifyInput,
};
