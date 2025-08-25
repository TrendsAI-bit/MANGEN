import Image from "next/image";

export default function VotePage() {
  return (
    <>
      <h2 className="h2"><span>VOTE</span><small>COMMUNITY BOARD</small></h2>
      
      <div className="panel">
        <div className="caption">COMMUNITY VOTING</div>
        <p className="copy">
          Help decide which manga stories get funded and published. Your vote matters! 
          The community uses $MANGEN tokens to vote on submissions and determine the next winners.
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
              src="/mangenlogo.png" 
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

      <h2 className="h2"><span>VOTING RULES</span><small>GUIDELINES</small></h2>
      <div className="cols">
        <div className="panel">
          <div className="caption">HOW TO VOTE</div>
          <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '14px'}}>
            <li>Stake $MANGEN tokens to earn voting power</li>
            <li>Each token gives you 1 vote per submission</li>
            <li>You can vote multiple times on the same story</li>
            <li>Voting period lasts 7 days per season</li>
            <li>Top 3 stories receive funding</li>
          </ul>
        </div>
        <div className="panel">
          <div className="caption">VOTING POWER</div>
          <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '14px'}}>
            <li>1 $MANGEN = 1 vote</li>
            <li>10 $MANGEN = 10 votes</li>
            <li>100 $MANGEN = 100 votes</li>
            <li>Stake more, vote more</li>
            <li>Unstake anytime after voting</li>
          </ul>
        </div>
      </div>
    </>
  );
}
