function composition(...functions){
    return function(value){
         return functions.reduce((accumulator, fn) => {
             return fn(accumulator)
         }, value)
    }
}

function shoutout(text){
    return text.toUpperCase()
}

function toemphasize(text){
    return `${text}!!!!!`
}

function slowdow(text){
    return text.split('').join(' ')
}



const exaggerate = composition(
    shoutout, 
    toemphasize, 
    slowdow) 

console.log(exaggerate('watch out for the hole'))
console.log(exaggerate('stop'))