// App.js
import { lazy, Suspense } from 'react';
import './App.css';
import { Router } from './components/Router';
import Page404 from './pages/404';
import { Route } from './components/Route';

//"lazy: Expected the result of a dynamic an DEFAULT import() call. const MyComponent = lazy(() => import('./MyComponent'))" Ademas debe de ser 

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutUs.jsx'));

const appRoutes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: lazy(() => import('./pages/Search'))
  }
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;