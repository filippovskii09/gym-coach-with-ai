import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { Exercise } from "@/types/types";

const useWorkout = () => {
  const [exercises, setExercises] = useState<Exercise[]>(() => {
    const savedData = localStorage.getItem("workoutData");
    return savedData ? JSON.parse(savedData).exercises : [{ name: "", sets: "", weight: "", reps: "" }];
  });
  const [workoutName, setWorkoutName] = useState<string>(() => {
    const savedData = localStorage.getItem("workoutData");
    return savedData ? JSON.parse(savedData).workoutName : "";
  });

  const { user } = useAuth();

  const addExerciseField = () => {
    setExercises([...exercises, { id: Date.now(), name: "", sets: "", weight: "", reps: "" }]);
  };

  const handleInputChange = (index: number, field: keyof Exercise, value: string) => {
    const updatedExercises = exercises.map((exercise, i) =>
      i === index ? { ...exercise, [field]: value } : exercise
    );
    setExercises(updatedExercises);
  };

  const handleDeleteExercise = (id: number) => {
    setExercises(exercises.filter((_, index) => index !== id));
  };

  const saveWorkout = async () => {
    if (!user) {
      console.error("Користувач не авторизований");
      return;
    }

    const workout = {
      exercises,
      date: new Date().toISOString(),
      title: workoutName,
    };

    try {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        workouts: arrayUnion(workout),
      });
      console.log("Тренування збережено!");
      setWorkoutName("");
      setExercises([{ id: null, name: "", sets: "", weight: "", reps: "" }]);
      localStorage.removeItem("workoutData"); // Очищення localStorage після збереження
    } catch (error) {
      console.error("Помилка при збереженні тренування:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("workoutData", JSON.stringify({ workoutName, exercises }));
	}, [workoutName, exercises]);
	
  return {
    exercises,
    workoutName,
    setWorkoutName,
    addExerciseField,
    handleInputChange,
    handleDeleteExercise,
    saveWorkout,
  };
};

export default useWorkout;
