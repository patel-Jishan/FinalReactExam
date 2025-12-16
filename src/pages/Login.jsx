import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  const loginHandler = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://reactfinalexam-2c92a-default-rtdb.firebaseio.com/students.json"
      );

      const data = await res.json();

      if (!data) {
        setError("No students found in database");
        setLoading(false);
        return;
      }

      const students = Object.values(data);

      const validStudent = students.find(
        (s) =>
          s.email?.trim() === email.trim() &&
          s.password?.trim() === password.trim()
      );

      if (validStudent) {
        localStorage.setItem("auth", "true");
        localStorage.setItem(
          "loggedStudent",
          JSON.stringify(validStudent)
        );
        nav("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Student Login
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 mb-4 rounded text-center">
            {error}
          </p>
        )}

        <input
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-500"
          placeholder="Email (amit@gmail.com)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border border-gray-300 rounded-lg p-3 w-full mb-6 focus:ring-2 focus:ring-blue-500"
          placeholder="Password (123)"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginHandler}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
