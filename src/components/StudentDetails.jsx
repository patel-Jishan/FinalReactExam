import { useDispatch } from "react-redux";
import { deleteStudent, updateStudent } from "../redux/studentActions";
import { useState } from "react";

const StudentDetails = ({ student }) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(student.name || "");
  const [roll, setRoll] = useState(student.roll || "");
  const [className, setClassName] = useState(student.className || "");

  const handleUpdate = () => {
    dispatch(
      updateStudent(student.id, {
        name,
        roll,
        className,
      })
    );
    setEditMode(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition p-5 mb-4">
      {editMode ? (
        <>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Edit Student
          </h3>

          <input
            className="border border-gray-300 rounded-lg p-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border border-gray-300 rounded-lg p-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Roll Number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />

          <input
            className="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />

          <div className="flex gap-3">
            <button
              onClick={handleUpdate}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Save
            </button>

            <button
              onClick={() => setEditMode(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {student.name}
          </h2>

          <p className="text-gray-600">
            <span className="font-medium">Roll:</span> {student.roll}
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-medium">Class:</span> {student.className}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => dispatch(deleteStudent(student.id))}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Delete
            </button>

            <button
              onClick={() => setEditMode(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentDetails;
