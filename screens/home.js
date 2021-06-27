import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default class Update extends React.Component {
    switchNav = (button) => {
        this.props.navigation.navigate(button);
      };
    render(){
      return (
      <View>
  <Text>Home!</Text>
  <TouchableOpacity onPress={()=>{this.switchNav("Map")}}><Text>map</Text></TouchableOpacity>
  <TouchableOpacity onPress={()=>{this.switchNav("Pic")}}><Text>pic</Text></TouchableOpacity>
  <TouchableOpacity onPress={()=>{this.switchNav("Craft")}}><Text>craft</Text></TouchableOpacity>

      </View>
    );
      }
  }