import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Slider = props => {
  console.log(props.displayName);

  return (
    <View>
      <Text>{props.displayName}</Text>
    </View>
  );
};

Slider.propTypes = {};

export default Slider;
