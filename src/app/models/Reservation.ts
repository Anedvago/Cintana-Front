import { Customer } from './Customer';
import { Room } from './Room';
import { Service } from './Service';

export interface Reservation {
  id: number;
  Customers: Customer;
  Rooms: Room;
  Services: Service[];
  start: string;
  end: string;
  title?: string;
  total: number;
  paid: number;
  wayToPay: string;
  /*   customer: 1; */
  /*   room: string; */
}
