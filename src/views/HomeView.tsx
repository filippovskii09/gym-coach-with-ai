import WorkoutList from "@/components/workout/WorkoutList";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div className="relative min-h-screen p-4 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <WorkoutList />
      <Link
        to="/create"
        className="fixed bottom-6 right-6 bg-pink-500 text-white px-5 py-3 rounded-full shadow-xl hover:bg-pink-600 transition-transform transform hover:scale-105 md:bottom-8 md:right-8"
      >
        ➕ Додати тренування
      </Link>
    </div>
  );
};

export default HomeView;