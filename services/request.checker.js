// Définition

const checkFields = (required, body ) => {
    // Variables
    let miss = [];
    let extra = [];


    // Champs absents
    required.forEach( prop =>{
     if ( !(prop in body) ) miss.push(prop)
    });

    // Champs en trop
    for (let prop in body){
        if (required.indexOf(prop) === -1 ) extra.push(prop)
    }

    // Définir la réponse
    let ok = (extra.length === 0) && (miss.length === 0)
    return {ok, extra, miss}
}

// Exports
module.exports = checkFields;