import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContentPorts from './components/molecules/ContentPorts';
import ContentPost from './components/molecules/ContentPorts/ContentPort';
import Layout from './components/organisms/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Ports component */}
          <Route index path='ports' element={<ContentPorts />} />
          {/* Port component */}
          <Route path='ports/:id' element={<ContentPost />} />
          {/* Dashboard component */}
          <Route path='dashboard' element={<span>Dashboard</span>} />
          {/* Settings component */}
          <Route path='settings' element={<span>Settings</span>} />
          {/* Customers component */}
          <Route path='customers' element={<span>Customers</span>} />
          {/* Not Found router component */}
          <Route path='*' element={'404'} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
