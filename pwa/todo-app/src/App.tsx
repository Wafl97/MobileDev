import { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

//Context
import TaskContext from "./context/TaskContext";

//Routes
import routes from "./config/routes";
import IRoute from "./interfaces/IRoute";

function App() {

  const [tasks, setTasks] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <TaskContext.Provider value={{ tasks, setTasks }}>
          <Suspense fallback="Loading...">
            <Routes>
              {routes.map((route: IRoute, index: number) => {
                return <Route key={`route:${index}`} path={route.path} element={<route.view>{route.props}</route.view>} />;
              })}
            </Routes>
          </Suspense>
        </TaskContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
