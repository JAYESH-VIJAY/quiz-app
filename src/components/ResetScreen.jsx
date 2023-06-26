import PropTypes from "prop-types";

const ResetScreen = ({ points, dispatch }) => {
  let resultLine;

  if (points >= 75) {
    resultLine = (
      <p>
        Congratulations! You&apos;ve earned an excellent score of {points}{" "}
        points, showcasing your exceptional knowledge and expertise. 🎉😄
      </p>
    );
  } else if (points >= 50) {
    resultLine = (
      <p>
        Keep up the effort! With a score of {points} points, your performance is
        moderate, but remember that every point is a stepping stone towards
        improvement and success. 👏📚
      </p>
    );
  } else {
    resultLine = (
      <p>
        Don&apos;t be disheartened! Even with {points} points, every attempt is
        an opportunity to learn and grow. Keep going, and aim higher with each
        quiz! 💪🌱
      </p>
    );
  }

  return (
    <div className="reset-screen">
      <h3 className="reset-screen__title">Quiz Result:</h3>
      <div className="reset-screen__content">
        {resultLine}
        <button
          className="reset-screen__button"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
};

ResetScreen.propTypes = {
  dispatch: PropTypes.func,
  points: PropTypes.number,
};
export default ResetScreen;
