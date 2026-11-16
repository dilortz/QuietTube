const form = document.querySelector("#video-form");
const input = document.querySelector("#video-url");
const message = document.querySelector("#message");
const section = document.querySelector("#player-section");
const player = document.querySelector("#player");
const clearButton = document.querySelector("#clear-button");
const openYoutube = document.querySelector("#open-youtube");

function getVideoId(raw) {
  let url;
  try { url = new URL(raw.trim()); } catch { return null; }

  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  if (host === "youtu.be") {
    return url.pathname.split("/").filter(Boolean)[0] || null;
  }

  if (!["youtube.com", "m.youtube.com", "music.youtube.com", "youtube-nocookie.com"].includes(host)) {
    return null;
  }

  if (url.pathname === "/watch") return url.searchParams.get("v");
  const parts = url.pathname.split("/").filter(Boolean);
  if (["embed", "shorts", "live"].includes(parts[0])) return parts[1] || null;
  return null;
}

function showMessage(text, isError = false) {
  message.textContent = text;
  message.style.color = isError ? "#ff9d9d" : "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = getVideoId(input.value);

  // YouTube video IDs contain 11 URL-safe characters.
  if (!id || !/^[A-Za-z0-9_-]{11}$/.test(id)) {
    showMessage("That link doesn't look like a valid YouTube video link. Try a youtube.com or youtu.be link.", true);
    return;
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1`;
  player.src = embedUrl;
  openYoutube.href = `https://www.youtube.com/watch?v=${id}`;
  section.hidden = false;
  showMessage("Video loaded. Enjoy your focused viewing.");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
});

function clearVideo() {
  player.src = "";
  section.hidden = true;
  input.value = "";
  showMessage("Player cleared. Paste another YouTube link when needed.");
  input.focus();
}

clearButton.addEventListener("click", clearVideo);

// Register the service worker when hosted over HTTPS (for example, GitHub Pages).
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
