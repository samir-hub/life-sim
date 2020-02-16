export function entriesIntToString(formEntry) {
  switch (formEntry.education) {
    case 0:
      formEntry.education = "No College";
      break;
    case 1:
      formEntry.education = "Community College";
      break;
    case 2:
      formEntry.education = "In-State College";
      break;
    case 3:
      formEntry.education = "Out-of-State College";
      break;
    default:
      return formEntry;
  }
  switch (formEntry.major) {
    case 0:
      formEntry.major = "Arts and Humanities";
      break;
    case 1:
      formEntry.major = "Business";
      break;
    case 2:
      formEntry.major = "Education";
      break;
    case 3:
      formEntry.major = "Music";
      break;
    case 4:
      formEntry.major = "Engineering";
      break;
    case 5:
      formEntry.major = "Nursing";
      break;
    case 6:
      formEntry.major = "Medicine";
      break;
    case 7:
      formEntry.major = "Social Sciences";
      break;
    case 8:
      formEntry.major = "Hard Sciences";
      break;
    default:
      return formEntry;
  }
  switch (formEntry.state) {
    case 0:
      formEntry.state = "No State Income Tax";
      break;
    case 1:
      formEntry.state = "State Income Tax";
      break;
    default:
      return formEntry;
  }
  switch (formEntry.city) {
    case 0:
      formEntry.city = "Small City";
      break;
    case 1:
      formEntry.city = "Medium City";
      break;
    case 2:
      formEntry.city = "Large City";
      break;
    case 3:
      formEntry.city = "Very Large City";
      break;
    case 4:
      formEntry.city = "Immense City";
      break;
    case 5:
      formEntry.city = "NYC/SF/Honolulu/Seattle/DC/Oakland/Boston/LA";
      break;
    default:
      return formEntry;
  }
  switch (formEntry.col) {
    case 0:
      formEntry.col = "Low Cost of Living";
      break;
    case 1:
      formEntry.col = "Medium Cost of Living";
      break;
    case 2:
      formEntry.col = "High Cost of Living";
      break;
    case 3:
      formEntry.col = "Very High Cost of Living";
      break;
    default:
      return formEntry;
  }

  return formEntry;
}
