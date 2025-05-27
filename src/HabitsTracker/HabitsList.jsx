import { useState, useRef, useEffect } from "react"

function HabitsList(props) {
    const [expanded, setExpanded] = useState(false);
    const habitsList = props.habits
    const habitsElements = habitsList.map(item => {
        return (
            <li key={item.id}
                className="w-full flex items-center justify-between border-2 border-violet-600 rounded-full my-5 p-3 text-violet-600">
                    {item.text}
                    <div className="flex justify-between w-64">
                        <p>Streak : {item.streak}</p>
                        {/* <input type="checkbox"
                                className="appearance-none w-8 h-8 rounded-2xl border-2 border-violet-600
                                            checked:bg-violet-600 checked:"/> */}
                        <button className=""
                                onClick={() => props.done(item.id)}>Выполнить</button>
                        <button onClick={() => props.remove(item.id)}>Удалить</button>
                    </div>
            </li>)
    })

    return (
        <ul className="w-full px-4">
            {habitsElements}
        </ul>
    )
}

export default HabitsList