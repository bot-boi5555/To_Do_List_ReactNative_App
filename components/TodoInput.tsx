import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

import { useState } from "react";

import { createHomeStyles } from "@/assets/styles/home.styles";
import Ionicons from "@react-native-vector-icons/ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { useTheme } from "../hooks/useTheme";


function TodoInput() {

	const {colors} = useTheme();
	const homeStyles = createHomeStyles(colors);


	const [newTodo, setNewTodo] = useState("");
	
	const addTodo = useMutation(api.todos.addTodo);
	
	const handleAddTodo = async () => {
		
		if (!newTodo.trim()) {
			return;
		}

		try {
			await addTodo({todoText: newTodo.trim()});
			setNewTodo("")
		}
		catch(Error) {
			console.log("Error adding a todo", Error)
			Alert.alert("Error", "Failed to add todo.")
		}

	}


	return (
		<View style={homeStyles.inputSection}>
			
			<View style={homeStyles.inputWrapper}>

				<TextInput 
					style={homeStyles.input}
					placeholder="What needs to be done?"
					value={newTodo}
					onChangeText={setNewTodo} // onChangeText directly passes the string instead of an event object
					onSubmitEditing={handleAddTodo}
					placeholderTextColor={colors.textMuted}
				/>

				<TouchableOpacity 
					onPress={handleAddTodo} 
					activeOpacity={0.8} 
					disabled={!newTodo.trim()}
				>
					<LinearGradient 
						colors={newTodo.trim() ? colors.gradients.primary : colors.gradients.muted}
						style={[homeStyles.addButton, !newTodo.trim() && homeStyles.addButtonDisabled]}	
					>

						<Ionicons name="add" size={24} color="#ffffff" />

					</LinearGradient>


				</TouchableOpacity>
			
			</View>

		</View>
	)

}


export default TodoInput;