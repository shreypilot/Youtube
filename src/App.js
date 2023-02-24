import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

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