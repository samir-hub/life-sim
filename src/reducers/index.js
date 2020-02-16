import { FETCH_ENTRY, FORMATTED_POST_ENTRY } from "../actions";

const initialState = {
  // the data that the user will enter. 'user' is the foreign key, 'education' is en education code (0 = no college, 1 = community college, 2 = state college or private/OOS college with scholarships, 3 = private/OOS college), 'major' is a major code (0 = arts and humanities, 1 = business, 2 = education, 3 = music, 4 = engineering, 5 = nursing, 6 = med school, 7 = social sciences, 8 = hard sciences),'state' is 0 for no state income taxes and 1 for opposite, 'city' is a city code (0 = small city, metro pop. < 100k; 1 = medium city, metro pop. < 300k; 2 = large city, metro pop. < 1M; 3 = very large city, metro pop. < 3M; 4 = immense city, metro pop. < 8M; 5 = NYC/SF/Honolulu/Seattle/DC/Oakland/Boston/LA), 'col' is a cost of living code (0-3)
  formattedEntryData : {},
  isFetching: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTRY:
      return {
        ...state
      };
      case FORMATTED_POST_ENTRY:
      console.log(action.payload);
      return {
        ...state,
        formattedEntryData: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
