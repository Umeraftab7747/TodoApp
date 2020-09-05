/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

export class Todo extends Component {
  state = {
    data: [{txt: 'Take BreakFast'}, {txt: 'Going for Shoping'}],
    text: '',
  };

  add = () => {
    // const item = AsyncStorage.setItem('Item', JSON.stringify(text));
    // console.warn(item);
  };

  renderItemDesign = (item) => {
    return (
      <View style={styles.addItem}>
        <View style={styles.left}>
          <Text style={styles.txt}>{item.txt}</Text>
        </View>
        <TouchableOpacity style={styles.right}>
          <Icon name="delete" type="feather" color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.Container}>
        {/* top */}
        <View style={styles.top}>
          <TextInput
            placeholder={'Add Todo-List'}
            placeholderTextColor={'#0006'}
            style={styles.serchbox}
            onChangeText={(txt) =>
              this.setState({
                text: txt,
              })
            }
          />
          <TouchableOpacity
            onPress={() => {
              this.add();
            }}
            style={styles.searchbtn}>
            <Icon name="add" type="ionicon" color="#fff" />
          </TouchableOpacity>
        </View>
        {/* bottom */}
        <View style={styles.bottom}>
          <FlatList
            style={{width: '100%'}}
            data={this.state.data}
            renderItem={({item}) => this.renderItemDesign(item)}
            keyExtractor={(item) => item.txt}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  top: {
    backgroundColor: 'tomato',
    width: '100%',
    height: h('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottom: {
    backgroundColor: 'dodgerblue',
    width: '100%',
    height: h('80%'),
    alignItems: 'center',
  },
  serchbox: {
    backgroundColor: 'white',
    width: '70%',
    height: h('6.6%'),
  },
  searchbtn: {
    backgroundColor: 'dodgerblue',
    width: '10%',
    height: h('6.6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addItem: {
    backgroundColor: 'white',
    width: '85%',
    height: h('10%'),
    margin: h('2%'),
    flexDirection: 'row',
    marginLeft: h('5%'),
  },
  left: {
    // backgroundColor: 'red',
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  right: {
    backgroundColor: 'tomato',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    marginLeft: h('1%'),
    color: 'black',
    fontSize: h('2.3%'),
    fontWeight: '600',
  },
});
