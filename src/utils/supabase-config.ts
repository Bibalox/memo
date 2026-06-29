import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const initSupabase = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  if (session) return

  const { error } = await supabase.auth.signInAnonymously()
  if (error) throw error
}
