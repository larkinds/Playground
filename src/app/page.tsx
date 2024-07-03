import Image from 'next/image';
import Link from 'next/link';
import Play from './Play/page';

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 style={{textAlign: "center", margin: "10px", fontSize: "24px"}}>Playground</h1>
      <Play />
    </main>
  );
}
