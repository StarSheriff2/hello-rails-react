// Actions
const FETCH_STARTED = 'hello-rails-react/app/javascript/redux/greeting/FETCH_STARTED';
const FETCH_SUCCEDED = 'hello-rails-react/app/javascript/redux/greeting/FETCH_SUCCEDED';
const FETCH_FAILED = 'hello-rails-react/app/javascript/redux/greeting/GNI_WORLD_FAILED';

// Initial State

const initialState = {
  status: 'idle',
  message: '...wait',
};

// Action Creators
export const getGreetingStarted = () => ({
  type: FETCH_STARTED,
});

export const getGreetingSuccess = (payload) => ({
  type: FETCH_SUCCEDED,
  payload,
});

export const getGreetingFailed = (payload) => ({
  type: FETCH_FAILED,
  payload,
});

export const fetchGreeting = () => async (dispatch) => {
  dispatch(getGreetingStarted());
  try {
    const data = await (await fetch(baseURL, {})).json();
    dispatch(getGniWorldSuccess(data[1]));
  } catch (err) {
    dispatch(getGniWorldFailed(err.toString()));
  }
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        status: 'starting',
      };
    case FETCH_SUCCEDED: {
      return {
        entities: action.payload,
        status: 'idle',
      };
    }
    case FETCH_FAILED:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
