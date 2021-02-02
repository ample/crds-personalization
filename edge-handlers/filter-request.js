// Log every incoming request URL
export function onRequest(event) {
  console.log(`${JSON.stringify(event.request)}`);
}