export const FETCH_ENTRY = "FETCH_ENTRY";
export const FORMATTED_POST_ENTRY = "FORMATTED_POST_ENTRY";

export const fetchEntry = () => dispatch => {
  dispatch({ type: FETCH_ENTRY });
};

export const postFormattedEntry = (formattedEntry) => dispatch => {
  dispatch({ type: FORMATTED_POST_ENTRY, payload: formattedEntry });
};

