import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://sdketomfxcckopnflxcl.supabase.co';
export const supabasePublicKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNka2V0b21meGNja29wbmZseGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyNDQxNTgsImV4cCI6MjAwNDgyMDE1OH0.b4DKrMXD5rpxx5_uN1wmxTc3xalRhiFeVSztfHM2O5w';
export const supabaseServiceRole =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNka2V0b21meGNja29wbmZseGNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4OTI0NDE1OCwiZXhwIjoyMDA0ODIwMTU4fQ.91DJWNx0SEiDRfgtl_WuMhjGdu_8Pj--czw-ymJZs0w';
export const supabaseJwtSecret =
	'ipMopgRumXdKG3K58fFZwwooZR3aZU+7h4Sn4sc60gyH6VMX9lJ3tc+yfc4pULkcv+gOLh19+lHh+T7uGMO3sA==';

export const supabase = createClient(supabaseUrl, supabasePublicKey);
