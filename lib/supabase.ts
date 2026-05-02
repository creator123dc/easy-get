import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    "https://eikrugcbwmhtwwjdnnhg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpa3J1Z2Nid21odHd3amRubmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5MzI4MzUsImV4cCI6MjA5MjUwODgzNX0.9gq0VRBjnGUfQkR3WxOW61VFrYUG1qu-q5xkiKo9pZU"
)

export default supabase
