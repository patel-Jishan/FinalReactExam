import { useDispatch } from "react-redux";
import { deleteStudent } from "../redux/studentActions";

const StudentDetails = ({ student }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{student.name}</h4>
      <p>Roll: {student.roll}</p>
      <p>Class: {student.className}</p>

      <button onClick={() => dispatch(deleteStudent(student.id))}>
        Delete
      </button>
    </div>
  );
};

export default StudentDetails;
