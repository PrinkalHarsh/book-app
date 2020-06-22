import React from 'react';
import {View, Text} from 'react-native';
import {Screen1} from './screen1';

export const Usercontext = React.createContext();
export const Channelcontext = React.createContext();

export const context = props => {
  return (
    <View>
      <Text> index page</Text>
      <Text> index page</Text>

      <Usercontext.Provider value={'Prinkal'}>
        <Channelcontext.Provider value={'Patel'}>
          <Screen1 />
        </Channelcontext.Provider>
      </Usercontext.Provider>
    </View>
  );
};
