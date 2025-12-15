const initialState = {
  students: [],
  loading: false,
  error: null,
  isAuth: false,
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return { ...state, loading: false, students: action.payload };

    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    case "LOGIN_SUCCESS":
      return { ...state, isAuth: true };

    case "LOGOUT":
      return { ...state, isAuth: false };

    default:
      return state;
  }
};
