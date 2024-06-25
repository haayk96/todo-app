import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { routes } from './routes';

function App() {
  return (
    <Router>
      <Layout>
        <Suspense>
          <Routes>
            {routes.map(({path, Component}) => (<Route key={path} path={path} element={<Component />} />))}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
