import React, { useEffect, useState } from 'react';
import { supabase } from './supabase/supabase';
import { SafeAreaView, Text } from 'react-native';
import 'react-native-url-polyfill/auto';

function App(): React.JSX.Element {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: users, error } = await supabase.from('users').select('*').limit(1);
      if (error) {
        console.error('Error fetching user:', error);
      } else {
        console.log('User data:', users);  // Log to verify connection
        setUser(users ? users[0] : null);  // Set the first user if available
      }
    };

    fetchUser();
  }, []);

  return (
    <SafeAreaView>
      {user ? (
        <Text>First User: {user.username} - {user.role}</Text>  // Display basic info
      ) : (
        <Text>Loading or no user data available</Text>       // Fallback message
      )}
    </SafeAreaView>
  );
}

export default App;