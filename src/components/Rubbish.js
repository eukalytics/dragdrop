import React from "react";
import { DragDropContainer } from 'react-drag-drop-container';
import javalogo from '../assets/img/java.png';
import phplogo from '../assets/img/php.png';
import vbalogo from '../assets/img/vba.png'

export default function Rubbish ({ 
    selectedLanguage,
    rubbishVis, 
    setRubbishVis 
}) {
    return (
        <div className={`text-center my-20 ${rubbishVis ? 'visible' : 'invisible' }`}>
            <DragDropContainer 
                targetKey="bin"
                onDrop={() => setRubbishVis(false)}
            >
                {selectedLanguage === 'Java' &&
                    <img src={javalogo} className="w-40" alt="java logo" />
                }
                {selectedLanguage === 'PHP' &&
                    <img src={phplogo} className="w-40" alt="php logo" />
                }
                 {selectedLanguage === 'VBA' &&
                    <img src={vbalogo} className="w-40"  alt="vba logo" />
                }
            </DragDropContainer>
        </div>
    )
}