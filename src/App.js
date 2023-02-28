import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer />
    },
    {
      path:"/watch",
      element:<WatchPage />
    },
    {
      path:"/demo",
      element:<Demo />
    },
    {
      path:"/demo2",
      element:<Demo2 />
    },
  ]
}])

function App() {
  return(
    <Provider store={store}>
        <div>
          <Head />
          <RouterProvider router={appRouter} />
          {/**
           * 
           * Header
           * Bodu
           *   -sidebar
           *      -menuItems
           * MainContainer
           *  -button list
           *  -videoContainer
           *     -videoCard
           */}
        </div>
      </Provider>
       
    
   
  );
}
export default App;