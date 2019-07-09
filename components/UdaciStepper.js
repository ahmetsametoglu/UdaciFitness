import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const UdaciStepper = ({ max, unit, step, value, onIncrement, onDecrement }) => {
  return (
    <View>
      <Text>UdaciSteppers</Text>
      <View>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesome name="minus" size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
          <FontAwesome name="plus" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
};

UdaciStepper.propTypes = {};

export default UdaciStepper;
