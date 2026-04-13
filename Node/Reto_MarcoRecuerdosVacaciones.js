const marcoRecuerdos = (recuerdos) =>{
    console.log("********");
    recuerdos.forEach(r => {
        console.log("*" + r + "*");
    });
    console.log("*********");
}

(marcoRecuerdos(['Playa','Cabaña','Skies','Yate']));