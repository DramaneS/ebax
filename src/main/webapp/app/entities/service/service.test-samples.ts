import { IService, NewService } from './service.model';

export const sampleWithRequiredData: IService = {
  id: 5581,
};

export const sampleWithPartialData: IService = {
  id: 32042,
  companyName: 'badaboum d’autant que',
  email: 'Virginie.Bonnet@gmail.com',
  plansAllFloorsVentilationPlans: true,
  brandModelVentilationDevices: false,
  brandModelVeaters: true,
  brandModelHotWaterTanks: true,
  brandModelHeatPumpAirConditioningUnits: true,
  typeLighting: false,
  quantityEachModelAndDLCProductID: false,
  checksProvideTechnicalDataSheets: true,
  otherRelevantDevicesCertification: true,
  heatRecoveryGrayWaterSolarOther: true,
};

export const sampleWithFullData: IService = {
  id: 10499,
  nameService: 'oups',
  companyName: 'orange',
  phone: '0390689382',
  email: 'Claudine54@gmail.com',
  plansAllFloorsVentilationPlans: true,
  energySimulationReport: true,
  windowsTechnicalSheetAndUFactor: true,
  completeWallSection: false,
  brandModelVentilationDevices: true,
  brandModelVeaters: true,
  brandModelHotWaterTanks: false,
  brandModelHeatPumpAirConditioningUnits: true,
  typeLighting: false,
  quantityEachModelAndDLCProductID: true,
  checksProvideTechnicalDataSheets: true,
  brandModelPlumbingFixtures: false,
  otherRelevantDevicesCertification: true,
  heatRecoveryGrayWaterSolarOther: false,
};

export const sampleWithNewData: NewService = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
