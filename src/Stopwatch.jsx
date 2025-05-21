

function Stopwatch(props) {
   return (
    <div className="border-violet-600 border-2 rounded-3xl w-60 h-32 p-4 flex justify-between items-center">
        <span className="text-5xl">{Math.floor(props.time / 3600)}</span>
        <span className="text-5xl">{Math.floor((props.time / 60) % 60)}</span>
        <span className="text-5xl">{props.time % 60}</span>
    </div>
   )
}

export default Stopwatch