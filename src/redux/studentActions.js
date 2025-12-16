let  STUDENT_URL =
  "https://reactfinalexam-2c92a-default-rtdb.firebaseio.com/students";


export let  fetchStudents = () => async (dispatch) => {
  dispatch({ type: "FETCH_REQ" });

  try {
    let res = await fetch(`${STUDENT_URL}.json`);
    let data = await res.json();

    let students = data
      ? Object.keys(data).map((id) => ({ id, ...data[id] }))
      : [];

    dispatch({ type: "FETCH_SUCCESS", payload: students });
  } catch (err) {
    dispatch({ type: "FETCH_FAIL", payload: err.message });
  }
};


export let addStudent = (student) => async (dispatch) => {
  await fetch(`${STUDENT_URL}.json`, {
    method: "POST",
    body: JSON.stringify(student),
  });

  dispatch(fetchStudents());
};


export let deleteStudent = (id) => async (dispatch) => {
  await fetch(`${STUDENT_URL}/${id}.json`, {
    method: "DELETE",
  });

  dispatch(fetchStudents());
};


export let updateStudent = (id, student) => async (dispatch) => {
  await fetch(`${STUDENT_URL}/${id}.json`, {
    method: "PATCH",
    body: JSON.stringify(student),
  });

  dispatch(fetchStudents());
};
