// packages/integrations/notion/notesync/notesync.schema.ts
import { z } from 'zod';

export const listNotesInputSchema = z.object({
  maxResults: z.number().min(1).max(50).optional(),
  query: z.string().optional(),
});

export type ListNotesInput = z.infer<typeof listNotesInputSchema>;
