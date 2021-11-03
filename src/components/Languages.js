import React from "react";
import LanguageCard from "./LanguageCard";

export default function Languages({ selectedLanguage, setSelectedLangauge }){
    return (
        <div className="mt-5 text-center">
            <LanguageCard language="Java" setSelectedLanguage={setSelectedLangauge} selectedLanaguage={selectedLanguage} />
            <LanguageCard language="PHP" setSelectedLanguage={setSelectedLangauge} selectedLanaguage={selectedLanguage} />
            <LanguageCard language="VBA" setSelectedLanguage={setSelectedLangauge} selectedLanaguage={selectedLanguage} />
        </div>
    )
}