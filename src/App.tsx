/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PhoneEntryData} from './PhoneEntryData';

function App(): React.JSX.Element {
  const [entries, setEntries] = useState<number[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button
        title="add new entry"
        onPress={() => setEntries(ids => [...ids, ids.length + 1])}
      />
      <ScrollView>
        {entries.map(id => (
          <PhoneEntryData id={id} key={id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
