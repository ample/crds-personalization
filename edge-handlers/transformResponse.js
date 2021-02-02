const parse = require('node-html-parser').parse;

export function onRequest(event) {
  event.replaceResponse(async () => {
    const originResponse = await fetch(event.request.url);
    // const transformation = new TransformStream({
    //   flush(controller) {
    //     const encoder = new TextEncoder();
    //     const buf = encoder.encode(
    //       "<p>Served from a Netlify Edge Handler</p>");
    //     controller.enqueue(buf);
    //   },
    // });
	
    // const transformedBody = originResponse.body.pipeThrough(transformation);
 
    const root = parse(originResponse.body);
    const body = root.querySelector('body');
    console.log(body)

    const transformedBody = `<p>${event.request.url}</p>`;
    const headers = {
      'Content-Type': 'text/html'
    };

    return new Response(transformedBody, {
      headers
    });
  });
}