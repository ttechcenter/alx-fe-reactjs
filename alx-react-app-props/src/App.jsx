import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext, {UserContext.Provider} from './UserContext';

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

function App() {
  return (
    <UserProvider value={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
