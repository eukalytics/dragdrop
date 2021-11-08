import React, { useState } from "react";
import { DropTarget } from 'react-drag-drop-container';

export default function Header({
    selectedLanguage,
    setRubbishVis
}) {
    const [DTClasses, setDTClasses] =  useState('text-green-400');
    const handleHit = () => {
        setRubbishVis(true);
        setDTClasses('text-green-200');
    }
    return (
        <DropTarget 
            targetKey="header" 
            onDragEnter={() => setDTClasses('text-green-200')} 
            onDragLeave={() => setDTClasses('text-green-400')} 
            onHit={handleHit}
        >
            <h1 className={`px-4 lg:px-10 text-5xl font-bold text-center pt-10 uppercase ${DTClasses}`}>
                Put <span className="border-2 border-dashed border-gray-600 p-2 mb-2 inline-block">{selectedLanguage ? selectedLanguage : '____'}</span> in the bin
            </h1>
        </DropTarget>
    )
}