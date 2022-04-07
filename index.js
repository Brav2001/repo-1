const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfSJCzKbKmB3J1YDmbnu-rsUg_jLkjMA8",
    authDomain: "clasegestion-19ab1.firebaseapp.com",
    projectId: "clasegestion-19ab1",
    storageBucket: "clasegestion-19ab1.appspot.com",
    messagingSenderId: "655913353753",
    appId: "1:655913353753:web:29200eb222879758846088"
});
const db = firebaseApp.firestore();


const estudiante = {
    nombre: "Juan",
    apellido: "Bautista",
    materias: ['Cálculo', 'Programacion', 'Inteligencia artificial']
};
/*const contador=document.getElementById("contador");
const tabla=document.getElementById("tabla");
*/
const estudiantesCollection = db.collection('estudiantes');
const materiasCollection = db.collection('materias');
// estudiantesCollection.add(estudiante).then(reference => {
//     console.log(reference.id);
// }).catch(e => {
//     console.log(e);
// });

/*estudiantesCollection.doc('Sxj1vymw0BHV3zN47Uhi').update({
    nombre:'Fulanito'
})*/

/*estudiantesCollection.doc('Sxj1vymw0BHV3zN47Uhi').set({
    edad:'25'
})*/

/*estudiantesCollection.doc('Sxj1vymw0BHV3zN47Uhi').delete();*/

/*estudiantesCollection.onSnapshot(snap =>{
    contador.innerHTML=+contador.innerHTML+1;
    const estudiantes=[];
    snap.forEach(sn => {
        estudiantes.push({
            id: sn.id,
            ...sn.data()
        })
    });
    console.log(estudiantes);
    let linea=`
    <table class="default">

  <tr>

    <th>Nombre</th>

    <th>Apellido</th>


  </tr>
  

    `;
    for(let i=0;i<estudiantes.length;i++)
    {
        linea=linea+`
        <tr>
            <td>${estudiantes[i].nombre}</td>
            <td>${estudiantes[i].apellido}</td>
        </tr>
        `
    }
    linea=linea+"</table>";
    tabla.innerHTML=linea
})

estudiantesCollection  
 .where('edad', '>=', 20)
 .where('edad', '<=', 30)
 .get()
 .then(snap =>{
    
    const estudiantes=[];
    snap.forEach(sn => {
        estudiantes.push(
            {
             id: sn.id,
             ...sn.data()
            }
        )
    })
    console.log(estudiantes)
});*/

// estudiantesCollection.doc('s4UXinc5SqPlS4qLKDJk')
// .get()
// .then(snap=>{
// const estudiantes=[];
// snap.forEach(sn => {
//     estudiantes.push(
//         {
//          id: sn.id,
//          ...sn.data()
//         }
//     )
// })console.log(snap.data());


estudiantesCollection
    .get()
    .then(snap => {

        const estudiantes = [];
        const materias = [];
        snap.forEach(sn => {
            estudiantes.push({
                id: sn.id,
                ...sn.data()
            })
        });
        /*for(i=0;i<estudiante.length;i++){
            estudiantes[i]
        }*/
        estudiantes.forEach(estudiante => {
            materiasCollection
                .where('estu', '==', estudiante.id)
                .get()
                .then(snap => {
                    snap.forEach(sn => {
                        materias.push({
                            id: sn.id,
                            ...sn.data()
                        })

                    })

                })
        })
        console.log(materias);
    })