import dayjs from 'dayjs/esm';

import { IProject, NewProject } from './project.model';

export const sampleWithRequiredData: IProject = {
  id: 20304,
};

export const sampleWithPartialData: IProject = {
  id: 13514,
  numberHousingUnits: 'redonner',
  hydroQuebecContractNumber: 'songer également près de',
  specifyMeteIntended: 'juriste',
  hydroQuebecAccountNumber: 'extrêmement hors de',
  fileNumber: 'police',
  typeBuillding: 'cocorico insuffisamment',
  endDateWork: dayjs('2024-03-12T19:57'),
};

export const sampleWithFullData: IProject = {
  id: 16318,
  nameBuilding: 'dresser',
  fullAddressBuilding: 'contre',
  numberHousingUnits: 'bien sombre téméraire',
  electricitySupplier: 'occuper',
  hydroQuebecContractNumber: 'hé propre trop',
  hydroQuebecMeterNumber: 'commis de cuisine étant donné que trop peu',
  ifSeveralMeters: true,
  specifyMeteIntended: 'naguère boum',
  hydroQuebecAccountNumber: 'arrière',
  fileNumber: 'au point que de façon à ce que délégation',
  typeBuillding: 'circuler',
  natureProject: 'en guise de',
  startDateWork: dayjs('2024-03-12T15:38'),
  endDateWork: dayjs('2024-03-13T08:04'),
};

export const sampleWithNewData: NewProject = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
