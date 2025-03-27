// Simulerad blockering av tråden
setInterval(() => {
  let start = Date.now();
  while (Date.now() - start < 1000) {}
}, 3000);

// Skriver ut HTML direkt i dokumentet
document.write("<h1 style='color:black;'>HELLO FROM DOCUMENT.WRITE()</h1>");
document.write('<p>Another document.write() call</p>');
