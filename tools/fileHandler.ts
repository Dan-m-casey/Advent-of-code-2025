import * as fs from 'fs';

export function readFile(s :string ){
    return fs.readFileSync(s,'utf8');
}
