import { Tabs } from "expo-router";


function TabsLayout() {
	return (
		<Tabs 
		screenOptions={{}}
		>
			
			<Tabs.Screen 
				name="index"
				options={{
					title: "Todos"
				}}
			/>
			<Tabs.Screen 
				name="settings"
				options={{
					title: "Settings"
				}}
			/>
		
		</Tabs>
	)

}


export default TabsLayout;