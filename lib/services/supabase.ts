import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lopezippyarpyvvaavdd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvcGV6aXBweWFycHl2dmFhdmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNzE5MjMsImV4cCI6MjAwNjY0NzkyM30.WIcs17LtFHF9n4FQaDJxeca2Rv4hvdu97zxKWFHpKZg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
