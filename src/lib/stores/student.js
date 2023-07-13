// @ts-nocheck
import { supabase } from '$lib/supabaseClient';

export async function fetchStudentById(student_id) {
	const { data, err } = await supabase.from('students').select('*').eq('id', student_id);
	if (err) {
		console.log(err);
		throw err;
	}
	if (data.length == 0) {
		throw 'This record does not exist';
	}
	return data[0];
}

export async function updateStudent(student) {
	const { data, error } = await supabase
		.from('students')
		.update(student)
		.eq('id', student.id)
		.select();

	if (error) {
		console.log(error);
		throw error;
	}

	return data;
}
