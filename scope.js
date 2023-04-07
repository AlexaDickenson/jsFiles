function outer(){
    let a = (3);
    let b = {
        firstName:'George',
        lastName:'Washington',
    };
    //console.log(a);
    //console.log(b);

//returned 3 and { firstName: 'George', lastName: 'Washington' }

    function inner(a,b) {
    a =(1);
    b ={
        firstName:'John',
        lastName:'Adams',
    };
        console.log(a);
        console.log(b);

        b.firstName = "Mr.";
    }
 //returned 3 and { firstName: 'George', lastName: 'Washington' }

 //inner(1,2);
//returned 1 and 2

inner(a,b)

console.log(a);
console.log(b);
  }
  
  
  outer()
  
