import type SocialClient from '$kclient/kclient';
import type { Database } from '$types/database.types';
import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
	type SupaProfile = Database['public']['Tables']['profiles']['Row'];
	type SupaPost = Database['public']['Tables']['posts']['Row'];
	type SupaProfileSettings = Database['public']['Tables']['profiles_settings']['Row'];

	declare namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
			kclient: SocialClient;
		}
		interface PageData {
			session: Session | null;
		}
	}
}
