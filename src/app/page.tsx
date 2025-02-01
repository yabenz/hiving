import Image from "next/image";

export default function Home() {
  return (

    <header className="header">
      <div className="page-container">
        <span>Hiving</span>
        <nav className="flex">
          <ul>
            <li>Trend Prediction</li>
            <li>Content Gap</li>
            <li>About</li>
          </ul>
        </nav>
        </div>
    </header>
  );
}
