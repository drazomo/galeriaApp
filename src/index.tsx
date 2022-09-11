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
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
