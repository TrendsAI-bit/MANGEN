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
              background: 'var(--accent)',
              color: 'white',
              border: '3px solid var(--ink)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            {loading ? "GENERATING..." : "GENERATE MANGA ART"}
          </button>
        </div>
        
        <div className="panel">
          <div className="caption">PREVIEW</div>
          <div className="img-placeholder" style={{height: '300px'}}>
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
          </div>
        </div>
      </div>

      <h2 className="h2"><span>PRESET PROMPTS</span><small>TEMPLATES</small></h2>
      <div className="strip">
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>Splash</h4>
          <p>Professional splash screen with bold logo and dramatic energy.</p>
        </div>
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>Dashboard</h4>
          <p>Clean manga-themed dashboard with panels and speedlines.</p>
        </div>
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>Creator</h4>
          <p>Futuristic manga creation tool interface.</p>
        </div>
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>Vote</h4>
          <p>Manga-inspired voting page with story previews.</p>
        </div>
      </div>
    </>
  );
}
