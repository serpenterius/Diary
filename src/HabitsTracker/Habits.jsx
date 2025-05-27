import { useState, useEffect } from "react"

import HabitsList from "./HabitsList"
import HabitsForm from "./HabitsForm"

function Habits() {
    const [habits, setHabits] = useState(() => {
        const stored = localStorage.getItem('habits');
        return stored ? JSON.parse(stored) : [];
    });
    const [date, setDate] = useState('');

    useEffect(() => {
        const now = Date.now();
        setDate((now / 1000 / 60 / 60 / 24 % 365).toFixed(0))

        const habitsCheckDate = habits.map(item => {
            if((date - item.lastCheckmark) > 1) {
                return {...item, streak : 0, lastCheckmark: 0}
            } else {
                return item
            }
        })
        setHabits(habitsCheckDate);
    }, [])


    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits))
    }, [habits])

    const addHabit = (input) => {
        let newHabit = {
            text: input.value,
            id: Date.now(),
            streak: 0,
            lastCheckmark: ''
        }
        setHabits([...habits, newHabit]);
        input.value = '';
    }

    const deleteHabit = (id) => {
        const newList = habits.filter(item => item.id !== id)
        setHabits(newList);
    }

    const doneHabit = (id) => {
        const newList = habits.map(item => {
            if(item.id === id) {
                if(item.lastCheckmark === date) {
                   alert('На сегодня вы уже отметили эту привычку')
                } else {
                    return {...item, streak: item.streak + 1, lastCheckmark: date}
                }
            }

            return item;
        })
        setHabits(newList);
    }


    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="w-full py-3 text-center text-violet-700 bg-violet-300">Журнал привычек</h2>
            <HabitsForm addHabit={addHabit}/>
            <HabitsList habits={habits}
                        remove={deleteHabit}
                        done={doneHabit}/>
        </div>
    )
}

export default Habits