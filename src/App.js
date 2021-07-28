import { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (event) => {
    const feedbackName = event.target.name;
    this.setState((prevState) => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const positivePercentage = (good / total) * 100;
    return parseInt(Math.round(positivePercentage));

  }

  render() {
    const { good, neutral, bad } = this.state;
    const objectKeys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objectKeys}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        {total === 0 ? (<Notification message="No feedback given" />)
          : (<Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage} />
          </Section>
          )
        }
      </>
    )
  }
}



