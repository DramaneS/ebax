import { ICustumer, NewCustumer } from './custumer.model';

export const sampleWithRequiredData: ICustumer = {
  id: 8747,
};

export const sampleWithPartialData: ICustumer = {
  id: 31571,
  nameCustumer: 'serviable blesser partout',
  adress: 'plaire',
  email: 'Gaston_Faure42@yahoo.fr',
};

export const sampleWithFullData: ICustumer = {
  id: 3814,
  nameCustumer: 'timide de peur que délectable',
  adress: 'par suite de exiger tellement',
  phone: '+33 526281902',
  email: 'Herbert25@yahoo.fr',
};

export const sampleWithNewData: NewCustumer = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
