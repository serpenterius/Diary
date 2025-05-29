

function Analysis(props) {
    const visible = 'border-2 border-black w-full'
    const hidden = 'border-2 border-black w-full hidden'

    return (
        <div className="w-full flex flex-col">
            <button className="">Аналитика</button>
            <div className="border-2 border-black w-full">
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