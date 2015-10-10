'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  MapView,
} = React;

var map = React.createClass({
  render: function() {
    return (
    <View style={styles.container}>
      <MapView showsUserLocation={true} style={styles.container}/>
    </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 2,
  },
});

AppRegistry.registerComponent('map', () => map);
