export default function ProfilePage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Creator <span className="text-blue-600">Profile</span></h1>
        <p className="text-xl text-gray-600">Your manga journey and achievements</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">MangaCreator</h2>
              <p className="text-gray-600 mb-4">Passionate manga artist</p>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Stories Created:</span>
                  <span className="font-bold text-blue-600">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Votes:</span>
                  <span className="font-bold text-red-600">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Grants Won:</span>
                  <span className="font-bold text-yellow-500">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-bold mb-6">My Submissions</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Manga Cover 1</span>
              </div>
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Manga Cover 2</span>
              </div>
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Manga Cover 3</span>
              </div>
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Manga Cover 4</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">Published Works</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Published Manga 1</span>
              </div>
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Published Manga 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
