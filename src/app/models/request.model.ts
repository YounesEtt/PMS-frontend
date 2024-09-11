export interface Item {
  id_items?: number;
  pn: string;
  quantity: number | null;
  unitofquantity: string;
  unitvaluefinance: number | null;
  description: string;
  costcenter: string;
  businessunit: string;
  plant: string;
}
export interface CreateRequest {
  requestNumber?: number;
  invoicesTypes?: string;
  shippingPoint?: string;
  deliveryAddress?: string;
  incoterm?: string;
  operationtype? : string;
  userId?: number;
  scenarioId?: number;
  dhlAccount?: string;
  htsCode?: string;
  coo?: string;
  trackingnumber?: string;
  numberofboxes?: string | null;
  weight?: number | null;
  created_at?: Date;
  status?: string;
  invoiceAddress?: string;
  exporterAddress?: string;
  shippedvia?: string;
  modeoftransport?: string;
  dimension?:string;
  items: Item[]; 
}
export interface UpdateFinanceRequestDTO {
  userId: number;
  incoterm: string;
  dhlAccount: string;
  items: UpdateItemDTO[];
}

export interface UpdateItemDTO {
  id_items: number;
  unitvaluefinance: number;
}