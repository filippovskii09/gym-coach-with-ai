import { RemoveIcon } from '../icons/RemoveIcon';
import useWorkout from '@/hooks/useWorkout';

const CreateWorkout = () => {
  const {
    exercises,
    workoutName,
    setWorkoutName,
    addExerciseField,
    handleInputChange,
    handleDeleteExercise,
    saveWorkout,
  } = useWorkout();

  return (
    <div className="max-w-full mx-auto mt-6 p-3 md:p-6 bg-white rounded-lg md:shadow-xl md:max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-700">
        Створення тренування
      </h2>
      <input
        type="text"
        value={workoutName}
        placeholder="Назва тренування"
        className="w-full p-3 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e) => setWorkoutName(e.target.value)}
      />
      {exercises.map((exercise, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 mb-5 md:flex-row md:gap-4 items-center"
        >
          <input
            type="text"
            placeholder="Назва вправи"
            value={exercise.name}
            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          <input
            type="number"
            placeholder="Кількість підходів"
            value={exercise.sets}
            onChange={(e) => handleInputChange(index, 'sets', e.target.value)}
            className="md:w-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          <input
            type="number"
            placeholder="Вага (кг)"
            value={exercise.weight}
            onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
            className="md:w-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          <input
            type="number"
            placeholder="Повторення"
            value={exercise.reps}
            onChange={(e) => handleInputChange(index, 'reps', e.target.value)}
            className="md:w-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          <button
            onClick={() => handleDeleteExercise(index)}
            className="w-full md:w-auto bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-transform transform hover:scale-105 flex items-center justify-center"
          >
            <RemoveIcon />
          </button>
        </div>
      ))}
      <button
        onClick={addExerciseField}
        className="w-full p-3 mt-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
      >
        ➕ Додати вправу
      </button>
      <button
        onClick={saveWorkout}
        className="w-full p-3 mt-4 mb-12 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
      >
        Зберегти тренування
      </button>
    </div>
  );
};

export default CreateWorkout;
