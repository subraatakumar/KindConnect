import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '@redux/hooks';
import SearchCategoryList from './screens/searchCategoryList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App() {
  const colors = useAppSelector(state => state.colors);
  const configs = useAppSelector(state => state.configs);

  console.log('colors:', colors);
  console.log('configs:', configs);
  return (
    <View style={styles.container}>
      <SearchCategoryList />
    </View>
  );
}

export default App;
