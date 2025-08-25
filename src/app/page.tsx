import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-red-600">MANGA</span> GENERATIONS
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Create, vote, and fund the next generation of manga stories
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/create" className="bg-red-600 text-white px-8 py-3 rounded font-bold hover:bg-red-700">
            Generate Manga
          </Link>
          <Link href="/vote" className="bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700">
            Vote on Stories
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">1. CREATE</h3>
          <p className="text-gray-600 mb-4">Use AI to generate stunning manga artwork</p>
          <Link href="/create" className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700">
            Start Creating
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600 mb-4">2. SUBMIT</h3>
          <p className="text-gray-600 mb-4">Share your creations with the community</p>
          <Link href="/vote" className="bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-700">
            Submit Story
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">3. FUND</h3>
          <p className="text-gray-600 mb-4">Top creators receive 10 SOL grants</p>
          <Link href="/winners" className="bg-yellow-500 text-black px-4 py-2 rounded font-bold hover:bg-yellow-400">
            View Winners
          </Link>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Community Stats</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">1,234</div>
            <div className="text-gray-600">Stories Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">56,789</div>
            <div className="text-gray-600">Community Votes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500">42</div>
            <div className="text-gray-600">Creators Funded</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black">420</div>
            <div className="text-gray-600">SOL Distributed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
