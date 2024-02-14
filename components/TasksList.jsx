


import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTasks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading tasks: ", error);
  }
};

export default async function TaskcsList() {
  // const { tasks } = await getTasks();



  let tasks;

  try {
    const { tasks: fetchedTasks } = await getTasks();
    tasks = fetchedTasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    // Assign some default value to tasks
    tasks = [];
  }




  return (
    <>
      {tasks.map((t) => (
        <div
          key={t._id}
          className="p-4 my-3 flex justify-between gap-5 items-start rounded-md shadow-md mb-5"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTask/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
