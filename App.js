import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Audio } from "expo-av";

export default class App extends Component {
  playSound1 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://cd.textfiles.com/mmplus/MEDIA/WAV/EFFECTS/BP_JZZPN.WAV' },
      { shouldPlay: true }
    );
  };
  playSound2 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://cd.textfiles.com/mmplus/MEDIA/WAV/EFFECTS/BP_JZZPN.WAV' },
      { shouldPlay: true }
    );
  };
  playSound3 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://hyperkrychle.cz/spectran/sounds/sing.wav' },
      { shouldPlay: true }
    );
  };
  playSound4 = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://hyperkrychle.cz/spectran/sounds/sing.wav' },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <View>
        <View style={{ marginTop: 20, width: 100, alignSelf: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              width: 130,
              height: 70,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 10,
              borderColor: 'aqua',
              borderRadius: 40,
            }}
            onPress={this.playSound1}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'Italic',
                fontSize: 15,
              }}>
              Sound 1
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, width: 100, alignSelf: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              width: 130,
              height: 70,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 10,
              borderColor: 'aqua',
              borderRadius: 40,
            }}
            onPress={this.playSound2}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'Italic',
                fontSize: 15,
              }}>
              Sound 2
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, width: 100, alignSelf: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 130,
              height: 70,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 10,
              borderColor: 'aqua',
              borderRadius: 40,
            }}
            onPress={this.playSound3}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'Italic',
                fontSize: 15,
              }}>
              Sound 3
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, width: 100, alignSelf: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'yellow',
              width: 130,
              height: 70,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 10,
              borderColor: 'aqua',
              borderRadius: 40,
            }}
            onPress={this.playSound4}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'Italic',
                fontSize: 15,
              }}>
              Sound 4
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, width: 100, alignSelf: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'pink',
              width: 170,
              height: 80,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 10,
              borderColor: 'aqua',
              borderRadius: 40,
            }}
            onPress={() => {
              Audio.setIsEnabledAsync(false);
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'Italic',
                fontSize: 15,
              }}>
              Stop Sound!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
