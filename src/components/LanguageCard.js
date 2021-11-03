import React from "react";
import { DragDropContainer } from 'react-drag-drop-container';


export default function LanguageCard({ language, selectedLanaguage, setSelectedLanguage }){
    return (
        <span className="m-2">
            <DragDropContainer targetKey="header" onDrop={() => setSelectedLanguage(language)}>
                <span className={`
                    px-5 py-2 rounded-md block inline-block filter drop-shadow-lg
                    ${selectedLanaguage === language ? 'bg-green-400' : 'bg-gray-300 hover:bg-pink-300'}
                `}>
                    {language}
                </span>
            </DragDropContainer>
        </span>
    )
}