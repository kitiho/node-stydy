function say(word){
    console.log(word);
}

function execute(f1,value){
    f1(value)
}

execute(say,'hello')