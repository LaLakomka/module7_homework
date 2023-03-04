// . (7.3) Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи 
//и значения только собственных свойств. Данная функция не должна возвращать значение.

const obj = {
    a: 1,
    b: '2'  
}
  
const num1 = Object.create(obj);
  
function num(num1) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key, obj[key]);
      }
    }
} 
num(obj)