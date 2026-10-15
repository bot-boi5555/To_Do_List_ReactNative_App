import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../hooks/useTheme";

function SettingsScreen() {

	const [isAutoSync, setIsAutoSync] = useState(true);
	const [isNotificationsEnabled, setisNotificationsEnabled] = useState(true);

	const {colors, isDarkMode, toggleDarkMode} = useTheme();

	const settingsStyles = createSettingsStyles(colors);

	return (
		<SafeAreaView>
			<View>
				
			</View>
			<Text>Settings</Text>
		</SafeAreaView>
	);
}



export default SettingsScreen;