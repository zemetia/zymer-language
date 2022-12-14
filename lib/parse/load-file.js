/*
function blockSCript(){
    TURN A LINEAR SCRIPT INTO BLOCK

    ex:

    test = 5
    Selama (logical):
    (tab)test -= 1
    (tab)...

    line[0] = "test = 5"
    line[1] = {
        blockParent: "Selama (logical)",
        blockChild: [
            "test -= 1",
            "...",
            {...}
        ]
    }
}
*/

import parseZymerScript from './script-parse';

export async function loadFile(file){ 
    let fileRequest = await fetch(file);
    let fileResponse = await fileRequest.text();
    if(fileResponse) throw new error('There is no file response');

    let line = fileResponse.split("\r\n");
    //script.push(line);
    parseZymerScript(line);
}

export default loadFile;