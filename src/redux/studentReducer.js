let  initialState = {
  loading: false,
  students: [],
  error: null,
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return { loading: false, students: action.payload, error: null };

    case "FETCH_FAIL":
      return { loading: false, students: [], error: action.payload };

    default:
      return state;
  }
};
