import {readFile} from './fileHandler';

const file = readFile('./real-data');


function get0s(data : string){
    const split = data.split('\n',-1);

    let start = 50;
    let count = 0;
    const max = 99;
    const min = 0;

    split.forEach( (d) => {
        let c :char;
        let n :number;

        n = +d.substring(1);

        if (d.charAt(0) == 'L'){
            c = 'L';
            start -= n;
        }
        else{
            c = 'R';
            start += n;
        }

        while (start > max) start -= 100;
        while (start < min) start += 100;


        if (start == 0){
            count++;
        }
        console.log(start);
        console.log(d + " is " + c + ", the number is " + n);

    });

    console.log('Times hit 0 : ' + count);
}




function main(){
    get0s(file);
    console.log("wank");
}

main();
