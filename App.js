/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Todo from './components/Todo';

const App = () => {
  return (
    <SafeAreaView>
      <Todo text="Hello World!" />
    </SafeAreaView>
  );
};

export default App;
