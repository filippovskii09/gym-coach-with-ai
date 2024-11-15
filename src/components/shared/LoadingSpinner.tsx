import { FC } from "react";

const LoadingSpinner: FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-pulse">
        <svg width="80px" height="80px" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33 16.5H35C35.552 16.5 36 16.948 36 17.5V27.5C36 28.052 35.552 28.5 35 28.5H33C32.448 28.5 32 28.052 32 27.5V17.5C32 16.948 32.448 16.5 33 16.5Z" stroke="#fff" strokeWidth="2"/>
          <path d="M29 12.5H31C31.552 12.5 32 12.948 32 13.5V31.5C32 32.052 31.552 32.5 31 32.5H29C28.448 32.5 28 32.052 28 31.5V13.5C28 12.948 28.448 12.5 29 12.5Z" stroke="#fff" strokeWidth="2"/>
          <path d="M15 12.5H17C17.552 12.5 18 12.948 18 13.5V31.5C18 32.052 17.552 32.5 17 32.5H15C14.448 32.5 14 32.052 14 31.5V13.5C14 12.948 14.448 12.5 15 12.5Z" stroke="#fff" strokeWidth="2"/>
          <path d="M11 16.5H13C13.552 16.5 14 16.948 14 17.5V27.5C14 28.052 13.552 28.5 13 28.5H11C10.448 28.5 10 28.052 10 27.5V17.5C10 16.948 10.448 16.5 11 16.5Z" stroke="#fff" strokeWidth="2"/>
          <path d="M36 22.5H39" stroke="#fff" strokeWidth="2"/>
          <path d="M18 22.5H28" stroke="#fff" strokeWidth="2"/>
          <path d="M7 22.5H10" stroke="#fff" strokeWidth="2"/>
        </svg>
      </div>
      <p className="ml-4 text-white font-medium">Завантаження...</p>
    </div>
  );
};

export default LoadingSpinner;