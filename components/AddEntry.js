import React, { Component } from 'react';
import { View } from 'react-native';
import { getMetricMetaInfo } from '../utils/helpers';
import { MaterialIcons } from '@expo/vector-icons';

export default class AddEntry extends Component {
  render() {
    return <View>{getMetricMetaInfo('run').getIcon()}</View>;
  }
}
