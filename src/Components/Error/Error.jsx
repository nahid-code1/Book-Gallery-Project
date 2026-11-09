import React from "react";

const Error = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 flex items-center justify-center px-6 py-16">
      {/* Background decorations */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Small label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm mb-8">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Error 404 · Page Not Found
          </span>
        </div>

        {/* 404 illustration */}
        <div className="relative mb-8">
          <h1 className="text-[140px] sm:text-[190px] md:text-[230px] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-indigo-600 to-blue-400 select-none">
            404
          </h1>

          {/* Decorative icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white shadow-xl shadow-blue-900/10 border border-slate-100 flex items-center justify-center rotate-[-10deg]">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="m16 16 4 4" />
                <path strokeLinecap="round" d="M8.5 11h5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Oops! You've lost your way.
        </h2>

        <p className="max-w-md mx-auto text-slate-500 text-base sm:text-lg leading-relaxed mb-9">
          The page you're looking for doesn't exist, has been moved, or is
          temporarily unavailable. Let's get you back on track.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"
              />
            </svg>
            Back to Home
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 18l-6-6 6-6"
              />
            </svg>
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-slate-200/80">
          <p className="text-sm text-slate-400">
            Lost in the digital world? It happens to the best of us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
