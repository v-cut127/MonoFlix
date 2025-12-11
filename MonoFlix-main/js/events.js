const events = [
  {
    id: 1,
    image: "/images/birthday.png",
    title: "Celebrate Your Birthday at MonoFlix",
    date: "25.07.2025 — 31.12.2025",
    description: `✨ Surprise your little one with a magical birthday at MonoFlix! ✨

Turn their special day into an unforgettable movie experience together with friends!

👉 Choose a package for the group and enjoy:

🎟️ Package 1 – 5.80€
• Drink 0.4L
• Small Popcorn
• Chocolate
• 2D Movie Ticket

🎟️ Package 2 – 6.80€
• Drink 0.5L
• Medium Popcorn
• Chocolate
• 2D Movie Ticket

🎁 What you get:

The birthday child's package is FREE
Free use of the birthday room to celebrate with friends
Fun karaoke inside the birthday room – free
Welcome popcorn – free
Celebrate like a VIP in the LUXX hall with comfortable and luxurious seats
Birthday invitations – free

📍 MonoFlix Prishtina – ALBI Mall
📲 Book now by calling +383 44 123 123 and make sure your child's most special day becomes an unforgettable memory.

🎂 MonoFlix – Celebrate with us!`
  },
  {
    id: 2,
    title: "Free Parking",
    image: "/images/parking.png",
    date: "27.03.2024 — 31.12.2025",
    description: `Watch a movie at Cineplexx and park your car for FREE.

For every movie ticket, you get 3 hours of free parking inside Albi Mall.

To receive this service, bring your Parking Cards to our cash desks.`
  },
  {
    id: 3,
    title: "Experience IMAX",
    date: "17.12.2025 — 08.01.2026",
    description: `Experience movies in IMAX like never before. A massive floor-to-ceiling screen, crystal-clear image, and powerful immersive sound pull you straight into the story.

Every scene is brighter, sharper, and more detailed. Every explosion hits harder. Every moment feels bigger.

IMAX isn’t just watching a movie — it’s living it.`
  },
  {
    id: 4,
    title: "Buy Tickets Online",
    date: "",
    description: `Buy your tickets online by downloading the new MonoFlix app.

Download on iOS  
Download on Android  

Note: The app only works in the Kosovo and Albania stores.`
  },
  {
    id: 5,
    title: "Student Day",
    date: "01.01.2024 — 31.12.2025",
    image: "/images/studentday.png",
    description: `Student Day every Monday with a super deal! 🔥

Get a 2D movie ticket,  
a drink, and  
a popcorn for only €5.

Bring your friends and watch one of the most popular movies right now.

All you need is your student ID!`
  },
  {
    id: 6,
    title: "Cinema Day — Every Tuesday",
    date: "03.12.2024 — 31.12.2025",
    image: "/images/every_tuesday.png",
    description: `Follow your favorite movies at special prices.

Cinema visitors every Tuesday can buy tickets for their favorite movies at reduced prices.

In Cineplexx Prishtina starting from:  
• 2D movies from €3.20  
• 3D movies from €4.30  
• 2D IMAX movies only €6  
• 3D IMAX movies only €8  

In Cineplexx Prizren starting from:  
• 2D movies from €2.80  
• 3D movies from €3.90`
  },
  {
    id: 7,
    title: "Kids Special – Fun at the Cinema",
    date: "20.03.2025 — 31.12.2025",
    description: `The best time with kids is spent at the cinema!

Cineplexx Prishtina offers special prices for children up to 14 years old:  
• 2D movies only €2.80  
• 3D movies only €3.90  

Cineplexx Prizren offers special prices for children up to 14 years old:  
• 2D movies only €2.50  
• 3D movies only €3.60  

Prices are valid for every day and every movie.  

Parents, bring your children and create beautiful memories at our cinema!`
  },
  {
    id: 8,
    title: "LUXX HALL",
    date: "23.07.2025 — 31.12.2025",
    image: "/images/luxx.png",
    description: `A cinematic experience with the comfort of home!

LUXX Hall brings you home-like comfort combined with the true emotions of the cinema!`
  },
  {
    id: 9,
    title: "SUPER SAVER",
    date: "03.08.2025 — 31.12.2025",
    description: `Don't miss out, this offer comes only once a month!

Enjoy our Super Saver deal for the upcoming month. -> 07.12.2025`
  },
  {
    id: 10,
    title: "November/December at MonoFlix",
    date: "01.11.2025 — 31.12.2025",
    image: "/images/novemberdecember1.png",
    description: `This month comes with a variety of premieres – all you have to do is pick your favorite genre!

06 November: Premiere of the movie "Predator: Badlands" 
🎈 Activities and rewards guaranteed for the whole family!

12 November: Premiere of the movie "The Running Man" 🏃‍♂️  
🎉 Action Week with fantastic rewards! Powered by Garda Security

26 November: Premiere of the movie "Zootopia 2" 🦁
🌟 Besties Night – any reward your friend wins with you, you get too!

19 December: Premiere of the movie "Avatar: Fire and Ash" ⚔️  
🎁 With amazing rewards!`
  }
,
{
  id: 11,
  title: "Cinema Day — Every Sunday",
  date: "03.12.2024 — 31.12.2025",
  image: "/images/sunday.png",
  description: `Follow your favorite movies at special prices.

Cinema visitors every Sunday can buy tickets for their favorite movies at reduced prices.

In Cineplexx Prishtina starting from:  
• 2D movies from €3.20  
• 3D movies from €4.30  
• 2D IMAX movies only €6  
• 3D IMAX movies only €8  

In Cineplexx Prizren starting from:  
• 2D movies from €2.80  
• 3D movies from €3.90`
}];


document.addEventListener("DOMContentLoaded", () => {
  const eventsList = document.getElementById("events-list");

  if (eventsList) {
    events.forEach(event => {
      const li = document.createElement("li");
      li.classList.add("event-item");

      li.innerHTML = `
        <a href="/assets/events-details.html?id=${event.id}">
          <article class="event-card">
            ${event.image ? `<img src="${event.image}" alt="${event.title}" class="event-image">` : ""}
            <div class="event-content">
              <h3 class="event-title">${event.title}</h3>
              ${event.date ? `<p class="event-date"><ion-icon name="calendar-outline"></ion-icon> ${event.date}</p>` : ""}
            </div>
          </article>
        </a>
      `;

      eventsList.appendChild(li);
    });
  }
});
