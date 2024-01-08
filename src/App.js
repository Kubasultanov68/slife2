import {useRoutes} from "react-router-dom";
import Layout from "./Layout";

export default function App () {
  return useRoutes([
    {
      path: '/',
      element: <Layout/>
    }
  ])
}
