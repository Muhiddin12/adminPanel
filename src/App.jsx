import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import DynamicTable from "./Components/DynamicTable/DynamicTable";
import Forms from "./Components/BranchForm/BranchForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/branches" />} />
        <Route path="/:slug" element={<DynamicTable />} />
        <Route path="/:slug/create" element={<Forms />} />
        <Route path="/:slug/update/:id" element={<Forms />} />
      </Routes>

      {/* <DynamicTable />
      <Forms /> */}
    </div>
  );
}

export default App;
