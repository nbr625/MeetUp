import {
  FETCH_MY_MEETUPS
} from './actions';

const INITIAL_STATE = {
  myMeetups: {
    data: [],
    isFetch: false,
    error: {
      on: false,
      message: null
    }
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_MY_MEETUPS}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_MY_MEETUPS}_FULFILLED`:
      return {
        data: action.payload,
        isFetched: true,
        error: {
          on: false,
          message: null
        }
      }
    case `${FETCH_MY_MEETUPS}_REJECTED`:
      return {
        data: [],
        isFetched: true,
        error: {
          on: true,
          message: `error when fetching my meetups`
        }
      }
    default:
      return state;
  }
}
