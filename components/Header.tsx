import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

import { createHomeStyles } from "@/assets/styles/home.styles";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

function Header() {

	const { colors } = useTheme();

	const homeStyles = createHomeStyles(colors);

	const todos = useQuery(api.todos.getTodos);
	const completedTodos = (todos) ? todos.filter((todo) => todo.isCompleted) : [];
	
	const completedCount = completedTodos.length;
	const totalCount = (todos) ? todos.length : 0;


	const percentCompleted = (totalCount > 0) ? completedCount / totalCount * 100 : 0;


	return (
		<View style={homeStyles.header}>

			<View style={homeStyles.titleContainer}>
				
				<LinearGradient colors={colors.gradients.primary} style={homeStyles.iconContainer}>
					<Ionicons name="flash-outline" size={28} color="#ffffff" />
				</LinearGradient>

				<View style={homeStyles.titleTextContainer}>
					<Text style={homeStyles.title}>
						Today's Tasks:
					</Text>
					<Text style={homeStyles.subtitle}>
						{completedCount} of {totalCount} completed.
					</Text>
				</View>

			</View>

			
			<View style={homeStyles.progressContainer} >
				<View style={homeStyles.progressBarContainer}>
					<View style={homeStyles.progressBar}>

						{/*Using gradiant as a progress bar. Use array in styles for dynamic values in js (Ex fill percentage)*/}
						<LinearGradient 
							colors={colors.gradients.success}
							style={[homeStyles.progressFill, {width: `${percentCompleted}%`}]}
						/>

					</View>	

					<View>
						<Text style={homeStyles.progressText}>
							{Math.round(percentCompleted)}%
						</Text>
					</View>

				</View>
			</View> 

		</View>
	);
	
}

export default Header;