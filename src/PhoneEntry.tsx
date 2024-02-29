import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {PhoneEntry as PhoneEntryT} from './api';

interface PhoneEntryProps {
  entry: PhoneEntryT;
}

export const PhoneEntry = ({entry: {id, name, data}}: PhoneEntryProps) => {
  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      {data &&
        Object.entries(data).map(([key, value]) => (
          <Text key={`${id}_${key}`} style={styles.info}>
            {value}
          </Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
    fontWeight: 'normal',
  },
});
