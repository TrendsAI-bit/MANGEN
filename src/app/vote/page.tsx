import Image from "next/image";

export default function VotePage() {
  return (
    <>
      <h2 className="h2"><span>VOTE</span><small>COMMUNITY BOARD</small></h2>
      
      <div className="panel">
        <div className="caption">COMMUNITY VOTING</div>
        <p className="copy">
          Help decide which manga stories get funded and published. Your vote matters! 
          Staked users get priority voting and early access to new features.
        </p>
      </div>

      <h2 className="h2"><span>CURRENT SUBMISSIONS</span><small>SEASON 1</small></h2>
      <div className="strip">
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo.png" 
              alt="The Last Samurai" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>The Last Samurai</h4>
          <p>A tale of honor and redemption in feudal Japan.</p>
          <div style={{marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{fontSize: '12px', color: '#666'}}>1,234 votes</span>
            <button style={{
              background: 'var(--accent)',
              color: 'white',
              border: '2px solid var(--ink)',
              padding: '4px 8px',
              fontSize: '12px',
              fontWeight: '800',
              cursor: 'pointer'
            }}>
              VOTE
            </button>
          </div>
        </div>
        
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo2.png" 
              alt="Cyberpunk Dreams" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>Cyberpunk Dreams</h4>
          <p>A neon-lit adventure through a dystopian future.</p>
          <div style={{marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{fontSize: '12px', color: '#666'}}>987 votes</span>
            <button style={{
              background: 'var(--accent)',
              color: 'white',
              border: '2px solid var(--ink)',
              padding: '4px 8px',
              fontSize: '12px',
              fontWeight: '800',
              cursor: 'pointer'
            }}>
              VOTE
            </button>
          </div>
        </div>
        
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo3.png" 
              alt="School Days" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>School Days</h4>
          <p>Heartwarming stories from high school life.</p>
          <div style={{marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{fontSize: '12px', color: '#666'}}>756 votes</span>
            <button style={{
              background: 'var(--accent)',
              color: 'white',
              border: '2px solid var(--ink)',
              padding: '4px 8px',
              fontSize: '12px',
              fontWeight: '800',
              cursor: 'pointer'
            }}>
              VOTE
            </button>
          </div>
        </div>
        
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo4.png" 
              alt="Dragon Quest" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>Dragon Quest</h4>
          <p>Epic fantasy adventure with magical creatures.</p>
          <div style={{marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{fontSize: '12px', color: '#666'}}>543 votes</span>
            <button style={{
              background: 'var(--accent)',
              color: 'white',
              border: '2px solid var(--ink)',
              padding: '4px 8px',
              fontSize: '12px',
              fontWeight: '800',
              cursor: 'pointer'
            }}>
              VOTE
            </button>
          </div>
        </div>
      </div>

      <h2 className="h2"><span>STAKING BENEFITS</span><small>PRIORITY ACCESS</small></h2>
      <div className="cols">
        <div className="panel">
          <div className="caption">STAKED USERS</div>
          <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '14px'}}>
            <li>Priority voting on all submissions</li>
            <li>Early access to new features and updates</li>
            <li>Exclusive preview of next season content</li>
            <li>Special staking rewards and bonuses</li>
            <li>Direct input on platform development</li>
          </ul>
        </div>
        <div className="panel">
          <div className="caption">VOTING SYSTEM</div>
          <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '14px'}}>
            <li>Simple one-click voting for all users</li>
            <li>Staked users get 2x voting power</li>
            <li>Voting period: 7 days per season</li>
            <li>Top 3 stories receive funding</li>
            <li>Real-time vote tracking and updates</li>
          </ul>
        </div>
      </div>
    </>
  );
}
