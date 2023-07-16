// src/routes/+layout.js
import { supabasePublicKey, supabaseUrl } from '$lib/supabaseClient.js';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';

export const load = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient({
		supabaseUrl: supabaseUrl,
		supabaseKey: supabasePublicKey,
		event: { fetch },
		serverSession: data.session
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};
