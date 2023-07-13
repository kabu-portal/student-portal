// @ts-nocheck
import { supabase } from '$lib/supabaseClient';
import { writable } from 'svelte/store';

// this stores all students globally
export const students = writable([]);

// load all students

export async function fetchStudents() {
	let { data, error } = await supabase.from('students').select('*');
	if (error) {
		console.error(error);
	}

	// update the global store of student records
	students.set(data);
}
