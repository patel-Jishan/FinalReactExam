import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/studentActions";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/">Students</Link> |{" "}
      <Link to="/add">Add Student</Link> |{" "}
      <button onClick={() => dispatch(logout())}>Logout</button>
    </nav>
  );
};

export default Navbar;
