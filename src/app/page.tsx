import Image from "next/image";

import Trending from "./components/Trending"
import RisingStars from "./components/RisingStars"

export default function Home() {
  return (

    <>
      <header className="header">
        <div className="flex justify-between items-center max-w-[var(--maxPage)] w-full p-7">
          <span className="text-lg">Hiving</span>
          <nav >
            <ul className="flex gap-4">
              <div id='shine-text'>Trend Prediction</div>
              <li id='shine-text'>Content Gap</li>
              <li id='shine-text'>KW Tool</li>
              <li id='shine-text'>About</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="body">
        <div className="flex justify-between items-start max-w-[var(--maxPage)] w-full">
          <Trending />
          <RisingStars />
        </div>
      </div>
    </>
  );
}
