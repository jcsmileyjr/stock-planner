import type { Context } from "@netlify/functions";

export default (_req: Request, _context: Context) => {
  console.log("Logging is here")
  return new Response("Hello, world!");
};