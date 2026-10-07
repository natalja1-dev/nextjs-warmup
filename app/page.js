import Link from "next/link";
import Counter from "./components/Counter";
import ServerMessage from "./components/ServerMessage";

export default function Home() {
  return (
    <main>
      <h1>Welcome</h1>

      <p>This is my Next.js warm-up project.</p>

      <Link href="/about">About me</Link>

      <h2>Counter</h2>
      <Counter />

      <h2>Server Message</h2>
      <ServerMessage />
    </main>
  );
}
