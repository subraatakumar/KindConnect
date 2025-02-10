/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {store} from '@redux/store';
import App from './src/App';
import {name as appName} from './app.json';

function MyApp() {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => MyApp);
