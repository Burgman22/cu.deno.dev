// redirect.ts

const redirectUrl = "https://smson.online/h58g2";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
