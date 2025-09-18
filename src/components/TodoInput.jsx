import { useEffect, useRef, useState } from "react";
import arrow from "../../src/assets/svg/right-arrow.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import gsap from "gsap";
import "./TodoInput.css";

export function TodoInput({ tasks, setTasks }) {
  const [inputValue, setInputValue] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [swipePassed, setSwipePassed] = useState(false);
  const [maxDrag, setMaxDrag] = useState(0);
  const buttonContainerRef = useRef(null);
  const textRef = useRef(null);
  const datePickerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (buttonContainerRef.current) {
      const containerWidth = buttonContainerRef.current.offsetWidth;
      setMaxDrag(containerWidth - 66);
    }
  }, []);

  useEffect(() => {
    gsap.to(textRef.current, {
      backgroundPosition: "-200% 0",
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTasks([
      ...tasks,
      {
        id: new Date().toLocaleString(),
        tasks: inputValue,
        dueDate: dueDate ? dueDate.toISOString() : "N/A",
      },
    ]);
    setInputValue("");
    setDueDate(null);
  };

  return (
    <>
      <div className="todo-input">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Add Task..."
        />
        <div className="set-timer-container">
          <button
            className="set-timer-button"
            onClick={() => datePickerRef.current.setOpen(true)}
          >
            SET <br /> TIME
          </button>
          <DatePicker
            className="date-picker"
            ref={datePickerRef}
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            showTimeSelect
            dateFormat="Pp"
            withPortal
            popperPlacement="top"
          />
        </div>
      </div>
      <div className="create-button" ref={buttonContainerRef}>
        <motion.button
          drag="x"
          animate={controls}
          initial={{ x: 0 }}
          dragConstraints={{ left: 0, right: maxDrag }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={(e, info) => {
            if (info.offset.x > maxDrag - 20) {
              setSwipePassed(true);
            } else {
              setSwipePassed(false);
            }
          }}
          onDragEnd={async (e, info) => {
            if (info.offset.x > maxDrag / 1.5) {
              addTodo();
              setSwipePassed(false);
              await controls.start({
                x: 0,

                transition: {
                  duration: 0.25,
                  // delay: 0.5,
                },
              });
            } else {
              setSwipePassed(false);
              await controls.start({
                x: 0,
                transition: {
                  duration: 0.25,
                },
              });
            }
          }}
        >
          <img src={arrow} alt="" />
        </motion.button>
        <p className="swipe-text" ref={textRef}>
          {swipePassed ? "RELEASE" : "SWIPE TO ADD"}
        </p>
      </div>
    </>
  );
}
