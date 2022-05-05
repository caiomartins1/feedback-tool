import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successIcon from '../../assets/success.png';
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface SuccessProps {
  onSendOtherFeedback: () => void;
}
export function Success({ onSendOtherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={successIcon} style={styles.image} />

      <Text style={styles.title}>Thanks for the feedback</Text>

      <TouchableOpacity style={styles.button} onPress={onSendOtherFeedback}>
        <Text style={styles.buttonTitle}>Submit other feedback</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
