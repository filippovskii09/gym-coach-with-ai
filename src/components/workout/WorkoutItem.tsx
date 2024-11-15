import { FC, useState } from "react";
import { motion } from "framer-motion";

type WorkoutItemProps = {
  workout: any;
};

const WorkoutItem: FC<WorkoutItemProps> = ({ workout }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      className="mb-6 p-4 cursor-pointer md:p-6 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-indigo-100 to-white transition-all md:scale-95 hover:scale-100">
      <h3 className="text-2xl font-bold text-indigo-700">
        {workout.title}
      </h3>
      <p className="text-sm text-gray-500 mb-3">
        Дата створення: {new Date(workout.date).toLocaleString()}
      </p>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 space-y-4">
        {isOpen && (
          <ul className="mt-4 space-y-4">
            {workout.exercises.map((exercise: any, index: number) => (
              <li
                key={index}
                className="flex flex-col md:flex-row md:gap-6 border rounded-md p-2 md:p-4 shadow-md bg-white">
                <h4 className="text-lg font-semibold text-gray-800">
                  {exercise.name}
                </h4>
                <div className="pl-3 text-gray-700">
                  <p>
                    Підходи: <span className="font-bold">{exercise.sets}</span>
                  </p>
                  <p>
                    Вага: <span className="font-bold">{exercise.weight}</span>{" "}
                    кг
                  </p>
                  <p>
                    Повторення:{" "}
                    <span className="font-bold">{exercise.reps}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </li>
  );
};

export default WorkoutItem;
