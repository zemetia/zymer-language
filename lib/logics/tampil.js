import parseText from './parse-text';

export function tampilExec(value){
    value = parseText(value);
    console.log(eval(value));
}

export default tampilExec;