// helpers
import { secondToTime } from "../helpers/secondsToTime";

const Clock = ({ time = 0 }) => {
  let { seconds, minutes, hours } = secondToTime(time);

  return (<>
    <div className="px-12 py-12 border-2 bg-slate-100 border-solid border-slate-200 rounded-lg w-full mx-auto shadow-lg mt-4">
      <h1 className="tracking-widest text-5xl flex justify-center">
        {`${hours}:${addZero(minutes)}:${addZero(seconds)}`}
      </h1>
    </div>
    </>);
};

const addZero = (time) => {
  return time < 10 ? `0${time}` : time;
};

export default Clock;
