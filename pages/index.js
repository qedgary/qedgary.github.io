import Image from 'next/image';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useState, useEffect} from 'react';

// native dimensions of profile picture
const pfpHeight_n = 1104;
const pfpWidth_n  = 891;
// define the pixel offsets of profile pic relative to bottom blue border
const pfpOffset_lf = 13; // leftwards
const pfpOffset_up = 95; // upwards

var pfpScale = 0.4;

export default function Home() {
  let profilePicHeight = pfpScale * pfpHeight_n;
  let profilePicWidth  = pfpScale * pfpWidth_n;

  // Use JS to create responsive UI for small screens
  const viewportDim = getWindowSize();
  if (viewportDim.width < 750){
    profilePicWidth = 0;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Gary Zhang • physicist, linguist, graphic designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.headerDesign}>
        <header>
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
            className={styles.profilePhotoWrapper}
            style={{
              height: profilePicHeight - pfpScale * pfpOffset_up,
              width: profilePicWidth + pfpOffset_lf
            }}
          >
            <Image  
              src="/profile.png"
              height={profilePicHeight}
              width={profilePicWidth}
              alt="Photograph of Gary Zhang"
              draggable="false"
              priority
            />
          </div>
        </header>
      </div>
    </div>
  )
}


function getWindowSize() {
  // copied from StackOverflow user Darryl RN - CC BY-SA 4.0
  // https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}