 let studentList = [{
         studentName: 'Dante',
         firstNote: 8,
         secondNote: 10,
     },

     {
         studentName: 'Alice',
         firstNote: 7,
         secondNote: 9,
     },

     {
         studentName: 'Rafaela',
         firstNote: 2,
         secondNote: 5,
     },

 ]

 function midCalculator(firstNote, secondNote) {
     let mid = (firstNote + secondNote) / 2
     return mid
 }

 for (let student of studentList) {
     indivdualMid = midCalculator(student.firstNote, student.secondNote)
     aprovedOrNot = indivdualMid < 7 ? 'Reprovado. Estude mais!' : 'Parabéns, você foi aprovado'

     alert(`A média de ${student.studentName} é ${indivdualMid}.
${aprovedOrNot} `)
 }