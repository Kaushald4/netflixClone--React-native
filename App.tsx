import 'react-native-gesture-handler';
import React from 'react';
import {DarkTheme} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';
import Main from './src/main';

const App = () => {
  const theme = {
    ...DarkTheme,
  };

  return (
    <PaperProvider>
      <Main theme={theme} />
    </PaperProvider>
  );
};

export default App;
