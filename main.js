let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #603b55;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #603b55;">Soy estudiante de Ingenieria.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
