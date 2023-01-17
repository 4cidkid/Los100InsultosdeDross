//Los 100 insultos de DROSS



function letGetSomeFun (){
    let arr = ['Una cagada asquerosa', 'repelente', 'abyecta', 'vomitiva', 'mugrosa', 'maldita', 'diarreosa', 'estercolera', 'inmunda', 'malnacida', 'pudenda', 'apestosa', 'maloliente', 'cabrona', 'maricona', 'huevona', 'pendeja', 'tarada', 'cancerígena', 'jodida', 'culeada', 'gilipollesca', 'pelotuda', 'encamada', 'malnacida', 'retardada', 'atrasada', 'inútil', 'mongola', 'incestuosa', 'burda', 'estúpida', 'insulsa', 'putrefacta', 'traicionera', 'indigna', 'chupapollas', 'soplahuevos', 'esnifacojones', 'gueleculo', 'coprofágica', 'masca-morrones', 'infecta', 'cerda', 'nauseabunda', 'cochambrosa', 'cochina', 'verdulera', 'infame', 'ruin', 'rastrera', 'degradada', 'descerebrada', 'zopenca', 'zafia', 'puta', 'engreída', 'esquizofrénica', 'granúlenla', 'infeliz', 'profana', 'calamitosa', 'deficiente', 'cretina', 'lela', 'ramera', 'fulana', 'calientaguevos', 'ridícula', 'petarda', 'pasmarote', 'fistro', 'desidiosa', 'puta', 'reputa', 'soputa', 'recontraputa', 'hija de puta', 'hija de un millón de putas', 'escupepitos', 'caradepedo', 'necrofílica', 'alientoamojón', 'lambe-bukaka', 'revuelcaleche', 'coñoesumadre y de su abuela', 'conchuda', 'culoroto', 'nalgas reventadas', 'tragasable', 'succionapitos', 'esfinterpartido', 'ojetedesilachado', 'sorbemocos', 'capulla', 'pelmaza', 'zoquete', 'masturbadora crónica', 'espuria', 'chupa-tampones', 'regluda', 'coprófaga', 'gerontofílica', 'turra', 'ojete', 'atorrante', 'tierrúa', 'pajúa', 'amamaguevos', 'onanista caradeconcha'];
    let newarr = [];
    for(let i=0;i<Math.floor((Math.random() * (10 - 3 + 1) + 3));i++){
        newarr[i] = arr[Math.floor(Math.random()*130)];
    }
    let frase= newarr.join(' ');
    return frase;
}

console.log(letGetSomeFun())