import {regex} from '../utils/regex-expression';

function danatau(text){
	if (text.trim()=="dan") return "&&";
	else if (text.trim()=="atau") return "||";
}

function logical(text){
	return text.replaceAll(regex.logical, logic => danatau(logic));
}

export function matchLogical(text){
	if(text.match(/(dan|atau)/g)!=null)
		return logical(text);
	else return text;
}

export default matchLogical;

