import PropTypes from "prop-types";

function StartScreen({ dispatch }) {
  return (
    <div className="start-screen">
      <h2>
        welcome to the <span>quizzfinity</span>
      </h2>
      <blockquote>
        Test your knowledge, unlock insights, and ignite your passion for
        learning!
      </blockquote>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        Let&apos;s start
      </button>
    </div>
  );
}

StartScreen.propTypes = {
  dispatch: PropTypes.func,
};

export default StartScreen;
