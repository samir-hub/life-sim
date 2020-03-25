export function formatDrawerValues(formEntry) {
  for (var key in formEntry) {
    if (formEntry[key] !== undefined) {
      formEntry[key] = parseInt(formEntry[key]);
    } else {
        delete formEntry[key]
    }
  }

  return formEntry;
}
