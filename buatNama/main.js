document.write('<h2>' + 'Dedy' + '</h2>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 || x == 2 || x == 3) {
         document.writeln('*')
      } else if (y == 1 && x <= 7 || y == 2 && x <= 8) {
         document.writeln('*')
      } else if (y == 8 && x <= 8 || y == 9 && x <= 7 ) {
         document.writeln('*')
      } else if (x == 7 && y >= 2 && y <= 8 || x == 8 && y >= 3 && y <= 7 || x == 9 && y >= 3 && y <= 7) {
         document.writeln('*')
      } else if (x == 6 && y == 3 || x == 6 && y == 7) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 || x == 2) {
         document.writeln('*')
      } else if (y == 1 && x <= 8 || y == 2 && x <= 9) {
         document.writeln('*')
      } else if (y == 4 && x <= 8 || y == 5 && x <= 9 || y == 6 && x <= 8) {
         document.writeln('*')
      } else if (y == 8 && x <= 9 || y == 9 && x <= 8) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 || x == 2 || x == 3) {
         document.writeln('*')
      } else if (y == 1 && x <= 7 || y == 2 && x <= 8) {
         document.writeln('*')
      } else if (y == 8 && x <= 8 || y == 9 && x <= 7) {
         document.writeln('*')
      } else if (x == 7 && y >= 2 && y <= 8 || x == 8 && y >= 3 && y <= 7 || x == 9 && y >= 3 && y <= 7) {
         document.writeln('*')
      } else if (x == 6 && y == 3 || x == 6 && y == 7) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')

for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 4 && y >= 3 || x == 5 && y >= 4 || x == 6 && y >= 3 ) {
         document.writeln('*')
      } else if (x >= y && x <= 3 ) {
         document.writeln('*')
      } else if (x + y <= 10 && x >= 7) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}


document.write('<h2>' + 'Septya' + '</h2>')
document.writeln('<br>')

for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (y == 1 && x > 1 && x < 9 || y == 2) {
         document.writeln('*')
      } else if (y == 4 && x < 8 || y == 5 && x < 9 || y == 6 && x > 1) {
         document.writeln('*')
      } else if (y == 8 || y == 9 && x < 9 && x > 1) {
         document.writeln('*')
      } else if (x == 1 && y == 3 || x == 2 && y == 3 || x == 8 && y == 7 || x == 9 && y == 7 ) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 || x == 2) {
         document.writeln('*')
      } else if (y == 1 && x <= 8 || y == 2 && x <= 9) {
         document.writeln('*')
      } else if (y == 4 && x <= 8 || y == 5 && x <= 9 || y == 6 && x <= 8) {
         document.writeln('*')
      } else if (y == 8 && x <= 9 || y == 9 && x <= 8) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 && y > 1 || x == 2) {
         document.writeln('*')
      } else if (y == 1 && x > 1 && y == 1 && x < 9 || y == 2) {
         document.writeln('*')
      } else if (y == 5 || y == 6 && x < 9) {
         document.writeln('*')
      } else if (y == 3 && x == 8 || y == 3 && x == 9 || y == 4 && x == 8 || y == 4 && x == 9) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')

document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 4 || x == 5 || x == 6) {
         document.writeln('*')
      } else if (y == 1 && x > 1 && y == 1 && x < 9 || y == 2 || y == 3) {
         document.writeln('*')
      } else{
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')

for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 4 && y >= 3 || x == 5 && y >= 4 || x == 6 && y >= 3 ) {
         document.writeln('*')
      } else if (x >= y && x <= 3 ) {
         document.writeln('*')
      } else if (x + y <= 10 && x >= 7) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 && y > 1 || x == 2) {
         document.writeln('*')
      } else if (y == 1 && x > 1 && y == 1 && x < 9 || y == 2) {
         document.writeln('*')
      } else if (y == 5 || y == 6 && x < 9) {
         document.writeln('*')
      } else if (y == 3 && x == 8 || y == 3 && x == 9 || y == 4 && x == 8 || y == 4 && x == 9) {
         document.writeln('*')
      } else if ( y > 5 && x == 8 || y > 5 && x == 9) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')

document.write('<h2>' + 'Rahmat' + '</h2>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 && y > 1 || x == 2) {
         document.writeln('*')
      } else if (y == 1 && x > 1 && y == 1 && x < 9 || y == 2 ) {
         document.writeln('*')
      } else if (y == 5 || y == 6 && x < 9 || y == 7 && x < 8) {
         document.writeln('*')
      } else if (y == 3 && x == 8 || y == 3 && x == 9 || y == 4 && x == 8 || y == 4 && x == 9) {
         document.writeln('*')
      } else if ( y == 8 && x > 4 && y == 8 && x < 9 || y == 9 && x > 5) {
         document.writeln('*')
      } else{
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 && y > 1 || x == 2) {
         document.writeln('*')
      } else if (y == 1 && x > 1 && y == 1 && x < 9 || y == 2) {
         document.writeln('*')
      } else if (y == 5 || y == 6 && x < 9) {
         document.writeln('*')
      } else if (y == 3 && x == 8 || y == 3 && x == 9 || y == 4 && x == 8 || y == 4 && x == 9) {
         document.writeln('*')
      } else if (y > 5 && x == 8 || y > 5 && x == 9) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 || x == 2 || x == 8 || x == 9) {
         document.writeln('*')
      } else if (y == 4 || y == 5 || y == 6) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')

for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 || x == 2 || x == 8 || x == 9) {
         document.writeln('*')
      } else if (x == y && x <= 5|| x + y == 10 && x >= 5) {
         document.writeln('*')
      } else if (y == 4 && x == 5 || y == 3 && x >= 3 || y == 2 && x == 4 || y == 2 && x == 6) {
         document.writeln('*')
      } else if ( x == 3 && y <= 4 || x == 7 && y <= 4) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 && y > 1 || x == 2) {
         document.writeln('*')
      } else if (y == 1 && x > 1 && y == 1 && x < 9 || y == 2) {
         document.writeln('*')
      } else if (y == 5 || y == 6 && x < 9) {
         document.writeln('*')
      } else if (y == 3 && x == 8 || y == 3 && x == 9 || y == 4 && x == 8 || y == 4 && x == 9) {
         document.writeln('*')
      } else if (y > 5 && x == 8 || y > 5 && x == 9) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 4 || x == 5 || x == 6) {
         document.writeln('*')
      } else if (y == 1 && x > 1 && y == 1 && x < 9 || y == 2 || y == 3) {
         document.writeln('*')
      } else {
         document.write('&nbsp' + '&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}