import React from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset';
import {AnswersList} from './components/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId]
    const initAnswers = initDataset.answers
    this.setState({
      answer: initAnswers
    });
  }

  componentDidMount() {
    this.initAnswers()
  }

  render () {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList answer={this.state.answers}/>
        </div>
      </section>
    );
  }
}
