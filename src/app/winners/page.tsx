export default function WinnersPage() {
  return (
    <>
      <h2 className="h2"><span>WINNERS</span><small>GALLERY</small></h2>
      
      <div className="panel">
        <div className="caption">SEASON WINNERS</div>
        <p className="copy">
          Meet the creators who received funding and got their manga published. These are the stories that captured 
          the community&apos;s imagination and earned the backing to become reality.
        </p>
      </div>

      <h2 className="h2"><span>FUNDED CREATORS</span><small>SEASON 1</small></h2>
      <div className="strip">
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>The Last Samurai</h4>
          <p>by MangaMaster</p>
          <div style={{marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{
              fontSize: '12px',
              color: 'var(--gold)',
              fontWeight: '800',
              border: '2px solid var(--gold)',
              padding: '2px 6px'
            }}>
              10 SOL GRANT
            </span>
            <span style={{fontSize: '12px', color: '#666'}}>Published</span>
          </div>
        </div>
        
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>Cyberpunk Dreams</h4>
          <p>by PixelArtist</p>
          <div style={{marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{
              fontSize: '12px',
              color: 'var(--gold)',
              fontWeight: '800',
              border: '2px solid var(--gold)',
              padding: '2px 6px'
            }}>
              10 SOL GRANT
            </span>
            <span style={{fontSize: '12px', color: '#666'}}>Coming Soon</span>
          </div>
        </div>
        
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>School Days</h4>
          <p>by SliceOfLife</p>
          <div style={{marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{
              fontSize: '12px',
              color: 'var(--gold)',
              fontWeight: '800',
              border: '2px solid var(--gold)',
              padding: '2px 6px'
            }}>
              10 SOL GRANT
            </span>
            <span style={{fontSize: '12px', color: '#666'}}>In Production</span>
          </div>
        </div>
        
        <div className="cell">
          <div className="thumb" aria-hidden="true"></div>
          <h4>Dragon Quest</h4>
          <p>by FantasyFan</p>
          <div style={{marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{
              fontSize: '12px',
              color: 'var(--gold)',
              fontWeight: '800',
              border: '2px solid var(--gold)',
              padding: '2px 6px'
            }}>
              10 SOL GRANT
            </span>
            <span style={{fontSize: '12px', color: '#666'}}>Planning</span>
          </div>
        </div>
      </div>

      <h2 className="h2"><span>PUBLISHING PROCESS</span><small>JOURNEY</small></h2>
      <div className="cols">
        <div className="panel">
          <div className="caption">FUNDING PHASE</div>
          <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '14px'}}>
            <li>Winners receive 10 SOL grant</li>
            <li>Funds held in escrow for project completion</li>
            <li>Creator submits project timeline</li>
            <li>Community approves milestones</li>
            <li>Regular progress updates required</li>
          </ul>
        </div>
        <div className="panel">
          <div className="caption">PUBLICATION</div>
          <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '14px'}}>
            <li>Manga Generations Originals imprint</li>
            <li>Digital and print distribution</li>
            <li>Creator retains 70% of royalties</li>
            <li>Community gets 20% for treasury</li>
            <li>10% for platform development</li>
          </ul>
        </div>
      </div>

      <h2 className="h2"><span>NEXT SEASON</span><small>COMING SOON</small></h2>
      <div className="panel">
        <div className="caption">SEASON 2 PREVIEW</div>
        <p className="copy">
          The next funding round begins in 30 days. Submit your manga and get the community to vote! 
          This season we&apos;re looking for stories that push boundaries and capture the spirit of innovation.
        </p>
        <div style={{
          marginTop: '12px',
          border: '3px solid var(--ink)',
          padding: '10px',
          background: '#f0ebde',
          textAlign: 'center'
        }}>
          <div className="kicker">DEADLINE</div>
          <div className="display" style={{fontSize: '24px'}}>30 DAYS</div>
        </div>
      </div>
    </>
  );
}
