function execute(f,value){
    f(value)
}

execute((word)=>{
    console.log(word);
},'will')