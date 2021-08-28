const alpha='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers='0123456789';
const symbols='!@#$%^&*_-+=';

const creator=(len='8', num='y', sym='y')=>{
    let chars=alpha
    if(num==='y') (chars+=numbers)
    if(sym==='y') (chars+=symbols)
    return generator(len, chars)
}

const generator=(len, chars)=>{
    let pwd=''
    for(let i=0;i<len;i++){
        pwd+=chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return pwd
}

module.exports=creator