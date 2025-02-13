/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {getUniqueId} from 'react-native-device-info';
import SearchCategoryList from './src/SearchCategoryList';
function App(): React.JSX.Element {
  const [uniqueId, setUniqueId] = useState('');

  useEffect(() => {
    getUniqueId().then(id => setUniqueId(id));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Sample App: {uniqueId}</Text>
        <SearchCategoryList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
