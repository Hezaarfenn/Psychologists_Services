import { Link } from "react-router-dom";

export default function RetroNotFound() {
  return (
    <div className="mt-10 min-h-[calc(100vh-80px)] bg-gray-300 text-[rgb(var(--primary-color))] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(#000_1px,transparent_1px)] bg-[length:100%_3px] opacity-10 pointer-events-none z-10" />

      <div className="z-20">
        <h1 className="text-4xl sm:text-6xl font-pixel mb-6 animate-pulse tracking-widest">
          404 - NOT FOUND
        </h1>
        <p className="text-lg sm:text-xl mb-6 font-pixel text-[rgb(var(--primary-color))]">
          <span className="block">
            Ooops! Your camper seems to have taken a wrong turn. This page
            doesn’t exist.
          </span>
        </p>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 border border-[rgb(var(--primary-color))] text-[rgb(var(--primary-color))] hover:[rgb(var(--primary-color-hover))] hover:bg-[rgb(var(--primary-color-hover))] hover:text-[rgb(var(--primary-text-on))] transition-colors duration-300 rounded-full font-pixel text-lg sm:text-xl"
        >
          ANA SAYFA
        </Link>
      </div>
    </div>
  );
}
