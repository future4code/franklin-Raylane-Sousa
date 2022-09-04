export interface InterfaceClientLbn {
    name: string;
    registrationNumber: number; //id 
    consumedEnergy: number; //comsumo
    calculateBill(): number; //totalconta
  }