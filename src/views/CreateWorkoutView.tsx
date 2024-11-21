import { Link } from 'react-router-dom';
import WorkoutForm from '../components/workout/WorkoutForm';

export const CreateWorkoutView = () => {
  return (
    <>
      <WorkoutForm />
      <Link
        to="/home"
        className="shadow-xl fixed bottom-4 right-4 bg-pink-500 text-white px-3 py-2 md:px-5 md:py-3 rounded-full hover:bg-pink-600 transition-transform transform hover:scale-105 md:bottom-8 md:right-8 text-sm md:text-base"
      >
        Переглянути тренування
      </Link>
    </>
  );
};
