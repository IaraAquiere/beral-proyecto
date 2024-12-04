export interface IInvoices {
  id: number,
  estado: string,
  desc_cond: string,
  t_comp: string,
  n_comp: string,
  comprobante: string,
  fecha_emis : Date,
  fecha_emisFormat: string,
  importe: number,
}
