const BASE_URL =
  "https://reactfinalexam-2c92a-default-rtdb.firebaseio.com/students";

export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: "FETCH_REQ" });

  try {
    const res = await fetch(`${BASE_URL}.json`);
    const data = await res.json();

    const students = data
      ? Object.keys(data).map((id) => ({ id, ...data[id] }))
      : [];

    dispatch({ type: "FETCH_SUCCESS", payload: students });
  } catch (error) {
    dispatch({ type: "FETCH_FAIL", payload: error.message });
  }
};

export const addStudent = (student) => async (dispatch) => {
  await fetch(`${BASE_URL}.json`, {
    method: "POST",
    body: JSON.stringify(student),
  });

  dispatch(fetchStudents());
};

export const updateStudent = (id, student) => async (dispatch) => {
  await fetch(`${BASE_URL}/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(student),
  });

  dispatch(fetchStudents());
};

export const deleteStudent = (id) => async (dispatch) => {
  await fetch(`${BASE_URL}/${id}.json`, {
    method: "DELETE",
  });

  dispatch(fetchStudents());
};

export const login = () => ({ type: "LOGIN_SUCCESS" });
export const logout = () => ({ type: "LOGOUT" });
