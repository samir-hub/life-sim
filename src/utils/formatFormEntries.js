export function formatFormEntries(formEntry) {
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
      formEntry.education = 0;
      break;
    case "Business":
      formEntry.education = 1;
      break;
    case "Education":
      formEntry.education = 2;
      break;
    case "Music":
      formEntry.education = 3;
      break;
    case "Engineering":
      formEntry.education = 4;
      break;
    case "Nursing":
      formEntry.education = 5;
      break;
    case "Medicine":
      formEntry.education = 6;
      break;
    case "Social Sciences":
      formEntry.education = 7;
      break;
    case "Hard Sciences":
      formEntry.education = 8;
      break;
    default:
      return formEntry;
  }
  switch (formEntry.state) {
    case "No State Income Tax":
      formEntry.education = 0;
      break;
    case "State Income Tax":
      formEntry.education = 1;
      break;
    default:
      return formEntry;
  }
  switch (formEntry.city) {
    case "Small City":
      formEntry.education = 0;
      break;
    case "Medium City":
      formEntry.education = 1;
      break;
    case "Large City":
      formEntry.education = 2;
      break;
    case "Very Large City":
      formEntry.education = 3;
      break;
    case "Immense City":
      formEntry.education = 2;
      break;
    case "NYC/SF/Honolulu/Seattle/DC/Oakland/Boston/LA":
      formEntry.education = 3;
      break;
    default:
      return formEntry;
  }
  switch (formEntry.col) {
    case "Low Cost of Living":
      formEntry.education = 0;
      break;
    case "Medium Cost of Living":
      formEntry.education = 1;
      break;
    case "High Cost of Living":
      formEntry.education = 2;
      break;
    case "Very High Cost of Living":
      formEntry.education = 3;
      break;
    default:
      return formEntry;
  }

  return formEntry;
}
