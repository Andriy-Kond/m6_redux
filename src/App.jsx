import { Link, Route, Routes } from "react-router-dom";

import { Layout } from "pages/Layout/Layout";
import Tasks from "pages/Tasks";
import Tests from "pages/Tests";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Tasks/*" element={<Tasks />} />
          <Route path="Tests/*" element={<Tests />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
