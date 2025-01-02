import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = 'https://lvdtxlrdkimynkfwfupo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2ZHR4bHJka2lteW5rZndmdXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwNjk5NzAsImV4cCI6MjAxOTY0NTk3MH0.PzqFyqKqQqQsJYp9hEHtQw2zRPJNGUl_LN0kKDLNHtI';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: localStorage,
  },
  global: {
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`
    }
  }
});