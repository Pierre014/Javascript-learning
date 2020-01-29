(()=>{
    //objet PNJ plus sa fonction pour attribuer un objet aléatoire
    const CHARACTER = {
        name: "Brody le PNJ",
        age: 45,
        itemsToGive:["Casque lebohum","épée rustique","armure elfique","gants rupestre","bottes alcaline"]
    };
    const ITEMS= ()=> (CHARACTER.itemsToGive[Math.floor(Math.random()*CHARACTER.itemsToGive.length)])
    
    // for(const x in CHARACTER){
    //     console.log(CHARACTER[x]);
    // };

    //preparation du contenu du shop
    const SHOP = {
        item1:{
            name:"hache standard",
            physic:30,
            magic:0,
            minLevel: 5,
            available: true
        },
        item2:{
            name:"Baton de l'illusion",
            physic:25,
            magic:50,
            minLevel:10,
            available:true,
        },
        item3:{
            name:"Mirandil",
            physic:55,
            magic:30,
            minLevel:20,
            available:false,
        }
    }

    const VIEUWITEMS = ()=>{
        for(x in SHOP){
            console.log(SHOP[x].name);
        };
    };

    const AVAILABLEARTICLES = ()=>{
        for(x in SHOP){
            if(SHOP[x].available == true)
                console.log(SHOP[x].name);
        };
    } ;

    const LEVELREQUIRE = ()=>{
        for(x in SHOP){
            if(SHOP[x].minLevel == 10)
                return (SHOP[x].name);
        }
    }

    //Création du personnage principale

    const MAINCHARACTER = {
        name: "Mugi l'intrépide",
        level: 50,
        live: 500,
        weapon:{
            name:"gant de l'infini",
            damage: 250
        },
        attack(){
            return `${this.name} attaque avec ${this.weapon.name} les degats sont de ${this.weapon.damage}`
        }


    }

    //utilisation des class et du constructor pour l'exercice bonus

    class Character{
        constructor(name,level,life){
            this.name = name;
            this.level = level;
            this.life = life;
        };

        description(){
            return `${this.name} est au niveau ${this.level} et possede ${this.life} pv`
        };

        attack(ennemy){
            let damages = weapon.damage * this.level;
            console.log(`${this.name} attaque ${ennemy.name}`);
            console.log(`utilisation de ${weapon.name}`);
            console.log(`les degats sont de ${damages}`);
            console.log(`${ennemy.name} a ${ennemy.life - damages} pv`);
        }
    }
   const weapon = {
        name: "gant de l'infini",
        damage: 10
    };

     //scénario du rpg
    console.log("bienvenue dans notre magasin!");
    console.log(`je suis ${CHARACTER.name}, Comme cadeau de première visite, laissez-moi vous offrir ce magnifique objet`)
    console.log("Brody vous offre: " + ITEMS());
    console.log("voici les articles du magasin");
    VIEUWITEMS();
    console.log("Cependant voici les seuls articles que j'ai en stock");
    AVAILABLEARTICLES();
    console.log("Oh je vois que vous êtes niveaux 10, j'ai des objet j'ai un objet dispo pour vous: ");
    console.log(`${CHARACTER.name} vous propose d'acheter le ${LEVELREQUIRE()}`);

    let mainCharacter = new Character("mugi",10,200);
    mainCharacter.weapon = weapon;
    let oppenentCharacter = new Character('manu le putride',9,150);
    console.log(mainCharacter.description());
    console.log(oppenentCharacter.description());
    console.log(mainCharacter.weapon.name);
    mainCharacter.attack(oppenentCharacter);
    
    
})()
