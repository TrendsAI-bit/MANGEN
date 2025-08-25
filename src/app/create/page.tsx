"use client";

import { useState } from "react";

export default function CreatePage() {
  const [prompt, setPrompt] = useState("A professional manga illustration with dynamic action scenes");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    // API call would go here
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Generate <span className="text-red-600">Manga</span> Art</h1>
        <p className="text-xl text-gray-600">Create stunning manga artwork using AI</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-32 p-4 border rounded-lg resize-none"
              placeholder="Describe the manga art you want to create..."
            />
          </div>
          <button
            onClick={generate}
            disabled={loading}
            className="w-full bg-red-600 text-white py-4 font-bold rounded hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Manga Art"}
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Generated Art</h3>
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">
              {loading ? "Generating your manga art..." : "Your generated art will appear here"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
