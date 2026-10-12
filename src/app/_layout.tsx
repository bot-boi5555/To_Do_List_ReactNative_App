import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "../../hooks/useTheme";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (

	<ConvexProvider client={convex}>
		<ThemeProvider>
			<SafeAreaProvider>
				<Stack screenOptions={{headerShown: false}}> 
					<Stack.Screen name="(tabs)" />
				
				</Stack>
			</SafeAreaProvider>
		</ThemeProvider>
	</ConvexProvider>
	
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


