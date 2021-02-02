// Log every incoming request URL
export function onRequest(event) {
  console.log(`${event.request}`);
}