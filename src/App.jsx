import "./App.css";
import { useEffect, useReducer } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Loder from "./components/Loder";
import Error from "./components/Error";
import Question from "./components/Question";
import StartScreen from "./components/StartScreen";
import ResetScreen from "./components/ResetScreen";
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: "",
  points: 0,
  quiz: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      return { ...state, answer: action.payload };
    case "next":
      return { ...state, index: state.index + 1, answer: "" };
    case "addPoints":
      return { ...state, points: state.points + 10 };
    case "finished":
      return { ...state, status: "finished" };
    case "reset":
      return {
        ...state,
        status: "loading",
        points: 0,
        index: 0,
        questions: [],
        answer: "",
        quiz: [],
      };
    case "quiz":
      return { ...state, quiz: action.payload };
    default:
      throw new Error("Action Error");
  }
}

const App = () => {
  const [{ questions, status, index, answer, points, quiz }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(() => {
    if (status === "loading") {
      fetch("https://quiz-rmlg.onrender.com/questions")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch(() => dispatch({ type: "dataFailed" }));
    }
  }, [status]);

  useEffect(() => {
    let newQuiz = [];
    for (let i = 0; i < 10; i++) {
      let quizQuestion =
        questions[Math.floor(Math.random() * questions.length)];
      newQuiz = [...newQuiz, quizQuestion];
    }
    dispatch({ type: "quiz", payload: newQuiz });
  }, [questions]);
  return (
    <>
      <Header type={`${status === "active" ? "tr" : ""}`} />
      <Main>
        {status === "loading" && <Loder />}
        {status === "error" && <Error message="Oops! Something went wrong." />}
        {status === "ready" && <StartScreen dispatch={dispatch} />}
        {status === "active" && index < 10 && (
          <Question
            question={quiz[index]}
            dispatch={dispatch}
            answer={answer}
            index={index}
            length={quiz.length}
            points={points}
          />
        )}
        {status === "finished" && (
          <ResetScreen points={points} dispatch={dispatch} />
        )}
      </Main>
    </>
  );
};

export default App;
