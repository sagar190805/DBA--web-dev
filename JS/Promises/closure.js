// closure: we need lexical scope for acheiving closure. closure is a function in js  which remembers the variable from its outer scope even when the outer function finish executing.
// lexical scope: lexical scope is the ability of the js engine to search for the variable from its parent scope.
function outer(){
    let count=0;
    function inner(){
        console.log(count);
        count++;
    }
    return inner;
    }
    const counter=outer();
    counter();
    counter();
    counter();
