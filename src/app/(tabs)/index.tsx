import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { createHomeStyles } from "@/assets/styles/home.styles";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../hooks/useTheme";

import Header from "../../../components/Header";

export default function Index() {

	const { toggleDarkMode, colors } = useTheme();

	const todos = useQuery(api.todos.getTodos);
	console.log(todos);


	const homeStyles = createHomeStyles(colors);

	return (
		<LinearGradient colors={colors.gradients.background} style={homeStyles.container} >
			<StatusBar barStyle={colors.statusBarStyle}/>
			<SafeAreaView style={homeStyles.safeArea}>
				
				<Header />

				<TouchableOpacity onPress={toggleDarkMode}>
					<Text>Toggle the Theme</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</LinearGradient>
	);
}

/*
const createStyles = (colors:ColorScheme) => {

	const styles = StyleSheet.create({
		container: {
			flex: 1,					// flex by default is done in cloumns, use flexDirection to change the direction to rows
			//flexDirection: "row", 
			gap: 40, 
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: colors.bg
		},

		content: {
			fontSize: 22
		},
	});

	return styles;
}


*/