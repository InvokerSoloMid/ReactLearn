/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Component } from 'react';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    this.show();
    return (
      <Provider store={store}>
        <Text>Hello World!</Text>
      </Provider>
    );
  }

  show() {
    console.log('Hi');
  }
}

export default App;
