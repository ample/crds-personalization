export function onRequest(event) {
  event.replaceResponse(async () => {
    const originResponse = await fetch(event.request);
    const headers = {
      'Content-Type': 'text/html',
      'x-something': 'this is a test'
    };
    return new Response(originResponse.body, {
      headers
    });
  });
}