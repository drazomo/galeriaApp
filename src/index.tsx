import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import App from './app';
import GlobalStyles from './styles/globals';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Saved from './pages/Saved';
import Collections from './pages/Collections';
import User from './pages/User';
import Collection from './pages/Collection';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<App />} />
              {/* Misc. routes goes here */}
              <Route path='/saved' element={<Saved />} />
              <Route path='/themes' element={<Collections />} />
              <Route path='/user/:username' element={<User />} />
              <Route path='collection/:id' element={<Collection />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
