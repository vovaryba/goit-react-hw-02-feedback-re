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
    const feedback = target.name;
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const persentagePositiveFeedback = Math.round((good / total) * 100);
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
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={persentagePositiveFeedback}
          />
        </Container>
      </>
    );
  }
}

export default App;
