import React, {useEffect, useState} from 'react';
import {PhoneEntry} from './PhoneEntry';
import {PhoneEntry as PhoneEntryT, getSinglePhoneEntry} from './api';
import {ActivityIndicator, Text, View} from 'react-native';

export const PhoneEntryData = ({id}: {id: number}) => {
  const [error, setError] = useState<string | null>(null);
  const [entry, setEntry] = useState<PhoneEntryT | null>(null);

  useEffect(() => {
    getSinglePhoneEntry(id)
      .then(data => {
        setEntry(data);
      })
      .catch(e => {
        setError(e.message);
      });
  }, [id]);

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!entry) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return <PhoneEntry entry={entry} />;
};
