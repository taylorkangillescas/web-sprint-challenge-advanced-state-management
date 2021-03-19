import axios from 'axios';

export const SMURF_NEW = 'SMURF_NEW';
export const SMURF_NEW_ERROR = 'SMURF_NEW_ERROR';
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS= 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';

//fetchSmurfs should trigger a get request to smurf api, then return an array of smurfs
export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: FETCH_SMURF_START});
    axios.get('http://localhost:3333/smurfs')
    .then(res=> {
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err=>{
        dispatch({type: FETCH_SMURF_ERROR, payload: err.response})
    })
}

//addSmurf should send post request to smurf api to add a new smurf which will be be stored in the database
export const addSmurf = (smurf) => (dispatch) => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res=> {
        dispatch({type: SMURF_NEW, payload: smurf})
    })
    .catch(err=>{
        dispatch({type: SMURF_NEW_ERROR, payload: err.response})
    })
}

export const newError = (err) => (dispatch) => {
    dispatch({type: SMURF_NEW_ERROR, payload:err});
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.