import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

class ScrollViewExample extends Component {
  state = {
    names: [
      { name: 'Ben', id: 1 },
      { name: 'Susan', id: 2 },
      { name: 'Robert', id: 3 },
      { name: 'Mary', id: 4 },
      { name: 'Daniel', id: 5 },
      { name: 'Laura', id: 6 },
      { name: 'John', id: 7 },
      { name: 'Zebra', id: 8 },
      { name: 'Aron', id: 9 },
      { name: 'Ann', id: 10 },
      { name: 'Steve', id: 11 },
      { name: 'Olivia', id: 12 }
    ]
  }

  alertUser = (user) => {
    alert(`${user.name} has id ${user.id}`);
  }

  render() {
    return (
      <View>
        <ScrollView>
          {
            this.state.names.map((item, index) => (
              <View key={item.id} style={styles.item}>
                <Text onPress={() => this.alertUser(item)}>{item.name}</Text>
              </View>
            ))
          }
          <Image source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}} 
          style={{width: 100, height: 100}}/>
        </ScrollView>
      </View>
    )
  }
}
export default ScrollViewExample

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
  }
})