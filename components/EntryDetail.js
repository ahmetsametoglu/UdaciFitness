import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const EntryDetail = props => {
  return (
    <View>
      <Text>
        Entry Detail - {JSON.stringify(props.navigation.state.params.entryId)}
      </Text>
    </View>
  );
};

const mapStateToProps = (state, { navigation }) => {
  const { entryId } = navigation.state.params;
  return {
    entryId,
    metrics: state[entryId]
  };
};

export default connect(mapStateToProps)(EntryDetail);
