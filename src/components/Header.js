import React, { useState } from "react";
import { DropTarget } from 'react-drag-drop-container';


export default function Header({selectedLanguage}) {
    const [DTClasses, setDTClasses] =  useState('text-green-400');
    const handleActiveDT = () => {
        setDTClasses('text-green-200')
    }
    const handleInactiveDT = () => {
        setDTClasses('text-green-400')
    }
    return (
        <DropTarget targetKey="header" onDragEnter={handleActiveDT} onDragLeave={handleInactiveDT} onHit={handleInactiveDT}>
            <h1 className={`px-4 lg:px-10 text-5xl font-bold text-center pt-10 uppercase ${DTClasses}`}>
                Put <span className="border-2 border-dashed border-gray-600 p-2 mb-2 inline-block">{selectedLanguage}</span> in the bin
            </h1>
        </DropTarget>
    )
}