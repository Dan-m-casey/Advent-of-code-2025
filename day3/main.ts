import {readFile} from '../tools/fileHandler'

const data = readFile('./real-data');
const dataSeperate = data.split("\n");

function part1(){
    console.log(data);

    let jolts = 0;

    let count:number = 0;
    dataSeperate.forEach( (d) => {
        console.log( count + ":- " + d);
        count++;
        let maxL = 0;
        let maxLindex = -1;
        let maxR = 0;
        let maxRindex = 9999;
        for(let i = 0; i < d.length - 1; i++) {
            if (d[i] > maxL){
                maxL = d[i];
                maxLindex=i;
            }
        }

        for(let i = d.length; i > maxLindex; i--){
            if (d[i] > maxR){
                maxR = d[i];
                maxRindex=i;
            }
        }

        console.log(maxL + "" + maxR);
        jolts += Number(String(maxL) + String(maxR));
    });

    console.log(jolts);
}


part1();
