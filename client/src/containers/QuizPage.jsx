import React, { Component } from "react";
import Quiz from "../components/Quiz/Quiz";
import quizQuestions from "../components/Quiz/quizQuestions";
import update from "react-addons-update";
import Result from "../components/Quiz/Result";
import Wrapper from "../components/Result/TravelWrapper"
import PropTypes from "prop-types";

class QuizPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      history: [
        {
          questionId: "",
          answer: ""
        }
      ],
      img: "",
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {
        Laidback: 0,
        Tourist: 0,
        Adventurous: 0
      },
      result: "",
      showPath: false,
      response: [],
      destination: '',
      suggestion:''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  setUserAnswer = () => {
    const updatedAnswersCount = update(this.state.answersCount, {
      [this.state.answer]: { $apply: currentValue => currentValue + 1 }
    });
    this.setState({
      answersCount: updatedAnswersCount
    });
  };

  handleBackButton = event => {
    event.preventDefault();
    console.log("prev");
    const history = this.state.history;
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;
    const current = this.state.history.splice(this.state.counter - 1, 1);
    // const updatedAnswersCount = update(this.state.answersCount, {
    //   [this.state.history.answer]: {$apply: (currentValue) => currentValue - 1}
    // });
    console.log(current);
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answersCount: history[counter].answersCount,
      answer: history[counter].answer
      // history : [current]
      // history: this.state.history.splice(counter, 0, [{
      //      questionId:this.state.questionId,
      //      answer: this.state.answer,
      //      answersCount: this.state.answersCount
      //    }]),
    });
  };

  handleNextButton = event => {
    event.preventDefault();
    console.log("next");
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    if (this.state.questionId === quizQuestions.length) {
      setTimeout(() => this.setResults(this.getResults()), 300);
    } else {
      this.setUserAnswer();
      this.setState({
        history: this.state.history.concat([
          {
            questionId: this.state.questionId,
            answer: this.state.answer,
            answersCount: this.state.answersCount
          }
        ]),
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ""
      });
    }
  };

  handleAnswerSelected = event => {
    if (event.target.value !== "Laidback" || event.target.value !== "Tourist" || event.target.value !== "Adventurous") {
      this.setState({destination: event.currentTarget.value})
    } 
    console.log(event.target.value)
    this.setState({
      answer: event.currentTarget.value
    });
  };

  getResults = () => {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  };

  setResults = result => {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Tourist" });
    }
  };

  handleRetakeButton = event => {
    this.setState({
      result: "",
      response: [],
      counter: 0,
      questionId: 1,
      counter: 0,
      answer: "",
      history: [
        {
          questionId: "",
          answer: ""
        }
      ],
      answersCount: {
        Laidback: 0,
        Tourist: 0,
        Adventurous: 0
      }
    });
  };

  handleItinerary = event => {
    event.preventDefault()
    console.log("Click happened");
    this.setState({showPath: true})
  };

  renderQuiz = () => {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        onNextPressed={this.handleNextButton}
        onBackPressed={this.handleBackButton}
      />
    );
  };

  renderImg = () => {
   let result = this.state.result
      if(result === "Laidback") {
        return "img/Laidback.jpg";
      }
       if(result === "Tourist") {
        return "img/Tourist.jpg";
      }
       if(result === "Adventurous") {
        return "img/Adventurous.jpg";
      }
      
  }

  renderResult = () => {
    var img;
    if (this.state.result !== "") {
     img = this.renderImg()
    }
    return (
      <div>
      {this.state.showPath ? <Wrapper destination={this.state.destination} personality={this.state.result}/> :
        <Result
        quizResult={this.state.result}
        handleRetakeButton={this.handleRetakeButton}
        handleItinerary={this.handleItinerary}
        resultImg = {img}
      />}
      </div>
     
    );
  };

  render() {
    return (
      <div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default QuizPage;
