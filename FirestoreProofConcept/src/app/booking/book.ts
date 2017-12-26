export interface Book {
  id?: string;
  requirements: string;
  start_date: Date;
  end_date: Date;
  status: string;
  userData?: any;
  user: any;
}
