export const FETCH_ENTRY = 'FETCH_ENTRY'
export const POST_ENTRY = 'POST_ENTRY'

export const fetchEntry = () => dispatch => {
    dispatch({ type: FETCH_ENTRY })

}

export const postEntry = (entry) => dispatch => {
    dispatch({ type: POST_ENTRY, payload: entry })
    console.log(entry)

}