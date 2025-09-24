  //function to handle the welcome message and redirect
  setTimeout(() => {
      window.location.href = "main.html";
    }, 5000); // Redirect after 3 seconds
    // VANTA.js configuration
  VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  points: 15.0,
  maxDistance: 25.0,
  spacing: 20.0,
  showDots: true,
  backgroundColor: 0x131f30, // متوافق مع باقي التدرج
  color: 0xd989d9
});

