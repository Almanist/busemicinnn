const messages = [
    "Seni çok seviyorum 💖",
    "Sen benim her şeyimsin 🌸",
    "Buse + Ben = Sonsuz Aşk 💑",
    "Kalbim sadece sana ait ❤️",
    "Hayatımın anlamı sensin 🌹"
  ];
  
  let index = 0;
  
  setInterval(() => {
    const el = document.getElementById("loveMessage");
    index = (index + 1) % messages.length;
    el.textContent = messages[index];
  }, 4000);
  
  function showSurprise() {
    for (let i = 0; i < 30; i++) {
      createHeart();
    }
    alert("Sonsuza kadar seninle olmak istiyorum Buse 💘");
  }
  
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.getElementById("heartsContainer").appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  // 💌 Aşk Mektubu Fonksiyonu
  function showLetter() {
    const display = document.getElementById("letterDisplay");
    const poem = `
      <h3>"Gözlerinde Bahar"</h3>
      <p>Bir bakışın yetti, dünya durdu,<br>
      Kalbim sende bir ömür konak kurdu.<br>
      Sessiz geceler fısıldar adını,<br>
      Rüzgâr bile taşır kalbimin yanığını.</p>
  
      <p>Bir gülüşünle aydınlanır sabah,<br>
      Sensiz geçen her an biraz daha siyah.<br>
      Kelimeler yetersiz, cümleler suskun,<br>
      Sana anlatmaya yetmez hiçbir dize, hiçbir uyum.</p>
  
      <p>Ellerin ellerime değse bir an,<br>
      Zaman donar, düşer yıldızlar her yandan.<br>
      Seninle her şey başka, her şey güzel,<br>
      Aşk seninle başlar, seninle biter ezelden.</p>
    `;
    display.innerHTML = poem;
    display.classList.remove("hidden");
  }
  