function composition(fn1, fn2, fn3, value){
    return fn3(fn2(fn1(value)))
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


const result = composition(shoutout, toemphasize, slowdow, 'watch out for the hole')

console.log(result)
