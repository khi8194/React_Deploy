export default function UseCombineText() {
	// return (text, spc1, spc2) => text.split(spc1).join(spc2);
	return (text, spc1, spc2) => text?.split(spc1).join(spc2);
}
