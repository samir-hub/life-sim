
const initialState = {
    // the data that the user will enter. 'user' is the foreign key, 'education' is en education code (0 = no college, 1 = community college, 2 = state college or private/OOS college with scholarships, 3 = private/OOS college), 'state' is 0 for no state income taxes and 1 for opposite, 'city' is a city code (0 = small city, metro pop. < 100k; 1 = medium city, metro pop. < 300k; 2 = large city, metro pop. < 1M; 3 = very large city, metro pop. < 3M; 4 = immense city, metro pop. < 8M; 5 = NYC/SF/Honolulu/Seattle/DC/Oakland/Boston/LA), 'col' is a cost of living code (0-4)
    entryData: [
        {
            user: 1, 
            education: 2,
            state: 0, 
            city: 2, 
            col: 3
        }
    ],
    isFetching: false,
    error: null
}

const  reducer= (state = initialState, action) => {
    
}

export default reducer