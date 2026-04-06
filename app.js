const groups = {
  humanSongs: [
    { id: "5juW2iTyH4E", title: "Joseph Haydn Song 1" },
    { id: "PL0EaREvDgM", title: "Joseph Haydn Song 2" },
    { id: "eS0EeWYBiaM", title: "Joseph Haydn Song 3" },
  ],
  globalSongs: [
    { id: "4Ryed6hz4_I", title: "Global Model Song 1" },
    { id: "TpCTrlirE_0", title: "Global Model Song 2" },
    { id: "MpdhV689Tfo", title: "Global Model Song 3" },
  ],
  localSongs: [
    { id: "TQWUqjhTIPI", title: "Multi Local Modelings Song 1" },
    { id: "HmEoNCWECQo", title: "Multi Local Modelings Song 2" },
    { id: "LNbosCjkN_c", title: "Multi Local Modelings Song 3" },
  ],
};

function createVideoCard(video) {
  const card = document.createElement("article");
  card.className = "video-card";

  const iframe = document.createElement("iframe");
  iframe.className = "video-frame";
  iframe.src = `https://www.youtube.com/embed/${video.id}?rel=0&controls=1&modestbranding=1&playsinline=1`;
  iframe.title = video.title;
  iframe.loading = "lazy";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  const meta = document.createElement("div");
  meta.className = "video-meta";

  const title = document.createElement("p");
  title.className = "video-title";
  title.textContent = video.title;

  const note = document.createElement("p");
  note.className = "video-note";
  note.textContent = "Play directly on this page";

  meta.append(title, note);
  card.append(iframe, meta);

  return card;
}

function mountGroup(containerId, videos) {
  const container = document.getElementById(containerId);
  if (!container) return;

  videos.forEach((video) => {
    container.appendChild(createVideoCard(video));
  });
}

function init() {
  Object.entries(groups).forEach(([containerId, videos]) => {
    mountGroup(containerId, videos);
  });
}

document.addEventListener("DOMContentLoaded", init);
