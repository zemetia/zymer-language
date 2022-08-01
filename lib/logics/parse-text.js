import {regex} from '../utils/regex-expression';
import matchLogical from './logical';

function parseText(text, local = ""){
	let string = text.match(regex.string);
	text = text.replace(regex.string,"!");

	let sDOM = text.match(regex.DOM);
	text = text.replace(regex.DOM,"#");
	text = matchLogical(text);
	if(local!="") 
        text = text.replaceAll(/(?!\d)\w+/g,"indoxVar['"+local+"']['$&']");
	else text = text.replaceAll(/(?!\d)\w+/g,"indoxVar['$&']");
	
	if(sDOM){
	    for(i in sDOM){
		    if(sDOM[i][0]=="~") sDOM[i] = sDOM[i].substr(1);
	        text = text.replace("#","document.querySelector('"+sDOM[i]+"').innerHTML");
	    }
    }

	if(string){
        for(i in string){
            text = text.replace("!",string[i]);
        }
    }
	return text;
}

export default parseText;