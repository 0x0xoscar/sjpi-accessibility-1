// Simulerad blockering av tråden
setInterval(() => {
  let start = Date.now();
  while (Date.now() - start < 1000) {}
}, 3000);

// Skriver ut HTML direkt i dokumentet
document.write("<h1 style='color:black;'>HELLO FROM DOCUMENT.WRITE()</h1>");
document.write('<p>Another document.write() call</p>');

// Ändrar bakgrundsfärgen slumpmässigt var 500ms
setInterval(() => {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}, 500);

// Visar innehållet på sidan efter 5 sekunder
setTimeout(() => {
  document.body.style.display = 'block';
}, 5000);
