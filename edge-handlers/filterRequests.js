export function onRequest(event) {
  console.log(`Incoming request for ${event.request.url}`);
  // event.replaceResponse(() => fetch("https://www.netlify.com/"));
}