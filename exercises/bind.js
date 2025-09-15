// function myBind(func, context) {
//   return function() {
//     return func.apply(context);
//   };
// }

//Improved

function myBind(func, context, ...outerArgs) {
  return function(...innerArgs) {
    let combinedArgs = [...outerArgs, ...innerArgs];
    return func.apply(context, combinedArgs);
  };
}