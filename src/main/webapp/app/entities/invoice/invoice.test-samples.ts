import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 31985,
};

export const sampleWithPartialData: IInvoice = {
  id: 18975,
  nameCustumer: 'police accorder altruiste',
  adress: 'affable avant de',
  phone: '0331717961',
};

export const sampleWithFullData: IInvoice = {
  id: 32086,
  nameCustumer: 'membre de l’équipe miam',
  adress: 'lunatique',
  phone: '0524381993',
  email: 'Eugene_Fontaine@yahoo.fr',
};

export const sampleWithNewData: NewInvoice = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
