import {regex} from '../utils/regex-expression';
import executeCommand from './script/execute'

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

        let value = perLineScript.replace(command, "");
        value = value.trim();

        executeCommand(command, value)
    });
}

export default parseZymerScript;