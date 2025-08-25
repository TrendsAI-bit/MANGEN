"use client";

export default function ProfilePage() {
  return (
    <>
      <h2 className="h2"><span>PROFILE</span><small>CREATOR</small></h2>
      
      <div className="hero">
        <div className="panel">
          <div className="caption">CREATOR INFO</div>
          <div style={{textAlign: 'center', marginBottom: '16px'}}>
            <div style={{
              width: '80px',
              height: '80px',
              background: '#eee8dc',
              borderRadius: '50%',
              margin: '0 auto 12px',
              border: '3px solid var(--ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              👤
            </div>
            <h3 style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '24px',
              margin: '0 0 4px 0',
              letterSpacing: '.06em'
            }}>
              MangaCreator
            </h3>
            <p style={{margin: 0, fontSize: '14px', color: '#666'}}>Passionate manga artist</p>
          </div>
          
          <div style={{display: 'grid', gap: '8px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span style={{fontSize: '14px', color: '#666'}}>Stories Created:</span>
              <span style={{fontWeight: '800', color: 'var(--accent)'}}>12</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span style={{fontSize: '14px', color: '#666'}}>Total Votes:</span>
              <span style={{fontWeight: '800', color: 'var(--accent)'}}>2,847</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span style={{fontSize: '14px', color: '#666'}}>Grants Won:</span>
              <span style={{fontWeight: '800', color: 'var(--gold)'}}>1</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span style={{fontSize: '14px', color: '#666'}}>Member Since:</span>
              <span style={{fontWeight: '800'}}>2024</span>
            </div>
          </div>
        </div>
        
        <div className="panel">
          <div className="caption">RECENT ACTIVITY</div>
          <div style={{fontSize: '14px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
              <span style={{color: 'var(--accent)', fontWeight: '800'}}>⚡</span>
              <span>Submitted &ldquo;The Last Samurai&rdquo;</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
              <span style={{color: 'var(--accent)', fontWeight: '800'}}>❤️</span>
              <span>Received 156 votes</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
              <span style={{color: 'var(--gold)', fontWeight: '800'}}>🏆</span>
              <span>Won 10 SOL grant</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: 'var(--accent)', fontWeight: '800'}}>📖</span>
              <span>Published &ldquo;Cyberpunk Dreams&rdquo;</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="h2"><span>MY SUBMISSIONS</span><small>PORTFOLIO</small></h2>
      <div className="strip">
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>The Last Samurai</h4>
          <p>Published</p>
        </div>
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>Cyberpunk Dreams</h4>
          <p>Published</p>
        </div>
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>School Days</h4>
          <p>In Progress</p>
        </div>
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>Dragon Quest</h4>
          <p>Planning</p>
        </div>
      </div>

      <h2 className="h2"><span>PUBLISHED WORKS</span><small>ORIGINALS</small></h2>
      <div className="cols">
        <div className="panel">
          <div className="caption">THE LAST SAMURAI</div>
          <p style={{fontSize: '14px', margin: '8px 0'}}>
            A tale of honor and redemption in feudal Japan. This story captured the community&apos;s imagination 
            and earned the backing to become a full manga series.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '12px'
          }}>
            <span style={{
              fontSize: '12px',
              color: 'var(--gold)',
              fontWeight: '800',
              border: '2px solid var(--gold)',
              padding: '2px 6px'
            }}>
              10 SOL GRANT
            </span>
            <span style={{fontSize: '12px', color: '#666'}}>Published 2024</span>
          </div>
        </div>
        
        <div className="panel">
          <div className="caption">CYBERPUNK DREAMS</div>
          <p style={{fontSize: '14px', margin: '8px 0'}}>
            A neon-lit adventure through a dystopian future. This cyberpunk story explores themes of 
            technology, humanity, and the price of progress.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '12px'
          }}>
            <span style={{
              fontSize: '12px',
              color: 'var(--gold)',
              fontWeight: '800',
              border: '2px solid var(--gold)',
              padding: '2px 6px'
            }}>
              10 SOL GRANT
            </span>
            <span style={{fontSize: '12px', color: '#666'}}>Published 2024</span>
          </div>
        </div>
      </div>

      <h2 className="h2"><span>ACHIEVEMENTS</span><small>BADGES</small></h2>
      <div className="panel">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px'}}>
          <div style={{
            border: '3px solid var(--ink)',
            padding: '8px',
            background: '#f0ebde',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '24px', marginBottom: '4px'}}>🏆</div>
            <div style={{fontWeight: '800', fontSize: '12px'}}>GRANT WINNER</div>
          </div>
          <div style={{
            border: '3px solid var(--ink)',
            padding: '8px',
            background: '#f0ebde',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '24px', marginBottom: '4px'}}>📖</div>
            <div style={{fontWeight: '800', fontSize: '12px'}}>PUBLISHED AUTHOR</div>
          </div>
          <div style={{
            border: '3px solid var(--ink)',
            padding: '8px',
            background: '#f0ebde',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '24px', marginBottom: '4px'}}>⚡</div>
            <div style={{fontWeight: '800', fontSize: '12px'}}>TOP CREATOR</div>
          </div>
        </div>
      </div>
    </>
  );
}
