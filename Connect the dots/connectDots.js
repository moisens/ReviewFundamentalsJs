//String properties and methods
//wrapper string Object

 const personn = {//Object
     prenom: 'Brian', //Property
     greetings(){//Method
        console.log('Hey I am Brian');
        
     }
 };
 console.log(personn);
 console.log(personn.prenom);
 personn.greetings();


 let letext = ' Peter Files ';
 let resultat = letext.length;
 console.log(resultat);

 console.log(letext.length);
 console.log(letext.toLowerCase());
 console.log(letext.toUpperCase());

 console.log(letext.charAt(0));
 console.log(letext.charAt(9));
 console.log(letext.charAt(letext.length - 1));


 console.log(letext.indexOf('e'));
 console.log(letext);
 console.log(letext.trim());
 console.log(letext.trim().toLowerCase().startsWith('peter'));
 
 console.log(letext.includes('eter'));
 console.log(letext.slice(0,2));
 console.log(letext.slice(-6));
 

 
 
 