import { IEntreprise, NewEntreprise } from './entreprise.model';

export const sampleWithRequiredData: IEntreprise = {
  id: 18212,
};

export const sampleWithPartialData: IEntreprise = {
  id: 27340,
  companyName: 'tandis que guide',
  isThistaxExemptOrganization: false,
  address: 'quand ? avex',
  phone: '0357868133',
};

export const sampleWithFullData: IEntreprise = {
  id: 8355,
  companyName: 'concurrence',
  companyNeqNumber: 'longtemps foule électorat',
  isThistaxExemptOrganization: true,
  resourcePerson: 'avant que jeune neutre',
  address: 'auprès de tellement',
  email: 'Paterne_Colin@yahoo.fr',
  phone: '+33 360712206',
};

export const sampleWithNewData: NewEntreprise = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
