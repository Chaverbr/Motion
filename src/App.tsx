import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoDesign from "./Pages/VideoDesign";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoDesign />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
