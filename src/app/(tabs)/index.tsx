import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";

export default function Index() {

	const { toggleDarkMode } = useTheme();

	const todos = useQuery(api.todos.getTodos);
	console.log(todos);

	return (
		<View style={styles.container}>
			<Text style={styles.content}>Hello World</Text>
			<Text>Hi</Text>

			<TouchableOpacity onPress={toggleDarkMode}>
				<Text>Toggle the Theme</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,					// flex by default is done in cloumns, use flexDirection to change the direction to rows
		//flexDirection: "row", 
		gap: 40, 
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: ""
  	},

  	content: {
		fontSize: 22
	},
});
