import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const UdaciSlider = props => {
  console.log(props.displayName);

  return (
    <View>
      <Text>{props.displayName}</Text>
    </View>
  );
};

UdaciSlider.propTypes = {};

export default UdaciSlider;
