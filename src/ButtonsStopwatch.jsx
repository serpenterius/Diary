


function Start(props) {
    return (
        <div className="my-5 py-3 w-96 flex justify-between">
            <button className="w-28 py-2 rounded-3xl border-2 border-violet-600 text-violet-600 duration-300 hover:bg-violet-600 hover:text-violet-50" onClick={() => props.startTime()}>Начать</button>
            <button className='w-28 py-2 rounded-3xl border-2 border-violet-600 text-violet-600 duration-300 hover:bg-violet-600 hover:text-violet-50' onClick={() => props.stopTime()}>Остановить</button>
            <button className="w-28 py-2 rounded-3xl border-2 border-violet-600 text-violet-600 duration-300 hover:bg-violet-600 hover:text-violet-50" onClick={() => props.clearTime()}>Очистить</button>
        </div>
    )
}

export default Start