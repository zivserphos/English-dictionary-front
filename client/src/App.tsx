import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Word from "./pages/word/Word";
import PartOfSpeech from "./pages/part-of-speech/PartOfSpeech";
import Home from "./pages/home/Home";

function App() {
   return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/words/:word" element={<Word />} />
          <Route path="/words/:word/:pos" element={<Word />} />
          <Route path="/part-of-speech/:pos" element={<PartOfSpeech />} />
          <Route
            path="/part-of-speech/:pos/:letter"
            element={<PartOfSpeech />}
          />
        </Routes>
      </HashRouter>
  );
}

export default App;
