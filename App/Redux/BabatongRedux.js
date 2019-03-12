import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  babatongRequest: ['line', 'keep'],
  babatongSuccess: ['departure', 'stations', 'gps'],
  babatongFailure: ['error']
})

export const BabatongTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  departure: null,
  stations: null,
  gps: null,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, action) => {
  const { keep } = action
  if(keep) return state.merge({})
  else return state.merge({ error: null, fetching: true, departure: null, stations: null, gps: null })
}
// successful api lookup
export const success = (state, action) => {
  const { departure, stations, gps } = action
  return state.merge({ fetching: false, error: null, departure, stations, gps })
}

// Something went wrong somewhere.
export const failure = (state, { error }) => {
  return state.merge({ fetching: false, error })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BABATONG_REQUEST]: request,
  [Types.BABATONG_SUCCESS]: success,
  [Types.BABATONG_FAILURE]: failure
})
