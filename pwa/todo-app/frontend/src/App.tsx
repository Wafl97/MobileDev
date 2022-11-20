import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import routes from "./config/Routes";
import IRoute from "./interfaces/IRoute";
import UserContext from './context/UserContext';
import User from './models/UserModel';
import userViewModel from './viewmodels/UserViewModel';
import Task from './models/TaskModel';
import TaskContext from './context/TaskContext';

function App() {
  
  const [user, setUser] = useState<User>();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {    
    userViewModel().config(setUser);
    userViewModel().retreiveUser();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <TaskContext.Provider value={{ tasks, setTasks }}>
            <Suspense fallback="Loading...">
              <Header />
              <Routes>
                {routes.map((route: IRoute, index: number) => {
                  return <Route key={`route:${index}`} path={route.path} element={<route.view>{route.props}</route.view>} />;
                })}
              </Routes>
            </Suspense>
          </TaskContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;