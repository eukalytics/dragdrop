import { useState } from "react";
import Header from "./components/Header";
import Languages from "./components/Languages";
export default function App() {

  const [selectedLanguage, setSelectedLanguage] = useState('____');

  return (
    <div className="App bg-black h-screen">
        <Header selectedLanguage={selectedLanguage}/>
        <Languages selectedLanguage={selectedLanguage} setSelectedLangauge={setSelectedLanguage} />
    </div>
  );
}