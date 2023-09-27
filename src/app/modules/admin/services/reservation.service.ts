import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class ReservationService {
  private supabaseClient!: SupabaseClient;
  private supabaseEnvironments: { apiKey: string; url: string } =
    environment.supabase;

  constructor() {
    this.supabaseClient = createClient(
      this.supabaseEnvironments.url,
      this.supabaseEnvironments.apiKey
    );
  }

  public async getReservationsByDay(): Promise<any[] | null> {
    let { data: Rooms, error } = await this.supabaseClient
      .from("Rooms")
      .select("id");

    return Rooms;
  }
}
