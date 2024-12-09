import { Provider } from 'react-redux';

import Layout from './components/Layout/Layout';
import store from './lib/redux/store';
import CsSoft from './components/CsSoft/CsSoft';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <CsSoft />
      </Layout>
    </Provider>
  );
}

export default App;
