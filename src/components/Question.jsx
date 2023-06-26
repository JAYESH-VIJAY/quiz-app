import PropTypes from "prop-types";
function Question({ question, dispatch, answer, index, length}) {
  const isDisable = answer != "";
  return (
    <div className="question-container">
      <div className="question-number">
        question &nbsp;
        {index + 1}/{length}
      </div>
      <h2 className="question">{question.question}</h2>
      <div className="option-container">
        <button
          className={`option-btn ${
            answer === "" ? "" : answer === "A" ? "right" : "wrong"
          }`}
          disabled={isDisable}
          onClick={() => {
            if (question.answer === "A") dispatch({ type: "addPoints" });
            dispatch({ type: "newAnswer", payload: question.answer });
          }}
        >
          <span>A</span>
          {question.A}
        </button>
        <button
          className={`option-btn ${
            answer === "" ? "" : answer === "B" ? "right" : "wrong"
          }`}
          disabled={isDisable}
          onClick={() => {
            if (question.answer === "B") dispatch({ type: "addPoints" });
            dispatch({ type: "newAnswer", payload: question.answer });
          }}
        >
          <span>B</span>
          {question.B}
        </button>
        <button
          className={`option-btn ${
            answer === "" ? "" : answer === "C" ? "right" : "wrong"
          }`}
          disabled={isDisable}
          onClick={() => {
            if (question.answer === "C") dispatch({ type: "addPoints" });
            dispatch({ type: "newAnswer", payload: question.answer });
          }}
        >
          <span>C</span>
          {question.C}
        </button>
        <button
          className={`option-btn ${
            answer === "" ? "" : answer === "D" ? "right" : "wrong"
          }`}
          disabled={isDisable}
          onClick={() => {
            if (question.answer === "D") dispatch({ type: "addPoints" });
            dispatch({ type: "newAnswer", payload: question.answer });
          }}
        >
          <span>D</span>
          {question.D}
        </button>
      </div>
      {index < 9 && (
        <button
          className="next-btn"
          onClick={() => {
            dispatch({ type: "next" });
          }}
        >
          Next question &rarr;
        </button>
      )}
      <div
        className="submit-btn-parent"
        onClick={() => {
          dispatch({ type: "finished" });
        }}
      >
        {index === 9 && <button className="submit-btn">SUBMIT</button>}
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object,
  dispatch: PropTypes.func,
  answer: PropTypes.string,
  length: PropTypes.number,
  index: PropTypes.number,
  points: PropTypes.number,
};
export default Question;
