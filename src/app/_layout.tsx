import { Stack } from "expo-router";

export default function RootLayout() {
  return (
	<Stack screenOptions={{headerShown: false}}> 
		<Stack.Screen name="(tabs)" />
		
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


