import {
  FETCH_ENTRY_START,
  FETCH_ENTRY,
  FETCH_ENTRY_BY_ID,
  FETCH_ENTRY_BY_ID_START,
  POST_ENTRY_START,
  FORMATTED_POST_ENTRY,
  PUT_ENTRY,
  PUT_ENTRY_START,
} from "../actions";

const initialState = {
  formattedEntryData: [{}],
  userInfo: [{}],
  currentDetails: {},
  isFetching: true,
  isPosting: false,
  isFetchingById: true,
  isEditing: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTRY_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ENTRY:
      return {
        ...state,
        userInfo: action.payload,
        isFetching: false,
      };
    case FETCH_ENTRY_BY_ID_START:
      return {
        ...state,
        isFetchingById: true,
      };
    case FETCH_ENTRY_BY_ID:
      return {
        ...state,
        currentDetails: action.payload,
        isFetchingById: false,
      };
    case POST_ENTRY_START:
      return {
        ...state,
        isPosting: true,
      };
    case FORMATTED_POST_ENTRY:
      return {
        ...state,
        formattedEntryData: action.payload,
        isPosting: false,
      };
    case PUT_ENTRY_START:
      return {
        ...state,
        isEditing: true,
      };
    case PUT_ENTRY:
      return {
        ...state,
        isEditing: false,
      };
    default:
      return state;
  }
};

export default reducer;
