export interface User {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface Appointment {
  time: string;
  booked: boolean;
  user: User | null;
}