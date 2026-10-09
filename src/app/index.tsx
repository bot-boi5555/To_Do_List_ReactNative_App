import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
	<View style={styles.container}>
		<Text style={styles.content}>Hello World</Text>
		<Text>Hi</Text>

		<Link href={"/about"}>Visit About Screen</Link>

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
		backgroundColor: "cyan"
  	},

  	content: {
		fontSize: 22
	},
});
