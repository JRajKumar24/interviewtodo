'use client';

import { useEffect, useState } from 'react';
import { listNotes } from '@/packages/integrations/notion/notesync/notesync.functions';

type Note = {
  id: string;
  title: string;
  content: string;
};

export default function Part2Page() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    listNotes({ maxResults: 2 }).then(setNotes);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">📚 Notesync Mock</h1>
      <ul className="list-disc pl-6">
        {notes.map(note => (
          <li key={note.id}>
            <strong>{note.title}</strong>: {note.content}
          </li>
        ))}
      </ul>
    </main>
  );
}
