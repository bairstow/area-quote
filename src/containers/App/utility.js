import { type, action } from 'containers/ActionBar/constants';
import { unit } from 'containers/App/constants';

export const generateUpdateAtom = (atom, updateAtom) => updateData => updateAtom(Object.assign({}, atom, updateData));

const inputUnitConversionFactor = {
  [unit.MM]: 0.001,
  [unit.CM]: 0.01,
  [unit.M]: 1,
};
const convertToDisplayUnit = (input, inputUnit) => input * inputUnitConversionFactor[inputUnit];
const parseValue = input => (input ? Number.parseFloat(input) : 0);
const parseLengthInput = (input, inputUnit) => convertToDisplayUnit(parseValue(input), inputUnit);

const calculateRectangularArea = (data, inputUnit) => {
  const { length, width } = data;
  const parsedLength = parseLengthInput(length, inputUnit);
  const parsedWidth = parseLengthInput(width, inputUnit);
  return parsedLength * parsedWidth;
};
const calculateTriangularArea = (data, inputUnit) => {
  const { length, width } = data;
  const parsedLength = parseLengthInput(length, inputUnit);
  const parsedWidth = parseLengthInput(width, inputUnit);
  return (parsedLength * parsedWidth) / 2;
};
const calculateCircularArea = (data, inputUnit) => {
  const { radius, angle } = data;
  const parsedRadius = parseLengthInput(radius, inputUnit);
  const parsedAngle = parseValue(angle);
  return Math.PI * parsedRadius * parsedRadius * (parsedAngle / 360);
};
const calculateCustomArea = data => {
  return parseValue(data.custom);
};

const calculateAreaByType = {
  [type.RECTANGULAR]: calculateRectangularArea,
  [type.TRIANGULAR]: calculateTriangularArea,
  [type.CIRCULAR]: calculateCircularArea,
  [type.CUSTOM]: calculateCustomArea,
};

export const calculateAreaValue = (sectionData, inputUnit) => {
  const { type, data } = sectionData;
  return calculateAreaByType[type](data, inputUnit);
};

const generateAreaTotal = (sectionData, inputUnit) => {
  return sectionData.reduce((result, datum) => {
    const sectionAreaValue = calculateAreaValue(datum, inputUnit);
    const actionAdjustmentFactor = datum.action === action.ADD ? 1 : -1;
    const updatedTotal = result + actionAdjustmentFactor * sectionAreaValue;
    return updatedTotal;
  }, 0);
};

const generateCostTotal = (areaTotalValue, costPerUnitArea) => {
  const parsedCostPerUnitArea = parseValue(costPerUnitArea);
  return areaTotalValue * parsedCostPerUnitArea;
};

export const generateSummaryValues = appAtom => {
  const { jobName, inputUnit, costPerUnitArea, sectionData } = appAtom;
  const areaTotalValue = generateAreaTotal(sectionData, inputUnit);
  const costTotal = generateCostTotal(areaTotalValue, costPerUnitArea);

  return {
    name: jobName,
    areaTotal: areaTotalValue.toFixed(2),
    costTotal: costTotal.toFixed(2),
  };
};
