import { FC } from "react";
import { Exercise } from "../../types/types";
import { RemoveIcon } from "../icons/RemoveIcon";

type ExerciseFieldProps = {
  exercise: Exercise;
  onChange: (id: number, field: string, value: string | number) => void;
  onRemove: () => void;
};

const ExerciseField: FC<ExerciseFieldProps> = ({
  exercise,
  onChange,
  onRemove,
}) => {
  return (
    <div className="flex flex-col">
      <div className="w-full my-3">
        <label
          htmlFor={`name-${exercise.id}`}
          className="block text-md font-semibold">
          Exercise
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id={`name-${exercise.id}`}
            value={exercise.name}
            onChange={(e) => onChange(exercise.id, "name", e.target.value)}
            className="w-4/5 p-2 border border-gray-300 rounded-md"
            placeholder="Enter exercise name"
          />
          <button
            onClick={onRemove}
            className="md:p-2 p-1 w-1/5 bg-red-500 text-white rounded-md flex items-center justify-center">
            <RemoveIcon className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-6">
        <div className="">
          <label htmlFor={`sets-${exercise.id}`} className="block">
            Sets
          </label>
          <input
            type="number"
            id={`sets-${exercise.id}`}
            value={exercise.sets}
            onChange={(e) =>
              onChange(exercise.id, "sets", Number(e.target.value))
            }
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Sets"
          />
        </div>

        <div>
          <label htmlFor={`weight-${exercise.id}`} className="block">
            Weight (kg)
          </label>
          <input
            type="number"
            id={`weight-${exercise.id}`}
            value={exercise.weight}
            onChange={(e) =>
              onChange(exercise.id, "weight", Number(e.target.value))
            }
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Weight"
          />
        </div>

        <div>
          <label htmlFor={`reps-${exercise.id}`} className="block">
            Reps
          </label>
          <input
            type="number"
            id={`reps-${exercise.id}`}
            value={exercise.reps}
            onChange={(e) =>
              onChange(exercise.id, "reps", Number(e.target.value))
            }
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Reps"
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseField;
