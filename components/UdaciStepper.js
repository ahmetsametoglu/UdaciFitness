import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const UdaciStepper = props => {
  console.log(props.displayName);
  return (
    <View>
      <Text>{props.displayName}</Text>
    </View>
  );
};

UdaciStepper.propTypes = {};

export default UdaciStepper;
