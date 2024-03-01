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

async function enableMocking() {
  await import('./msw/polyfills');
  const {server} = await import('./msw/server');
  server.listen();
}

function App(): React.JSX.Element {
  const [MSWEnabled, setMSWEnabled] = useState(false);
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
        disabled={MSWEnabled}
        title={MSWEnabled ? 'MSW ON' : 'Turn on MSW'}
        onPress={() => {
          enableMocking().then(() => {
            setMSWEnabled(true);
          });
        }}
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
