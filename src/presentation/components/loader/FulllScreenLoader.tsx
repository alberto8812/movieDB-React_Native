
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

export const FulllScreenLoader = () => {
  return (
    <View  style={{flex:1, justifyContent:'center', alignContent:'center'} }>
    <ActivityIndicator size='large' color={'indigo'} />
    </View>
  );
};