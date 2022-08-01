export const regex = {
	logical:/(?<=[)\s])(?=dan|atau)(dan|atau)+(?=[(\s])/g,
	cmdx:/^((#)?\w)+/,cmd:/^((\.|#|~)?\w)+([(].*?[)])?/,
	string: /((\").*?(\")|(\').*?(\'))/g,
	digit: /\d+/,
	var: /\w+/,
	fungsi: /\w+[(].*?[)]/, fungsiB:/[(].*?[)]/,
	DOM:/(#|\.|~)\w+/g,
	cmdDOM:/^(#|\.|~)/,
	htmlopen:/(<!)(.|\n)*?(!>)/,
	regexi:/^((\.|#|~)?\w)+/
}
