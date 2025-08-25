import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="panel">
          <div className="caption">MANGA GENERATIONS</div>
          <div className="display big"><span className="accent">MANGEN</span> CLUB</div>
          <p className="copy">
            Manga Generations is a memecoin and creative movement that turns manga fans into manga creators. With $MANGEN,
            anyone can generate manga artwork, publish their stories, and compete to bring their manga dreams to life.
          </p>
          <div style={{height: '300px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo2.png" 
              alt="Manga Art" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
        <div className="panel">
          <div className="caption">EDITORIAL</div>
          <p className="copy">
            The best stories win real backing. Every season, the community votes and winners receive 10 SOL to fund their
            manga art journey—from sketches to full publications. It is part memecoin, part manga studio DAO, powered by the people.
          </p>
          <div style={{marginTop: '12px', border: '3px solid var(--ink)', padding: '10px', background: '#f0ebde'}}>
            <div className="kicker">TAGLINE</div>
            <div className="display" style={{fontSize: '36px'}}>Fuel the Manga Generation.</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <h2 className="h2"><span>HOW IT WORKS</span><small>SEASONAL FLOW</small></h2>
      <div className="strip">
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo3.png" 
              alt="Generate" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>Generate</h4>
          <p>Users create AI-assisted manga panels or submit original art and stories.</p>
        </div>
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo.png" 
              alt="Vote" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>Vote</h4>
          <p>The community votes using $MANGEN for staking and voting power.</p>
        </div>
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo2.png" 
              alt="Fund" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>Fund</h4>
          <p>Top creators receive 10 SOL grants to pursue real manga projects.</p>
        </div>
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo3.png" 
              alt="Publish" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>Publish</h4>
          <p>Winners become Manga Generations Originals—minted and shared globally.</p>
        </div>
      </div>

      {/* Utilities and Identity */}
      <h2 className="h2"><span>UTILITIES AND IDENTITY</span><small>PLATFORM</small></h2>
      <div className="cols">
        <div className="panel">
          <div className="caption">UTILITIES OF $MANGEN</div>
          <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '14px'}}>
            <li>Manga-to-Earn: earn tokens for submissions, upvotes, community involvement.</li>
            <li>Creator Grants: seasonal funding (10 SOL) for winners, treasury-backed.</li>
            <li>Publishing Power: mint manga issues, unlock zines, vote on storylines.</li>
            <li>Community Canon: DAO decides what becomes part of the universe.</li>
            <li>Collectibles: limited panels and arcs with resale royalties to creators.</li>
          </ul>
        </div>
        <div className="panel">
          <div className="caption">BRAND IDENTITY</div>
          <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '14px'}}>
            <li>Name: Manga Generations — Ticker: $MANGEN</li>
            <li>Logo: clean, bold, lightning/ink themes</li>
            <li>Visuals: manga panels, shōnen action lines, halftone textures</li>
            <li>Palette: red, blue, yellow with manga black & paper</li>
            <li>Type: heavy, manga-title fonts with impact</li>
          </ul>
        </div>
      </div>

      {/* Narrative hooks */}
      <h2 className="h2"><span>NARRATIVE HOOKS</span><small>VOICE</small></h2>
      <div className="panel">
        <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '14px'}}>
          <li>From fans to mangaka — everyone gets a chance.</li>
          <li>One panel could change your life.</li>
          <li>$MANGEN is ink, and the world is your page.</li>
          <li>The first memecoin that funds creators instead of dumping on them.</li>
          <li>Every SOL is a story waiting to be told.</li>
        </ul>
      </div>

      {/* Community Stats */}
      <h2 className="h2"><span>COMMUNITY STATS</span><small>NUMBERS</small></h2>
      <div className="strip">
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo.png" 
              alt="Stories Created" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>1,234</h4>
          <p>Stories Created</p>
        </div>
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo2.png" 
              alt="Community Votes" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>56,789</h4>
          <p>Community Votes</p>
        </div>
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo3.png" 
              alt="Creators Funded" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>42</h4>
          <p>Creators Funded</p>
        </div>
        <div className="cell">
          <div style={{height: '120px', border: '3px solid var(--ink)', position: 'relative', overflow: 'hidden'}}>
            <Image 
              src="/mangenlogo.png" 
              alt="SOL Distributed" 
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          <h4>420</h4>
          <p>SOL Distributed</p>
        </div>
      </div>
    </>
  );
}
