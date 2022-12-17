import Image from 'next/image';
import Head from 'next/head'
import styles from '../styles/Home.module.css';

// native dimensions of profile picture
const pfpHeight_n = 1104;
const pfpWidth_n  = 891;
// define the pixel offsets of profile pic relative to bottom blue border
const pfpOffset_lf = 13; // leftwards
const pfpOffset_up = 95; // upwards

var pfpScale = 0.4;

var profilePicHeight = pfpScale * pfpHeight_n;
var profilePicWidth  = pfpScale * pfpWidth_n;



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gary Zhang:  physicist, linguist, graphic designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={styles.headerDesign}>
          <div
            className={styles.headerTextWrapper}
            style={{width: `calc(100% - ${profilePicWidth}px - ${pfpOffset_lf}px)`}}
          >
            <h1 className={styles.headerText} >Gary Zhang</h1>
            <p>
              A person trying to figure out how the world works, and how people think the world works.
            </p>
          </div>
          <div
            style={{
              height: profilePicHeight - pfpScale * pfpOffset_up,
              width: profilePicWidth + pfpOffset_lf,
              userSelect: "none",
              position: "absolute",
              bottom: 0,
              right: 0
            }}
          >
            <Image src="/profile.png"
              height={profilePicHeight}
              width={profilePicWidth}
              alt="Photograph of Gary Zhang"
              draggable="false"
              priority
            />
          </div>
        </div>
      </header>

      <style jsx>{`
        main {
          padding: 5em 0;
          justify-content: center;
          align-items: center;
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
      {/* delete this later when you create the global.css file */}
      <style jsx global>{`
        html,
        body {
          font-size: 20pt;
          font-weight: 300;
          font-family: "Open Sans";
          margin: 0 8px 0 8px;
        }
      `}</style>
    </div>
  )
}