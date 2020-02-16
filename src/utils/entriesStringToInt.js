export function entriesStringToInt(formEntry) {
  switch (formEntry.education) {
    case "No College":
      formEntry.education = 0;
      break;
    case "Community College":
      formEntry.education = 1;
      break;
    case "In-State College":
      formEntry.education = 2;
      break;
    case "Out-of-State College":
      formEntry.education = 3;
      break;
    default:
      return formEntry;
  }
  switch (formEntry.major) {
    case "Arts and Humanities":
      formEntry.major = 0;
      break;
    case "Business":
      formEntry.major = 1;
      break;
    case "Education":
      formEntry.major = 2;
      break;
    case "Music":
      formEntry.major = 3;
      break;
    case "Engineering":
      formEntry.major = 4;
      break;
    case "Nursing":
      formEntry.major = 5;
      break;
    case "Medicine":
      formEntry.major = 6;
      break;
    case "Social Sciences":
      formEntry.major = 7;
      break;
    case "Hard Sciences":
      formEntry.major = 8;
      break;
    default:
      return formEntry;
  }
  switch (formEntry.state) {
    case "No State Income Tax":
      formEntry.state = 0;
      break;
    case "State Income Tax":
      formEntry.state = 1;
      break;
    default:
      return formEntry;
  }
  switch (formEntry.city) {
    case "Small City":
      formEntry.city = 0;
      break;
    case "Medium City":
      formEntry.city = 1;
      break;
    case "Large City":
      formEntry.city = 2;
      break;
    case "Very Large City":
      formEntry.city = 3;
      break;
    case "Immense City":
      formEntry.city = 2;
      break;
    case "NYC/SF/Honolulu/Seattle/DC/Oakland/Boston/LA":
      formEntry.city = 3;
      break;
    default:
      return formEntry;
  }
  switch (formEntry.col) {
    case "Low Cost of Living":
      formEntry.col = 0;
      break;
    case "Medium Cost of Living":
      formEntry.col = 1;
      break;
    case "High Cost of Living":
      formEntry.col = 2;
      break;
    case "Very High Cost of Living":
      formEntry.col = 3;
      break;
    default:
      return formEntry;
  }

  return formEntry;
}
