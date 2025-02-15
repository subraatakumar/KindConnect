/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from '@redux/store';
import App from './src/App';
import {name as appName} from './app.json';

function MyApp() {
  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => MyApp);
