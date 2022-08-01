import {regex} from '../utils/regex-expression';

const oneLineCommentBase = "#";

function oneLineCommentDetect(script){
    return script.split(oneLineCommentBase)[0];
}

function getScriptMatch(script){
    let command = script.match(regex.regexi);
	return command = command? command[0] : "";
}

export function parseZymerScript(script){
	//var tabScript = ["selama","untuk","jika","fungsi"];
	var sb = [];

    script.forEach((line, perLineScript) => {
        let trimmed = oneLineCommentDetect(perLineScript);
        let command = getScriptMatch(trimmed);
    })

	while(x<script.length){
		innerScript = script[x];
		innerScript = innerScript.split("//")[0];

		
		if(tabScript.includes(cmd)){
			while(true){
				x++;
				if(script[x].match("\t")){
					sb.push(script[x].replace("\t",""));
				}else{x--;break;}
			}
			var text = innerScript.replace(cmd,"");
			switchCMD(cmd,text.trim(),sb);
			sb =[];
		}
		else{
		var text = innerScript.replace(cmd,"");
		switchCMD(cmd,text.trim());}
		x++;
	}
}

export default parseZymerScript;