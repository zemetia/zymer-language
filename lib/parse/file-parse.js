import {} from './load-file';

const tagName = 'zymer'

export function zymerLangInit(){
	let zymerSrcArr = [];
	const ZYMERTAGS = document.getElementsByTagName(tagName);
	for(let tag of ZYMERTAGS){
		let src = tag.getAttribute("src");
		if(src) zymerSrcArr.push(src);
	}
	for(let script of zymerSrcArr)
		loadFile(script);
	
}

export default zymerLangInit;