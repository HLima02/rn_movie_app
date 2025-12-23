import { Redirect } from 'expo-router';

export default function Home() {
  // const { isSignedIn } = useAuth()
  const isSignedIn = false

  if (isSignedIn) {
    return <Redirect href={'/(root)/(tabs)/home'} />
  }
  
  return <Redirect href="/(auth)/signUp" /> 
}
