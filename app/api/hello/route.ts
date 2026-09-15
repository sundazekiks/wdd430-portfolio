// import { sql } from "@/lib/psql/sql";

export async function GET() {
    // const data = await sql`SELECT * FROM portfolio.projects` // testing out the neon module
    return Response.json({ message: 'Hello from Next.js API!' });
}