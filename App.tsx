import { Provider } from 'react-redux';
import RootNavigator from './src/navigators';
import { store } from './src/redux/store';

export default function App() {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}


