import React from "react";
import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";
import "./TaskList.css";

export const TaskList = ({ info }) => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);

  const [show, setShow] = useState(false);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="tasklist">
      <h1>Task List</h1>
      <ul>
        <button onClick={() => setShow(!show)} className="trigger">
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              info={info}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          reprehenderit!
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          praesentium nemo unde impedit. Eius quasi perspiciatis suscipit.
          Recusandae ipsum sint quae perspiciatis temporibus debitis sequi,
          natus nam est cum dolorum veniam doloribus reprehenderit dolor odio
          vero ipsa accusantium? Nihil eos porro soluta cupiditate eveniet
          minima mollitia autem ipsam temporibus ad?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          amet!
        </p>
      </BoxCard>
    </section>
  );
};
