function formatFormEntries(formEntry) {
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

  return formEntry
}

export default formatFormEntries;
