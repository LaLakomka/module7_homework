// 2.(7.3) Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть 
//ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const obj = {
  
  a: "Joy",
  b: 2
}
const str = "b"
function check(str, obj){
  if(str in obj)
      console.log(true)
  else
      console.log(false)
}
check(str, obj)