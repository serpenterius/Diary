import { useState } from "react"

function Analysis(props) {
    const [isVisible, setIsVisible] = useState(false)
    const visible = 'border-2 border-black w-full'
    const hidden = 'border-2 border-black w-full hidden'


    return (
        <div className="w-full flex flex-col items-center">
            <button onClick={() => setIsVisible(!isVisible)}
                    className="border-2 border-violet-600 rounded-full px-3 py-2 my-3 text-violet-600">Аналитика</button>
            <div className={isVisible ? 'border-2 border-black w-5/6 rounded-3xl p-2' : 'border-2 border-black w-5/6 rounded-3xl hidden'}>
                <ul>
                    {props.habits.map(item => (
                        <li className="border-2 border-black">{item.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Analysis