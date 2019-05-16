export const generateUpdateAtom = (atom, updateAtom) => updateData => updateAtom(Object.assign({}, atom, updateData));
