import { HeadingTop } from "./HeadingTop";
import { ExpiringTasks } from "./ExpiringTasks";
import "./HomePage.css";

export function HomePage({ tasks, setTasks, Countdown }) {
  return (
    <>
      <HeadingTop />
      <ExpiringTasks tasks={tasks} setTasks={setTasks} Countdown={Countdown} />
    </>
  );
}
