import { HeadingTop } from "./HeadingTop";
import { ExpiringTasks } from "./ExpiringTasks";
import "./HomePage.css";

export function HomePage({ tasks, setTasks, getTimeLeft }) {
  return (
    <>
      <HeadingTop />
      <ExpiringTasks
        tasks={tasks}
        setTasks={setTasks}
        getTimeLeft={getTimeLeft}
      />
    </>
  );
}
