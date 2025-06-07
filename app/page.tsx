// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">🚀 Intern Screening Test</h1>
      <ul className="list-disc pl-6 space-y-3 text-blue-700 underline">
        <li>
          <Link href="/part1">Part 1: Todo API</Link>
        </li>
        <li>
          <Link href="/part2">Part 2: Notesync Integration</Link>
        </li>
        <li>
          <Link href="/part3">Part 3: AI Chat</Link>
        </li>
      </ul>
    </main>
  );
}
