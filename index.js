import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './src/store/store';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import ToastCard from './src/Component/ToastCard';
import { scaleModerate } from './src/Helpers/helper.scale';

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp);
