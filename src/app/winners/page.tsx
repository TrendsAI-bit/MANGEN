export default function WinnersPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4"><span className="text-yellow-500">Winners</span> Gallery</h1>
        <p className="text-xl text-gray-600">Meet the creators who received funding</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">Winner</span>
          </div>
          <h3 className="text-lg font-bold mb-2">The Last Samurai</h3>
          <p className="text-gray-600 mb-3">by MangaMaster</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-yellow-500 font-bold border border-yellow-500 px-2 py-1 rounded">
              10 SOL Grant
            </span>
            <span className="text-sm text-gray-500">Published</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">Winner</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Cyberpunk Dreams</h3>
          <p className="text-gray-600 mb-3">by PixelArtist</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-yellow-500 font-bold border border-yellow-500 px-2 py-1 rounded">
              10 SOL Grant
            </span>
            <span className="text-sm text-gray-500">Coming Soon</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">Winner</span>
          </div>
          <h3 className="text-lg font-bold mb-2">School Days</h3>
          <p className="text-gray-600 mb-3">by SliceOfLife</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-yellow-500 font-bold border border-yellow-500 px-2 py-1 rounded">
              10 SOL Grant
            </span>
            <span className="text-sm text-gray-500">In Production</span>
          </div>
        </div>
      </div>
    </div>
  );
}
