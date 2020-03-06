import axiosWithAuth from '../utils/axiosWithAuth';
export const FETCH_ENTRY = "FETCH_ENTRY";
export const FETCH_ENTRY_START = "FETCH_ENTRY_START";
export const FORMATTED_POST_ENTRY = "FORMATTED_POST_ENTRY";
export const POST_ENTRY_START = "POST_ENTRY_START"

export const fetchEntry = () => dispatch => {
  dispatch({ type: FETCH_ENTRY_START });
  axiosWithAuth()
    .get(`/users/getuserinfo`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_ENTRY, payload: res.data })
        })
        //.catch(err => dispatch({ type: FETCH_ENTRY_FAIL, payload: err }))
};

export const postFormattedEntry = (id, formattedEntry) => dispatch => {
  dispatch({ type: POST_ENTRY_START })
    axiosWithAuth()
        .post(`/details/user/${id}`, formattedEntry)
        .then(res => {
            dispatch({ type: FORMATTED_POST_ENTRY, payload: res.data })
        })
        //.catch(err => dispatch({ type: POST_ENTRY_FAIL, payload: err }))
};

