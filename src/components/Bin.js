import { useState } from "react"
import { DropTarget } from 'react-drag-drop-container';


export default function Bin() {
    const [dtActive, setDtActive] = useState(false);
    const handleActiveDT = () => {
        setDtActive(true);
    }
    const handleInactiveDT = () => {
        setDtActive(false);
    }
    return (
        <div className="mt-60">
            <DropTarget targetKey="bin" onDragEnter={handleActiveDT} onDragLeave={handleInactiveDT} onHit={handleInactiveDT}>
                <div className={`h-4 w-16 bg-green-400 mx-auto ${dtActive ? 'bg-pink-400' : 'bg-green-300'}`}>
                </div>
                <div className={`h-10 w-60 bg-green-400 mx-auto bg-white ${dtActive ? 'bg-pink-400' : 'bg-green-300'}`}>
                </div>
                <div className={`h-72 w-52 border-2 border-t-0 mx-auto ${dtActive ? 'border-pink-200' : 'border-green-200'}`}>
                </div>
            </DropTarget>
        </div>
    )
}