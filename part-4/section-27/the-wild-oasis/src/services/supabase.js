import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://qxuqupbjxmddadfmeqas.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dXF1cGJqeG1kZGFkZm1lcWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MDcxNzksImV4cCI6MjAzNDI4MzE3OX0.VOP-XJo8RvcrLJomOcAlXfy1eKjP5epdLxbLgbK6t20';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
