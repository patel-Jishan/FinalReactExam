import { useDispatch } from "react-redux";
import { addStudent } from "../redux/studentActions";
import { useState } from "react";

const StudentForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ name: "", roll: "", className: "" });

  const submit = (e) => {
    e.preventDefault();
    dispatch(addStudent(data));
    setData({ name: "", roll: "", className: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submit}
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add Student
        </h2>

        <input
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Student Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />

        <input
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Roll Number"
          value={data.roll}
          onChange={(e) => setData({ ...data, roll: e.target.value })}
          required
        />

        <input
          className="border border-gray-300 rounded-lg p-2 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Class"
          value={data.className}
          onChange={(e) => setData({ ...data, className: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
