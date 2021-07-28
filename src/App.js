import React, { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = (event) => {
    console.log(event.target.name);
    const feedbackName = event.target.name;
    if (feedbackName === 'good') {
      setGood(state => state + 1);
    } else if (feedbackName === 'neutral') {
      setNeutral(state => state + 1);
    } else if (feedbackName === 'bad') {
      setBad(state => state + 1);
    } else return;
  }

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage = (good / total) * 100;
    return parseInt(Math.round(positivePercentage));
  }

  const total = countTotalFeedback();
  const feedbackOptions = {good: good, neutral: neutral, bad: bad};
  const objectKeys = Object.keys(feedbackOptions);

  return (
    <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objectKeys}
            onLeaveFeedback={onLeaveFeedback} />
        </Section>

        {total === 0 ? (<Notification message="No feedback given" />)
          : (<Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()} />
          </Section>
          )
      }
    </>
  )
}


// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   onLeaveFeedback = (event) => {
//     const feedbackName = event.target.name;
//     this.setState((prevState) => ({
//       [feedbackName]: prevState[feedbackName] + 1,
//     }));
//   }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   }

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     const positivePercentage = (good / total) * 100;
//     return parseInt(Math.round(positivePercentage));

//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const objectKeys = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={objectKeys}
//             onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>

//         {total === 0 ? (<Notification message="No feedback given" />)
//           : (<Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage} />
//           </Section>
//           )
//         }
//       </>
//     )
//   }
// }
