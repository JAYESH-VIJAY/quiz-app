import PropTypes from "prop-types";
function Error({ message }) {
  return (
    <div className="error-container">
      <svg
        className="error-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12" y2="16" />
      </svg>
      <p className="error-message">{message}</p>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
