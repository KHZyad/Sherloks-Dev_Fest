// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://your-project-url.supabase.co';
// const supabaseAnonKey = 'your-anon-key';

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabase = createClient( 
    "https://diciycznnutwtqxwkuzq.supabase.co", // Your Supabase URL 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpY2l5Y3pubnV0d3RxeHdrdXpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTI3NTc2NSwiZXhwIjoyMDQ0ODUxNzY1fQ.1MRYQI-0kOcvBNmJprVzq3OUKNL-bZBvGPv9ekWtioE" // Replace with your Supabase public key 
  );