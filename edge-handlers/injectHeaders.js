export function onRequest(event) {
  event.replaceResponse(() => fetch("https://api.github.com/emojis", {
    headers: { "User-Agent": "Netlify" }
  }));
}