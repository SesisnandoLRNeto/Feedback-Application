import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={successImg} />
      <Text style={styles.title}>Thanks for your feedback</Text>
      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>I wish send other feedback</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
