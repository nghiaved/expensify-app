import { Provider } from 'react-redux'
import { store } from './redux/store'
import AppNavigation from './AppNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
