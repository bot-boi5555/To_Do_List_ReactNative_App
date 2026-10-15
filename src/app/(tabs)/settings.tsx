import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../hooks/useTheme";

import ProgressStats from "../../../components/ProgressStats";

function SettingsScreen() {

	const [isAutoSync, setIsAutoSync] = useState(true);
	const [isNotificationsEnabled, setisNotificationsEnabled] = useState(true);

	const {colors, isDarkMode, toggleDarkMode} = useTheme();

	const settingsStyles = createSettingsStyles(colors);

	return (
		
			
		<LinearGradient
			colors={colors.gradients.background}
			style={settingsStyles.container}
		>

			<SafeAreaView style={settingsStyles.safeArea}>
				
				{/* Settings Header */}

				<View style={settingsStyles.header}>
					
					<View style={settingsStyles.titleContainer}>
						
						<LinearGradient 
						colors={colors.gradients.primary}
						style={settingsStyles.iconContainer}
						>
						
							<Ionicons name="settings" size={28} color="#ffffff"/>

						</LinearGradient>

						<Text style={settingsStyles.title}>
							Settings
						</Text>

					</View>

				</View>

				<ScrollView
					style={settingsStyles.scrollView}
					contentContainerStyle={settingsStyles.content}
					showsVerticalScrollIndicator={false}
				>

					<ProgressStats />

				</ScrollView>

			</SafeAreaView>

		</LinearGradient>

		
	);
}



export default SettingsScreen;