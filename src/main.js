import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://ymvckvunaqtimabkkyvn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltdmNrdnVuYXF0aW1hYmtreXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwMDAxNzEsImV4cCI6MjAyNzU3NjE3MX0.zk94CuFyoOIh6bOa8YSUbQCIGTBhcosipTPX2Hc_bY8')


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
