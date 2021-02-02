export function onRequest(event) {
  event.replaceResponse(() => fetch("https://www.crossroads.net/"));
}