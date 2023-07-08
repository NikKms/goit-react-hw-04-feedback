import React, { useState } from 'react';

import { FeedbackPanel } from 'components/FeedbackPanel';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { FeedbackStatistics } from 'components/FeedbackStatistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = key => {
    switch (key) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const totalValue = good + neutral + bad;
  const positivePercent = Math.round((good / totalValue) * 100);
  const optionsKey = { good, neutral, bad };

  return (
    <FeedbackPanel title={'Please leave feedback'}>
      <FeedbackOptions options={optionsKey} onIncrement={handleIncrement} />
      <FeedbackStatistics
        title={'Statistics'}
        options={optionsKey}
        total={totalValue}
        positiveFeedback={positivePercent}
      />
    </FeedbackPanel>
  );
};
