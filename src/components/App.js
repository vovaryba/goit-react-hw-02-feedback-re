import { Component } from 'react';
import Container from 'components/Container';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

const REVIEWS = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementReview = ({ target }) => {
    console.log(target.name);
    const feedback = target.name;
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    let persentagePositiveFeedback = Math.round(
      (this.state.good / total) * 100,
    );
    return (
      <>
        <Container title="Please leave feedback">
          <FeedbackOptions
            options={REVIEWS}
            onLeaveFeedback={this.handleIncrementReview}
          />
        </Container>

        <Container title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={persentagePositiveFeedback}
          />
        </Container>
      </>
    );
  }
}

export default App;
