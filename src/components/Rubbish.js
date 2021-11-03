import React, { useEffect } from "react";
import { DragDropContainer } from 'react-drag-drop-container';
import javalogo from '../assets/img/java.png';
import phplogo from '../assets/img/php.png';
import vbalogo from '../assets/img/vba.png'

export default function Rubbish ({ selectedLanguage }) {
    return (
        <div className="text-center my-20">
            <DragDropContainer targetKey="bin">
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