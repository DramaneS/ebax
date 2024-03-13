import { IHydroQuebecRate, NewHydroQuebecRate } from './hydro-quebec-rate.model';

export const sampleWithRequiredData: IHydroQuebecRate = {
  id: 5799,
};

export const sampleWithPartialData: IHydroQuebecRate = {
  id: 24494,
};

export const sampleWithFullData: IHydroQuebecRate = {
  id: 28762,
  name: 'gestionnaire entendre intrépide',
};

export const sampleWithNewData: NewHydroQuebecRate = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
