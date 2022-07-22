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

document.writeln('<br>')