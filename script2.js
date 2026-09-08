const prompt = require('prompt-sync')();

const menu = {
    home : ["1. Welcome" , "2. introduction" , "3. highlights"] ,
    products : ["categories" , "best_sellers" , "new_arrivals"],
    service : ["consulting" , "FAQ" , "support"]
}

let choix = 0 ;
let choix2 = 0;
let choix3 = 0;
while(choix != "#"){
        console.log(`entrer votre choix :
        1. home
        2. products
        3. service`);
    choix = prompt(`entrer votre choix  :      `);

        switch (choix){
            case "1" :

                do{
                    choix2 = prompt(`entrer votre choix : ${menu.home} : `);
                    switch (choix2){
                        case "1" :
                            console.log('welcome');
                            choix3 = prompt(`tapez # pour returnez`);
                            break;

                        case "2" :
                            console.log('introduction');
                            choix3 = prompt(`tapez # pour returnez`);
                            break;

                        case "3" :
                            console.log('highlights');
                            choix3 = prompt(`tapez # pour returnez`);
                            break;

                    }
                }while(choix2 != "#");
                break;