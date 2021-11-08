import { useState } from "react";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Bin from "./components/Bin";
import Rubbish from "./components/Rubbish";
export default function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(false);
  const [rubbishVis, setRubbishVis] = useState(true)

  return (
    <div className="App bg-black h-screen">
        <Header selectedLanguage={selectedLanguage}/>
        <Languages selectedLanguage={selectedLanguage} setSelectedLangauge={setSelectedLanguage} />
        {selectedLanguage &&
          <div>
            <Rubbish 
              selectedLanguage={selectedLanguage}
              rubbishVis={rubbishVis}
              setRubbishVis={setRubbishVis} 
            />
            <Bin />
          </div>
        }
    </div>
  );
}