import { createBrowserRouter } from "react-router";
import Layout from "./layouts/dashboard";
import App from "./App";
import UploadPage from "./pages/upload";
import ConvertPage from "./pages/convert";
import DownloadPage from "./pages/convert";

export const appRrouter = createBrowserRouter([
  {
    Component: App, // root layout route
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: 'upload',
            Component: UploadPage,
          },
          {
            path: 'convert',
            Component: ConvertPage,
          },
          {
            path: 'download',
            Component: DownloadPage,
          }
        ],
      },
    ],
  }
])
