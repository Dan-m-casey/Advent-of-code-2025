import {readFile} from './fileHandler';

const file = readFile('./real-data');
//const file = readFile('./test-input');


const max = 99;
const min = 0;

function passes0(start:number, adjust:number){
    let count = 0;
    if( adjust < 0 && start == 0){
        count --;
    }
    while(adjust < -max){
        count++;
        adjust += 100;
    }
    while(adjust > max){
        count++;
        adjust -= 100;
    }
    start += adjust;

    if(start > max || start < min){
        while(start < 0){
            start += 100;
            count++;
        }
        while(start > max){
            count++;
            start -= 100;
        }
    }
    else if(start == 0){
        count++;
    }

    return {count, start};
}

function get0s(data : string){
    const split = data.split('\n',-1);

    let start = 50;
    let count = 0;

    split.forEach( (d) => {
        let n :number;
        console.log(start);
        n = +d.substring(1);

        if (d.charAt(0) == 'L'){
            n = -n
        }

        let foo = passes0(start,n);

        console.log(JSON.stringify(foo) + " : "+ n);
        start = foo.start;
        count += foo.count;
    });

    console.log('Times passed 0 : ' + count);
}




function main(){
    get0s(file);
    console.log(passes0(99,-99));
}

main();
