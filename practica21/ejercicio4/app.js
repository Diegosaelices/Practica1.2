    const NOMBRE=prompt('Dime tu nombre');
    const CURSO=prompt('Dime tu curso');
    const LOCALIDAD=prompt('Dime tu localidad');
    const FECHA_INICIO=prompt('Dime la fecha de inicio');
    const FECHA_FIN=prompt('Dime la fecha en la que acaba');

    console.log("Estimado " +NOMBRE.trim()+","+
        "Bienvenido al curso de "+CURSO.trim()+
        " que se celebrará en la localidad de "+LOCALIDAD.trim()+" entre las fechas "+FECHA_INICIO.trim()+
        " y "+FECHA_FIN.trim()+
        "Espero que el curso se desarrolle según sus expectativas. Estaremos encantados de atenderle"+
        "Atentamente,"+ 
        "La dirección");