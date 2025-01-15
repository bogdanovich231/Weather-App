import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import Loader from './Components/Loader/Loader.tsx';
const App = lazy(() => import('./App.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Provider>
  </StrictMode>
);
