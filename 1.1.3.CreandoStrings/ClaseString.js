// Strings types creation

const firstOption =  'Single quotes';
const secondOption = "Single quotes";
const thirdOption = `Single quotes`;

// Concatenation; Option +
const address = 'Av. Rio Passport 123';
const city = 'Florida';
const completeAddress = 'My complete address is : ' + address + city;

console.log(completeAddress);

const completeAddressWithSpace = 'My complete address is : ' + ' ' + address + ' ' + ' ' + city;

console.log(completeAddressWithSpace);

// 2. Concatenation: Template literals

const name = 'Diego';
const country = 'US';
const presentation = `Hello, I'm ${name} from ${country}`;

console.log(presentation);

  
//3. Concatenation: join();
const firstPart = 'I like';
const secondPart = 'people from';
const thirdPart = '🏴‍☠️';
const thought = [firstPart, secondPart, thirdPart];

console.log(thought);
console.log(thought.join(' '));

//4. Concatenation: concat();

const hobbie1 = 'Run 🏃';
const hobbie2 = 'Walk 🚶‍♂️';
const hobbie3 = 'Surf 🏄‍♀️';
const hoddies = 'My hobbies are: '.concat(hobbie1, ',', hobbie2, ',',hobbie1, '.');

console.log(hoddies);

// Scape characters 
// const whatDoIDo = 'I'm Support Analyst'; This generate a wrong concatenation


//1. Altenative Scape
const AlterativeScape = "I'm Support Analyst";

//2. Barra invertida
const escapeBarraInvertida = 'I\'m Support Analyst';

//3. Template literals
const escapeComillaInvertida = `I'm Support Analyst`;

//Escritura de Strings largos 

/*
  Las rosas son rojas ,
  Las violetas son azules,
  Caracter inesperado, 
  En la linea 86.
 */

  const poema = 'Las rosas son rojas,\n' +
                'Las violetas son azules,\n' +
                'Caracter inesperado,\n' +
                'En la linea 86.';

console.log(poema);

const poema2 = 'The roses are red, \n\
                The violets are blue, \n\
                Unexpected character, \n\
                On line 86'

console.log(poema2);
/*
const poema3 = 'The roses are red, 
                The violets are blue, 
                Unexpected character, 
                On line 86'

console.log(poema3);*/

/* String: primitivo, objeto*/

// Primitive String (Paso por valor)
const primitiveString = 'I\'m an primitive String';
console.log(typeof primitiveString);

const alsoPrimitiveString = String('This is also a primitive String')
console.log(typeof alsoPrimitiveString);

//Object String (Mutables)
const objectString = new String('This is a object String'); // We use reserved word: new
console.log(typeof objectString);

// Characters accessing 
const greet = 'Hello. How are you?'; // Our strings has index 
console.log(greet[2]);//Accessing by index
console.log(greet.charAt(2));//Accessing by index
console.log(greet.indexOf('w'));//Index value by letter
console.log(greet.indexOf('are'));//Index value by word
console.log(greet.indexOf('e you'));
console.log(greet.lastIndexOf('y'));
console.log(greet.slice(5, 7));
console.log(greet.length);
console.log(greet.toLocaleUpperCase());
console.log(greet.toLocaleLowerCase());

const dividedGreet = greet.split(' ');
console.log(dividedGreet);
console.log(dividedGreet[3]);

const greetWithSpaces = ' Hello World ';
console.log(greetWithSpaces);
const greetWithoutSpaces =  greetWithSpaces.trim();//trim sirve para quitar espacios
console.log(greetWithoutSpaces);

const originalGreet = 'Hello World';
const newGreet =  originalGreet.replace('World', 'my friends');//Remplazando palabras del texto
console.log(newGreet);
