let numero1 = 22;
let numero2= 1;
let numero3 = -10;
let numero4= 4;
let anguloGrados= 30;
let anguloRadianes = anguloGrados * (Math.PI / 180);

//Propiedad del numero Pi:
console.log("Prueba PI:")
console.log(Math.PI);//3.141592653589793
console.log(Math.PI+numero2);//4.141592653589793

//Propiedad con el numero E:
console.log("Prueba E:")
console.log(Math.E);//2.718281828459045
console.log(Math.E+numero2);//3.718281828459045

//Valor absoluto de un numero:
console.log("Prueba valor absoluto:")
console.log(numero3);//10
console.log(Math.abs(numero3));//-10

//Seno de un angulo (hay que pasarlo en radianes)
console.log("Prueba seno:")
console.log(anguloGrados);//30
console.log(Math.sin(anguloRadianes));//0.49999999999999994

//Coseno de un angulo (hay que pasarlo en radianes)
console.log("Prueba coseno:")
console.log(anguloGrados);//30
console.log(Math.cos(anguloRadianes));//0.8660254037844387

//Tangente de un angulo (hay que pasarlo en radianes)
console.log("Prueba tangente:")
console.log(anguloGrados);//30
console.log(Math.tan(anguloRadianes));0.5773502691896257

//Exponencia e al numero indicado en el parametro
console.log("Prueba exponente:")
console.log(numero4);//4
console.log(Math.E);//2.718281828459045
console.log(Math.exp(numero4));//54.598150033144236

//Exponencia e al numero indicado en el parametro
console.log("Prueba logaritmo:")
console.log(numero4);//4
console.log(Math.E);//2.718281828459045
console.log(Math.exp(numero4));//54.598150033144236