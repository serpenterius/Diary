import { useRef } from "react"

function HabitsForm(props) {
    const inputRef = useRef(null)

    return (
        <div className="flex flex-col gap-4 items-center w-1/2 py-10">
            <input  ref={inputRef}
                    className="border-2 border-violet-600 rounded-3xl w-1/2 h-10 px-2" />
            <button onClick={() => props.addHabit(inputRef.current)} 
                    className="border-2 border-violet-600 px-5 py-2 rounded-3xl text-violet-600 duration-300 hover:bg-violet-600 hover:text-violet-50">Добавить</button>
        </div>
    )
}

export default HabitsForm