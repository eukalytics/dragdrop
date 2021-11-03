import { useState } from "react";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Bin from "./components/Bin";
export default function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(false);

  return (
    <div className="App bg-black h-screen">
        <Header selectedLanguage={selectedLanguage}/>
        <Languages selectedLanguage={selectedLanguage} setSelectedLangauge={setSelectedLanguage} />
        {selectedLanguage &&
          <Bin />
        }
    </div>
  );
}