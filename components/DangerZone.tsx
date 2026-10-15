import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../hooks/useTheme";





function DangerZone() {

	const {colors} = useTheme();

	const settingsStyles = createSettingsStyles(colors);

	const clearAllTodos = useMutation(api.todos.deleteAllTodos);

	const handleResetApp = async () => {
		Alert.alert(
			"Remove All Todos", 
			"WARNING!\nThis action will delete ALL your todos permanently.\nThis action cannot be undone!",
			[
				{
					text: "Cancel", 
					style: "cancel"
				},
				{
					text: "Delete All",
					style: "destructive",
					onPress: async () => {
						try {
							const deletedCountObj = await clearAllTodos(); 

							Alert.alert(
								"Deletion Successful",
								`Successfully Deleted ${deletedCountObj.deletedCount} todo${deletedCountObj.deletedCount === 1 ? "": "s" }. \nYour app has been reset.`
							)

						}
						catch (Error) {
							console.log("Failed to delete todos.", Error);
							Alert.alert("Failed to delete todos.");
						}
					} 
				}
			]
		);
	}


	return (
		<LinearGradient 
			colors={colors.gradients.surface}
			style={settingsStyles.section}
		>
			<Text style={settingsStyles.sectionTitleDanger}>
				Danger Zone!
			</Text>

			<TouchableOpacity
				style={[settingsStyles.actionButton, {borderBottomWidth: 1}]}
				onPress={handleResetApp}
				activeOpacity={0.7}
			>

				<View style={settingsStyles.actionLeft}>

					<LinearGradient 
						colors={colors.gradients.danger}
						style={settingsStyles.actionIcon}	
					>
						<Ionicons name="trash" size={18} color="#ffffff"/>

					</LinearGradient>

					<Text style={settingsStyles.actionTextDanger}>
						Remove All Todos
					</Text>

				</View>

				<Ionicons name="chevron-forward" size={18} color={colors.textMuted}/>

			</TouchableOpacity>

			
		</LinearGradient>
	)

}


export default DangerZone