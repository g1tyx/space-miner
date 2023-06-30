import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createClient } from '@supabase/supabase-js';

function supabaseClient() {
    const supabaseUrl = 'https://rmmrkvwrgtcfhdwbiayl.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtbXJrdndyZ3RjZmhkd2JpYXlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3Mzg1NTcsImV4cCI6MTk5NTMxNDU1N30.J-shIz6vOjDP6kRgIhOYkZhQsT3JpHkft9nWUH92rcw';
    return createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
            storage: AsyncStorage,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
        },
    });
}

export { supabaseClient };

// Authentication configuration
export const configureAuth = () => {

    const supabase = supabaseClient();

    // Sign up with email and password
    const signUp = async (email, password) => {
        console.log(email, password);
        const { data, error } = await supabase.auth.signUp({
            email: String(email),
            password: String(password),
        });
        if (error) {
           throw error;
        }
        return data;
    };

    // Log in with email and password
    const logIn = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (error) {
            throw error;
        }
        return data;
    };

    // Retrieve user
    const getUser = async () => {
        const data = await supabase.auth.getUser();
        return data;
    };

    // Get session
    const getSession = async () => {
        const { data, error } = await supabase.auth.getSession()
        if (error) {
            throw error;
        }
        return data;
    };

    // Log out
    const logOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            throw error;
        }
    };

    // Reset password
    const resetPassword = async email => {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) {
            throw error;
        }
    };


    supabase.auth.onAuthStateChange((event, session) => {
        //console.log(event, session)
    })

    return {
        signUp,
        logIn,
        logOut,
        getUser,
        getSession,
        resetPassword,
    };
};
