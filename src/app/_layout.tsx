import { Stack } from "expo-router";

export default function RootLayout() {
  return (
	<Stack> 
		<Stack.Screen name="(tabs)" options={{title: "Home"}} />
		
	</Stack>
  );
}


// <Stack screenOptions={{headerShown: false}}/>; to remove the top header

/*
return (
  <Stack> 
	<Stack.Screen name="index" options={{title: "Home"}} />
  </Stack>
  );

	change the screen name


*/


