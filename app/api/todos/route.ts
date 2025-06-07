import { NextResponse } from "next/server";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// Use const here, since todos is not reassigned
const todos: Todo[] = [
  { id: 1, title: "Learn Next.js", completed: false },
  { id: 2, title: "Build an app", completed: false },
  { id: 3, title: "Deploy to Vercel", completed: false },
];

export async function GET() {
  return NextResponse.json(todos);
}
