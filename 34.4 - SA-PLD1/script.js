let num1 = parseInt(prompt("Dame el primer numero"));
let num2 = parseInt(prompt("Dame el segundo numero"));
let num3 = parseInt(prompt("Dame el tercer numero"));
let mayor, centro, menor;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    } else {
        if(num2 >= num1 && num2 >= num3){
            mayor = num2;
        } else {
            mayor = num3;        
        }
    } 
 
if (num1 <= num2 && num1 <= num3) {
    menor = num1;
    } else {
        if(num2 <= num1 && num2 <= num3){
            menor = num2;
        } else {
            menor = num3;        
        }    
    }    

if (mayor === num1 && menor === num2) {
    centro = num3;
    } else {
        if (mayor === num1 && menor === num3) {
            centro = num2;
        } else {
            if (mayor === num2 && menor === num1) {
                centro = num3;
            } else {
                if (mayor === num2 && menor === num3){
                    centro = num1;
                } else {
                    if (mayor === num3 && menor === num1){
                        centro = num2;
                    } else {
                        centro = num1;
                    }
                }
            }
        }     
    }
    
    console.log(`Orden descendente: ${mayor}, ${centro}, ${menor}`);
    console.log(`Orden ascendente: ${menor}, ${centro}, ${mayor}`);    