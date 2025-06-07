// packages/integrations/notion/notesync/notesync.functions.ts
export async function listNotes({ maxResults = 5, query = '' }: { maxResults?: number; query?: string }) {
  // Mocked notes
  return [
    { id: '1', title: 'Mock Note A', content: 'This is mock note A' },
    { id: '2', title: 'Mock Note B', content: 'This is mock note B' },
  ].slice(0, maxResults);
}
