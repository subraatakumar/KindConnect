import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {useAppSelector} from '@redux/hooks';
import {store} from './redux/store';
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
    <Provider store={store}>
      <View style={styles.container}>
        <SearchCategoryList />
      </View>
    </Provider>
  );
}

export default App;
