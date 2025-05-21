import { useState } from "react"

import HabitsList from "./HabitsList"
import HabitsForm from "./HabitsForm"

function Habits() {
    const [habits, setHabits] = useState([])

    const addHabit = (input) => {
        let newHabit = {
            text: input.value,
            id: Date.now()
        }
        setHabits([...habits, newHabit]);
        input.value = '';
    }


    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="w-full py-3 text-center text-violet-700 bg-violet-300">Журнал привычек</h2>
            <HabitsForm addHabit={addHabit}/>
            <HabitsList habits={habits}/>
        </div>
    )
}

export default Habits