import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private supabaseClient!: SupabaseClient;
  private supabaseEnvironments: { apiKey: string; url: string } =
    environment.supabase;

  constructor() {
    this.supabaseClient = createClient(
      this.supabaseEnvironments.url,
      this.supabaseEnvironments.apiKey
    );
  }

  public async getBookingsLastMonth(): Promise<any[] | null> {
    const currentDate = new Date();
    const startMonth = `${currentDate.getFullYear()}-${currentDate
      .getMonth()
      .toString()
      .padStart(2, '0')}-01`;
    console.log(startMonth);
    let { data: Rooms, error } = await this.supabaseClient
      .from('Bookings')
      .select('*, Customers(*),Rooms(name),Services(name))')
      .gte('start', startMonth);
    return Rooms;
  }

  public async getBookingById(id: number): Promise<any[] | null> {
    const currentDate = new Date();
    const startMonth = `${currentDate.getFullYear()}-${currentDate
      .getMonth()
      .toString()
      .padStart(2, '0')}-01`;
    console.log(startMonth);
    let { data: Rooms, error } = await this.supabaseClient
      .from('Bookings')
      .select('*, Customers(name),Rooms(name),Services(name))')
      .eq('id', id);
    return Rooms;
  }
}
