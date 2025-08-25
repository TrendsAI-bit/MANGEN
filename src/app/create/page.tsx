"use client";

import { useState } from "react";
import Image from "next/image";

export default function CreatePage() {
  const [prompt, setPrompt] = useState("A professional manga illustration with dynamic action scenes");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generate = async () => {
    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          size: "1024x1024",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate image");
      }

      setGeneratedImage(data.imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate image");
    } finally {
      setLoading(false);
    }
  };

  const presetPrompts = [
    "A dramatic manga panel featuring a samurai warrior in battle stance, dynamic lighting, detailed armor",
    "A cyberpunk manga scene with neon lights, futuristic cityscape, and a mysterious character",
    "A slice-of-life manga panel showing high school students in a classroom, warm lighting",
    "A fantasy manga illustration with magical creatures, mystical forest setting, vibrant colors",
    "A sports manga panel with intense action, speed lines, and determined athletes",
    "A romance manga scene with cherry blossoms, soft lighting, and emotional characters"
  ];

  return (
    <>
      <h2 className="h2"><span>CREATE</span><small>GENERATOR</small></h2>

      <div className="hero">
        <div className="panel">
          <div className="caption">AI GENERATOR</div>
          <p className="copy">
            Create stunning manga artwork using AI. Describe your vision and watch it come to life!
            Our AI understands manga aesthetics and can generate panels, covers, and illustrations.
          </p>
          <div style={{marginTop: '12px'}}>
            <label style={{display: 'block', fontWeight: '800', marginBottom: '8px'}}>PROMPT</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              style={{
                width: '100%',
                height: '120px',
                padding: '12px',
                border: '3px solid var(--ink)',
                background: '#f0ebde',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                resize: 'none'
              }}
              placeholder="Describe the manga art you want to create..."
            />
          </div>
          <button
            onClick={generate}
            disabled={loading}
            style={{
              width: '100%',
              marginTop: '12px',
              padding: '12px',
              background: loading ? '#ccc' : 'var(--accent)',
              color: 'white',
              border: '3px solid var(--ink)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              fontSize: '16px',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? "GENERATING..." : "GENERATE MANGA ART"}
          </button>
          {error && (
            <div style={{
              marginTop: '12px',
              padding: '8px',
              background: '#ffebee',
              border: '2px solid #f44336',
              color: '#d32f2f',
              fontSize: '14px'
            }}>
              Error: {error}
            </div>
          )}
        </div>

        <div className="panel">
          <div className="caption">PREVIEW</div>
          <div style={{height: '300px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden', background: '#eee8dc'}}>
            {loading && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: '#666',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px'
              }}>
                Generating your manga art...
              </div>
            )}
            {generatedImage && (
              <Image
                src={generatedImage}
                alt="Generated Manga Art"
                fill
                style={{objectFit: 'cover'}}
              />
            )}
            {!loading && !generatedImage && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: '#666',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px'
              }}>
                Your generated manga art will appear here
              </div>
            )}
          </div>
        </div>
      </div>

      <h2 className="h2"><span>PRESET PROMPTS</span><small>TEMPLATES</small></h2>
      <div className="strip">
        {presetPrompts.map((presetPrompt, index) => (
          <div key={index} className="cell">
            <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
              <Image
                src={`/mangenlogo${(index % 4) + 1}.png`}
                alt={`Preset ${index + 1}`}
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <h4>Preset {index + 1}</h4>
            <p>{presetPrompt.substring(0, 60)}...</p>
            <button
              onClick={() => setPrompt(presetPrompt)}
              style={{
                background: 'var(--accent)',
                color: 'white',
                border: '2px solid var(--ink)',
                padding: '4px 8px',
                fontSize: '12px',
                fontWeight: '800',
                cursor: 'pointer',
                marginTop: '8px'
              }}
            >
              USE PROMPT
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
