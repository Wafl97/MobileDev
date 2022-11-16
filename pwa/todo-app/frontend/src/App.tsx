import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import './App.css';

//Context
import TaskContext from "./context/TaskContext";

//Routes
import routes from "./config/Routes";
import IRoute from "./interfaces/IRoute";
import UserContext from './context/UserContext';
import User from './models/UserModel';

function App() {

  const [todoTasks, setTodoTasks] = useState();
  const [doingTasks, setDoingTasks] = useState();
  const [doneTasks, setDoneTasks] = useState();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    //Check if there is a user session key
    const localUser = localStorage.getItem("user");
    if (localUser) {
      console.log(localUser);
      
      const userJson = JSON.parse(localUser);
      const { id, username, password } = userJson;
      setUser(new User(id, username, password))
    }
    
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <TaskContext.Provider value={{ todoTasks, setTodoTasks, doingTasks, setDoingTasks, doneTasks, setDoneTasks }}>
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
