import {readFile} from '../tools/fileHandler'


const data = readFile('./test-data');

const seperate_data = data.split(',',-1);

function part1(){
    let count = 0;
    seperate_data.forEach( (d) => {
        console.log(d)
        let range = d.split('-',2);
        let n:number = +range[0];
        let e:number = +range[1];
        while (n <= e){
            let strNum = String(n)
            if (strNum.length % 2 != 0){
                n++;
                continue
            }
            let str1 = strNum.substring(0,strNum.length/2);
            let str2 = strNum.substring(strNum.length/2,strNum.length);

            console.log(n + ": " + str1 + ": " + str2 );
            if(str1 === str2){
                count += n;
            }
            n++;
        }


    });

    console.log(count);
}


function part2(){
    let count = 0;
    seperate_data.forEach( (d) => {
        console.log(d);
        let range = d.split('-',2);
        let n:number = +range[0];
        let e:number = +range[1];
        while (n <= e){
            let strNum = String(n);
            for(let i = 1; i <= strNum.length;i++){
                if (strNum.length % i != 0)
                    continue;
                let str1 = strNum.substring(0,i);
                console.log(n);
                console.log(str1);

                for(let j = i; j < strNum.length; j += str1.length){
                    let str2 = strNum.substring(j,j+str1.length);
                    console.log(n + ": " + str1 + ": " + str2 );

                }
            }
            n++;
        }
    });

    console.log(count);
}


part2();
