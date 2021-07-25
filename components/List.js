import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';

const propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

class List extends React.PureComponent {
  render() {
    const {navigation, title, data} = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Card navigation={navigation} item={item} />
            )}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

List.propTypes = propTypes;
export default List;
