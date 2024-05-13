/*function f(){
    try {
        console.log(0);
        throw "bogus";
    } catch(e){
        console.log(1);
        //This return statement is suspended
        //until finally block has completed
        return true;
        console.log(2); // not reachable
    } finally {
        console.log(3);
        return false; //overwrites the previous "return"
        console.log(4); //not reachable
    }
    //"return false" is executed now
    console.log(5); //not reachable
}
console.log(f());*/
/*
function f(){
    try{
        throw "bogus";
    } catch (e){
        console.log('caught inner "bogus"');    
        // This throw statement is suspended until finally block has completed
        throw e;
    } finally {
        return false; // overwrites the previous "throw"
    }
    // "return false" is executed now 
}

try {
    console.log(f());
} catch (e) {
    // This is never reached! 
    // while f() executes, the `finally` block returns false,
    // which overwrites the `throw` inside the above `catch`
    console.log('caught outer "bogus"');
}*/


//Utilizing Error objects

function doSomethingErrorProne(){
    if (ourCodeMakeAMistake()){
        throw new Error("The message");
    } else {
        doSomethingToGetJavaScriptError();
    }
}

try {
    doSomethingErrorProne();
} catch (e) {
    //Now, we actually use `console.error()`
    console.error(e.name); // 'Error'
    console.error(e.message); // 'The message' or a JavaScript error message
}
