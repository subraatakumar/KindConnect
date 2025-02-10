import {useAppSelector} from '@redux/hooks';
import {View} from 'react-native';

function App() {
  const colors = useAppSelector(state => state.colors);
  const configs = useAppSelector(state => state.configs);

  console.log('colors:', colors);
  console.log('configs:', configs);
  return <View />;
}

export default App;
