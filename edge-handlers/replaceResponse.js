export function onRequest(event) {
  const url = new URL(event.request.url)
  event.replaceResponse(() => fetch(`https://www.crossroads.net${url.pathname}`));
}