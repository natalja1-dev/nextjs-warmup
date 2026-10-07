# Next.js Warmup

A simple Next.js practice project with multiple pages, a client-side counter, and a server API endpoint.

## What I Learned

1. **What does Next.js provide beyond React alone?**  
   Next.js adds features such as routing, server-side code, API endpoints, and project structure on top of React.

2. **Why does the counter need `'use client'`?**  
   The counter uses `useState` and responds to button clicks, so it needs to run in the browser as a Client Component.

3. **Where does the code in `app/api/message/route.js` run?**  
   It runs on the server, not in the user's browser.

4. **How is this endpoint similar to an Express route?**  
   Both receive HTTP requests and return responses, but Next.js uses Route Handlers instead of a separate Express server.

5. **Why must secrets remain on the server?**  
   Secrets such as API keys should stay on the server so they are not exposed to users in browser code.
