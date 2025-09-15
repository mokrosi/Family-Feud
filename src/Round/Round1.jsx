export default function Round1() {
  return (
    <div className="relative flex h-full items-center justify-center mt-4  overflow-hidden">
      {/* Optional: Subtle Grid Background */}


      <div className=" w-full ">
        <h1 className="mb-10 text-right text-5xl font-extrabold tracking-tight text-amber-300 drop-shadow-sm">
          الأسئلة ✦
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300  shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">١</span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">٢</span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">٣</span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">٤</span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">٥</span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">٦</span>
          </div>
        </div>
      </div>
    </div>
  );
}
