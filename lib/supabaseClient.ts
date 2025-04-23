import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mzlxlrqpxuahjtnojvdq.supabase.co'; // Replace with your Project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16bHhscnFweHVhaGp0bm9qdmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTM5MTYsImV4cCI6MjA2MDk4OTkxNn0.GRiL2zYSBMhR3UuCaLmT_OHg5MKJmUr_AUjPoUUO6j4'; // Replace with your Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
