import axiosWithAuth from '../utils/axiosWithAuth';
export const FETCH_ENTRY = "FETCH_ENTRY";
export const FORMATTED_POST_ENTRY = "FORMATTED_POST_ENTRY";

export const fetchEntry = () => dispatch => {
  dispatch({ type: FETCH_ENTRY });
  axiosWithAuth()
    .get(`/users/getuserinfo`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_ENTRY, payload: res.data })
        })
        //.catch(err => dispatch({ type: FETCH_ENTRY_FAIL, payload: err }))
};

export const postFormattedEntry = (id, formattedEntry) => dispatch => {
  //dispatch({ type: FORMATTED_POST_ENTRY, payload: formattedEntry });

  dispatch({ type: FORMATTED_POST_ENTRY })
    axiosWithAuth()
        .post(`/details/user/${id}`, formattedEntry)
        .then(res => {
            dispatch({ type: FORMATTED_POST_ENTRY, payload: res.data })
        })
        //.catch(err => dispatch({ type: POST_ENTRY_FAIL, payload: err }))
};

