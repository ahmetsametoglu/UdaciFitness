import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Stepper = props => {
  console.log(props.displayName);
  return (
    <View>
      <Text>{props.displayName}</Text>
    </View>
  );
};

Stepper.propTypes = {};

export default Stepper;
