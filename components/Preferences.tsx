import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Switch, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

import { Ionicons } from "@react-native-vector-icons/ionicons";
import { useState } from "react";


function Preferences() {

	const [isAutoSync, setIsAutoSync] = useState(true);
	const [isNotificationsEnabled, setisNotificationsEnabled] = useState(true);

	const {colors, toggleDarkMode, isDarkMode} = useTheme();
	const settingsStyles = createSettingsStyles(colors);

	return (
		<LinearGradient
			colors={colors.gradients.surface}
			style={settingsStyles.section}
		>
			<Text style={settingsStyles.sectionTitle}>
				Preferences
			</Text>

			{/* Dark mode */}
			<View style={settingsStyles.settingItem}>

				<View style={settingsStyles.settingLeft}>

					<LinearGradient
						colors={colors.gradients.primary}
						style={settingsStyles.settingIcon}
					>
						<Ionicons name="moon" size={18} color="#ffffff" />

					</LinearGradient>

					<Text style={settingsStyles.settingText}>
						Darkmode
					</Text>

				</View>

				{/*To toggle darkmode */}
				<Switch 
					value={isDarkMode}
					onValueChange={toggleDarkMode}
					thumbColor={"#ffffff"}
					trackColor={{false: colors.border, true: colors.primary}}
					ios_backgroundColor={colors.border} // for apple phones
				/>

			</View>

			{/* Notifications */}
			<View style={settingsStyles.settingItem}>

				<View style={settingsStyles.settingLeft}>

					<LinearGradient
						colors={colors.gradients.warning}
						style={settingsStyles.settingIcon}
					>
						<Ionicons name="notifications" size={18} color="#ffffff" />

					</LinearGradient>

					<Text style={settingsStyles.settingText}>
						Notifications
					</Text>

				</View>

				{/*To toggle darkmode */}
				<Switch 
					value={isNotificationsEnabled}
					onValueChange={() => setisNotificationsEnabled(prev => !prev)}
					thumbColor={"#ffffff"}
					trackColor={{false: colors.border, true: colors.warning}}
					ios_backgroundColor={colors.border} // for apple phones
				/>

			</View>

			{/* Auto sync */}
			<View style={settingsStyles.settingItem}>

				<View style={settingsStyles.settingLeft}>

					<LinearGradient
						colors={colors.gradients.success}
						style={settingsStyles.settingIcon}
					>
						<Ionicons name="swap-vertical-outline" size={18} color="#ffffff" />

					</LinearGradient>

					<Text style={settingsStyles.settingText}>
						Auto Sync
					</Text>

				</View>

				{/*To toggle darkmode */}
				<Switch 
					value={isAutoSync}
					onValueChange={() => setIsAutoSync(prev => !prev)}
					thumbColor={"#ffffff"}
					trackColor={{false: colors.border, true: colors.success}}
					ios_backgroundColor={colors.border} // for apple phones
				/>

			</View>

		</LinearGradient>
	)
}


export default Preferences;