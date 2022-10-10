import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const mealSatisfaction = StyleSheet.create({
  component: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  text: {
    flex: 1,
    // fontFamily: 'NotoSansKR',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
  },
});

export default function MealSatisfaction(props) {
  return (
    <View style={mealSatisfaction.component}>
      <Text style={mealSatisfaction.text}>{props.message}</Text>
    </View>
  );
}