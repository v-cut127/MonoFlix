const modal = document.getElementById("paymentModal");
const btn = document.getElementById("joinClubBtn");
const close = document.getElementById("closeModal");
const form = document.getElementById("paymentForm");
const msg = document.getElementById("paymentMsg");

btn.onclick = () => modal.style.display = "block";
close.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target===modal) modal.style.display = "none"; }

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    email: document.getElementById("email").value,
    card: document.getElementById("cardNumber").value,
    cvv: document.getElementById("cvv").value,
    exp: document.getElementById("exp").value
  };

  if(data.card==="1234123412341234" && data.cvv==="234" && data.exp==="12/33"){
    msg.textContent = "Payment successful! Downloading your club card...";
    
    const link = document.createElement("a");
    link.href = "/images/club-card.png"; 
    link.download = `${data.name}_${data.surname}_MonoFlix_ClubCard.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    form.reset();
    setTimeout(()=>modal.style.display="none", 1000);
  } else {
    msg.textContent = "Card declined. Use test card 1234123412341234 CVV 234 Exp 12/33.";
  }
});
