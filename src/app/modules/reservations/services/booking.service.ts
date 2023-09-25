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

  public async getAllBookings(): Promise<any[] | null> {
    let { data: Rooms, error } = await this.supabaseClient
      .from('Bookings')
      .select('*');
    return Rooms;
  }
}
