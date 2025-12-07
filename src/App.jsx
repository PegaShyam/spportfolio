import { lazy, Suspense } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import PageNotFound from "./pages/PageNotFound";

// Lazy load pages
const Home = lazy(() => import("./pages/HomePage"));
const Work = lazy(() => import("./pages/WorkPage"));

// Simple loading component
const Loading = () => (
  <div className="w-screen h-screen flex items-center justify-center">
    <div className="flex items-center gap-2 animate-spin">
      <div className="relative w-2 h-2 bg-transparent border-4 border-white rounded-full p-4">
        <div className="absolute left-1/2 right-1/2 -translate-1/2 w-20 h-2 bg-zinc-900"></div>
      </div>
    </div>
  </div>
);

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "work",
        element: (
          <Suspense fallback={<Loading />}>
            <Work />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
