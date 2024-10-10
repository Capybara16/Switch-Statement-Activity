let day = prompt("Enter a day of the week (e.g., 'Monday', 'Tuesday'):");

switch (day.toLowerCase()) {
  case "monday":
    console.log("First Day of School.");
    break;
  case "tuesday":
    console.log("Second Day of School.");
    break;
  case "wednesday":
    console.log("Do the remaining activities.");
    break;
  case "thursday":
    console.log("Third Day of School.");
    break;
  case "friday":
    console.log("Fourth Day of School.");
    break;
  case "saturday":
    console.log("Do the Laundy.");
    break;
  case "sunday":
    console.log("Relax and recharge for the week ahead.");
    break;
  default:
    console.log("That's not a valid day. Please enter a day of the week.");
}
