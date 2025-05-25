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
        <ul className="w-full px-4">
            {habitsList.map(item => (
                <li key={item.id}
                    className="w-full flex items-center justify-between border-2 border-violet-600 rounded-full my-5 p-3 text-violet-600">
                    {item.text}
                    <div className="flex justify-between border-2 border-black w-64">
                        <p>Streak : {item.streak}</p>
                        {/* <input type="checkbox"
                                className="appearance-none w-8 h-8 rounded-2xl border-2 border-violet-600
                                            checked:bg-violet-600 checked:"/> */}
                        <button className=""
                                onClick={() => props.done(item.id)}>Выполнить</button>
                        <button onClick={() => props.remove(item.id)}>Удалить</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default HabitsList