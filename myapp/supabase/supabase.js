import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jcosngxktlyaxgfovqeo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impjb3NuZ3hrdGx5YXhnZm92cWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5NDM5ODMsImV4cCI6MjA0MjUxOTk4M30.kS-kCBtgWzfyCM1zmCQzTqaveGc2RgmbQ2ODsuv0ikc"
export const supabase = createClient(supabaseUrl, supabaseKey)