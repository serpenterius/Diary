import { useState, useRef, useEffect } from "react"

function HabitsList(props) {
    const [expanded, setExpanded] = useState(false);
    const habitsList = props.habits

    return (
        // <ul className="p-5 w-full">
        //     <li onClick={() => setExpanded(!expanded)}
        //         className=" border-2 border-violet-600 rounded-full bg-violet-600 text-violet-50 p-4 my-4 flex justify-between">
        //         Программирование
        //         <div className=" w-40 flex justify-between">
        //             <button>Сделать</button>
        //             <button>Удалить</button>
        //         </div>
        //     </li>
        //     <li className="border-2 border-violet-600 rounded-full bg-violet-600 text-violet-50 p-4 my-4 flex justify-between">
        //         Фортепиано
        //         <div className="w-40 flex justify-between">
        //             <button>Сделать</button>
        //             <button>Удалить</button>
        //         </div>
        //     </li>
        // </ul>
        <ul>
            {habitsList.map(item => (
                <li key={item.id}>
                    {item.text}
                </li>
            ))}
        </ul>
    )
}

export default HabitsList