const parse = require('node-html-parser').parse;

export function onRequest(event) {
  event.replaceResponse(async () => {
    const originResponse = await fetch(event.request);

    const headers = {
      'Content-Type': 'text/html'
    };
    const root = parse(originResponse);
    const body = root.querySelector('body');

    return new Response('<html><body>This.</body></html>', {
      headers
    });
  });
}