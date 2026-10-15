import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import { useTheme } from "../hooks/useTheme";


function DangerZone() {

	const {colors} = useTheme();

	const settingsStyles = createSettingsStyles(colors);


	return (
		<LinearGradient 
			colors={colors.gradients.surface}
			style={settingsStyles.section}
		>
			<Text style={settingsStyles.sectionTitleDanger}>
				Danger Zone!
			</Text>

			
		</LinearGradient>
	)

}


export default DangerZone