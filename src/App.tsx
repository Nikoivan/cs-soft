import React from 'react';
import { Provider } from 'react-redux';

import Layout from './components/Layout/Layout';
import store from './lib/redux/store';
import './App.css';
import CsSoft from './components/CsSoft/CsSoft';

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
