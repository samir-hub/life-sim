import { FETCH_ENTRY_START, FETCH_ENTRY, FORMATTED_POST_ENTRY } from "../actions";

const initialState = {
  formattedEntryData : [{}],
  userInfo: [{}],
  isFetching: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTRY_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_ENTRY:
      return {
        ...state,
        userInfo: action.payload,
        isFetching: false
      };
      case FORMATTED_POST_ENTRY:
      return {
        ...state,
        formattedEntryData: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
