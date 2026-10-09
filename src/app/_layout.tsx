import { Stack } from "expo-router";

export default function RootLayout() {
  return (
	<Stack> 
		<Stack.Screen name="index" options={{title: "Home"}} />
		<Stack.Screen name="about" options={{title: "About Screen"}} />
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


