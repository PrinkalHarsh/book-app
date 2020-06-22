import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {Usercontext, Channelcontext} from './index';

export const Screen2 = () => {
  const user = useContext(Usercontext);
  const channel = useContext(Channelcontext);
  return (
    <View>
      <Text>
        {user} {channel}
      </Text>
    </View>
  );
};
