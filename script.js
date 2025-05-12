document.getElementById("createRoom").addEventListener("click", () => {
  document.getElementById("start").style.display = "none";
  document.getElementById("teamSetup").style.display = "block";
});

document.getElementById("joinRoom").addEventListener("click", () => {
  const roomCode = document.getElementById("roomCode").value;
  if (roomCode) {
    alert(`Du bist dem Raum ${roomCode} beigetreten.`);
  }
});

document.getElementById("setupTeams").addEventListener("click", () => {
  const teamCount = document.getElementById("teamCount").value;
  if (teamCount > 0) {
    alert(`Es wurden ${teamCount} Teams eingerichtet.`);
  } else {
    alert("Bitte eine gültige Teamanzahl eingeben.");
  }
});