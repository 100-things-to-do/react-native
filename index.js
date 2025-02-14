import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import i18next from "./src/lang/i18n";
import App from './src/navigators/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
