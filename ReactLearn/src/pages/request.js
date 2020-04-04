import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class Request extends Component {
  state = {
    data: 'qwe',
  }

  getRequest = () => {
    this.setState({data: 'Invoker!'})
    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //   method: 'GET'
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson);
    //     this.setState({
    //       data: responseJson.title
    //     })
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <View>
        <View>
          <Text>{this.state.data}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.submitButton} onPress={this.getRequest}>
            <Text style={styles.submitButtonText}> OMG </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Request

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    flex: 1,
  },
  submitButtonText: {
    color: 'white'
  },
});