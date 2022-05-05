import React from 'react';
import { View, Text } from 'react-native';

import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { FeedbackType } from '../Widget';

import { styles } from './styles';

interface OptionProps {
  onFeedbackTypeChange: (feedbackType: FeedbackType) => void;
}
export function Options({ onFeedbackTypeChange }: OptionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave your feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Option
              key={key}
              image={value.image}
              title={value.title}
              onPress={() => onFeedbackTypeChange(key as FeedbackType)}
            />
          );
        })}
      </View>

      <Copyright />
    </View>
  );
}
