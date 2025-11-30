const params = new URLSearchParams(window.location.search);
const eventId = parseInt(params.get("id"));

const event = events.find(e => e.id === eventId);

if (event) {
  const titleEl = document.querySelector(".detail-title");
  if (titleEl) titleEl.textContent = event.title;

  const dateTimeEl = document.querySelector(".date-time time[datetime]");
  if (dateTimeEl) {
    dateTimeEl.textContent = event.date || "";
    dateTimeEl.setAttribute("datetime", event.date || "");
  }

  const storylineEl = document.querySelector(".event-storyline");
  if (storylineEl) {
    storylineEl.innerHTML = event.description.replace(/\n/g, "<br>");
  }

  const posterImg = document.querySelector(".event-detail-banner img");
  if (posterImg) {
    posterImg.src = event.image || "/images/default-event.png"; 
    posterImg.alt = event.title + " poster";
  }

  const eventSection = document.querySelector(".event-detail");
  if (eventSection && event.image) {
    eventSection.style.background = `
      linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,1)),
      url("${event.image}") no-repeat center/cover
    `;
    eventSection.style.backgroundSize = "cover";
    eventSection.style.backgroundPosition = "center";
  }
}
