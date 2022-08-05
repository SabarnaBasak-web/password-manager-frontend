import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import NavigationScreen from './src/Screens/NavigationScreen';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return <NavigationScreen />;
};

export default App;
