export const createBlankInputData = typeDefinition => {
  const blankInputData = typeDefinition.reduce((result, datum) => {
    result[datum.name] = null;
    return result;
  }, {});
  return blankInputData;
};
