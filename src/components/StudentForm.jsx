import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/studentActions";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [className, setClassName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addStudent({ name, roll, className }));
    navigate("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Roll" onChange={(e) => setRoll(e.target.value)} />
      <input placeholder="Class" onChange={(e) => setClassName(e.target.value)} />
      <button>Add Student</button>
    </form>
  );
};

export default StudentForm;
