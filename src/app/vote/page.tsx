export default function VotePage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Vote on <span className="text-red-600">Stories</span></h1>
        <p className="text-xl text-gray-600">Help decide which manga stories get funded</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">Manga Cover</span>
          </div>
          <h3 className="text-lg font-bold mb-2">The Last Samurai</h3>
          <p className="text-gray-600 mb-2">by MangaMaster</p>
          <p className="text-sm text-gray-500 mb-4">A tale of honor and redemption</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">1,234 votes</span>
            <button className="bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-700">
              Vote
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">Manga Cover</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Cyberpunk Dreams</h3>
          <p className="text-gray-600 mb-2">by PixelArtist</p>
          <p className="text-sm text-gray-500 mb-4">A neon-lit adventure</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">987 votes</span>
            <button className="bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-700">
              Vote
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">Manga Cover</span>
          </div>
          <h3 className="text-lg font-bold mb-2">School Days</h3>
          <p className="text-gray-600 mb-2">by SliceOfLife</p>
          <p className="text-sm text-gray-500 mb-4">Heartwarming high school stories</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">756 votes</span>
            <button className="bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-700">
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
