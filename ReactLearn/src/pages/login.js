import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

class Login extends Component {
  state = {
    email: 'qwe',
    password: 'qwe',
  }

  alertUser = (user) => {
    alert(`${user.name} is ${user.age} years old`);
  }

  login = () => {
    alert(`Email:: ${this.state.email}  Password:: ${this.state.password}`);
    this.setState({password: 'changed!'});
  };

  handleEmail = (value) => {
    this.state.email = value;
  }

  handlePassword = (value) => {
    this.setState({password: value});
  }

  componentDidMount() {
    this.render();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            autoCapitalize="none"
            // onChangeText={this.handleEmail}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            // onChangeText={this.handlePassword}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.submitButton} onPress={this.login}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>
            Password:{this.password}
          </Text>
        </View>
      </View>
    );
  }
}

export default Login

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    flex: 1,
  },
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
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    // justifyContent: 'flex-start',
    alignItems: 'baseline',
    height: 600
  }
});