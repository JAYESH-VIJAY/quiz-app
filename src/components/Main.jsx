import "./Main.css";
import PropTypes from "prop-types";
function Main({ children }) {
  return <main className="main">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Main;
