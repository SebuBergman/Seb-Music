import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Search from "pages/Search";
import Layout from "components/Layout";
import Error from "pages/Error";
import Genre from "pages/Genre";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/genres/:genreId" element={<Genre />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
