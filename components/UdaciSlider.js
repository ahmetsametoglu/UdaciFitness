import React from 'react';
import { View, Text, Slider } from 'react-native';
import PropTypes from 'prop-types';

const UdaciSlider = ({ max, unit, step, value, onChange }) => {
  return (
    <View>
      <Text>UdaciSlider</Text>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
};

UdaciSlider.propTypes = {};

export default UdaciSlider;
