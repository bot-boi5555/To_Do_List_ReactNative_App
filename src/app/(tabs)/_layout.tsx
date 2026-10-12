import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from "../../../hooks/useTheme";



function TabsLayout() {

	const {colors} = useTheme();
	const insets = useSafeAreaInsets();
	return (
		<Tabs 
		screenOptions = {{
			tabBarActiveTintColor: colors.primary,
			tabBarInactiveTintColor: colors.textMuted,

			tabBarStyle: {
				backgroundColor: colors.surface,
				borderTopWidth: 1,
				borderTopColor: colors.border,
				height: 60 + insets.bottom,
				paddingBottom: insets.bottom,
				paddingTop: 10
	
			},

			tabBarLabelStyle: {
				fontSize: 12,
				fontWeight: "600"
			},

			headerShown: false

		}}
		>
			
			<Tabs.Screen 
				name="index"
				options={{
					title: "Todos",
					tabBarIcon: ({color, size}) => ( // must be ()
						<Ionicons name="flash-outline" size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen 
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({color, size}) => (
						<Ionicons name="settings" size={size} color={color} />
					)
				}}
			/>
		
		</Tabs>
	)

}


export default TabsLayout;