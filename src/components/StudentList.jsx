import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../redux/studentActions";
import StudentDetails from "./StudentDetails";

const StudentList = () => {
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Student List</h2>
      {students.map((stu) => (
        <StudentDetails key={stu.id} student={stu} />
      ))}
    </div>
  );
};

export default StudentList;
