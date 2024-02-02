function calculator( a, b,choice)
{
    let res;
    switch(choice){
        case 'sum':
            res=a+b;
            console.log(res);
            break;
        case 'subtract':
                res=a-b;
                console.log(res);
                break;

    }
}

calculator(1,5,'sum')
calculator(1,5,'subtract')