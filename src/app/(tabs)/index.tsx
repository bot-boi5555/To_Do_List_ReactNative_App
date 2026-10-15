import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import { createHomeStyles } from "@/assets/styles/home.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, FlatList, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../hooks/useTheme";

import { Text, View } from "react-native";
import EmptyState from "../../../components/EmptyState";
import Header from "../../../components/Header";
import LoadingSpinner from "../../../components/LoadingSpinner";
import TodoInput from "../../../components/TodoInput";

import { Doc, Id } from "../../../convex/_generated/dataModel";

import { Ionicons } from "@react-native-vector-icons/ionicons";
import { useState } from "react";


type Todo = Doc<"todos">



export default function Index() {

	const { colors } = useTheme();

	const todos = useQuery(api.todos.getTodos);
	console.log(todos);

	const toggleTodo = useMutation(api.todos.toggleTodo);
	const deleteTodo = useMutation(api.todos.deleteTodo);
	const updateTodo = useMutation(api.todos.updatedTodo);

	const homeStyles = createHomeStyles(colors);

	const isLoading = (todos === undefined);

	const [editingId, setEditingId] = useState<Id<"todos"> | null>(null);
	const [editText, setEditText] = useState("");

	if (isLoading) {
		return (
			<LoadingSpinner />
		)
	}


	const handleToggleTodo = async (id:Id<"todos">) => {

		try {

			toggleTodo({todoId: id});

		}
		catch (Error) {
			console.log("Failed to toggle todo.", Error);
			Alert.alert("Error", "Failed to toggle todo.");
		}

	}


	const handleDeleteTodo = async (id:Id<"todos">) => {

		Alert.alert(
			"Delete Todo",
			"Are you sure you want to delete this todo?", 
			[
				{text: "Cancel", style: "cancel"},
				{text: "Delete", style: "destructive", onPress: () => deleteTodo({ todoId: id }) }
			]);

	}


	const handleEditTodo = (todo:Todo) => {

		setEditText(todo.text);
		setEditingId(todo._id);



	} 


	const handleSaveEdit = async () => {

		if (editingId) {

			try{
				await updateTodo({todoId: editingId, newText: editText});
				
				setEditingId(null);
				setEditText("");
			}
			catch (Error) {
				console.log("Failed to update todo.", Error);
				Alert.alert("Error", "Failed to update todo.");
			}

		}

	} 


	const handleCancelSave = () => {
		
		setEditText("");
		setEditingId(null);
	
	}
	 


	const renderTodoItem = ({item}: {item:Todo}) => {
		
		const isEditing = (editingId === item._id);

		return (
			<View style={homeStyles.todoItemWrapper}>

				<LinearGradient 
					colors={colors.gradients.surface} 
					style={homeStyles.todoItem}
					start={{x: 0, y: 0}}
					end={{x: 1, y: 1}}
					>
					
					{/* Checkmark */}
					<TouchableOpacity 
						style={homeStyles.checkbox}
						activeOpacity={0.7}
						onPress={() => handleToggleTodo(item._id) }
					>
						
						<LinearGradient
							colors={(item.isCompleted ? colors.gradients.success : colors.gradients.muted)}

							style={[homeStyles.checkboxInner, {borderColor: (item.isCompleted ? "Transparent" : colors.border)}]}
						>
							
							{
								item.isCompleted &&
								<Ionicons name="checkmark" size={18} color="#ffffff" />
							}

						</LinearGradient>

					</TouchableOpacity>

					{isEditing ? 
					(
						<View style={homeStyles.editContainer}>
							
							<TextInput 
							style={homeStyles.editInput}
							value={editText}
							onChangeText={setEditText}
							autoFocus
							placeholder="Edit your todo"
							placeholderTextColor={colors.textMuted}
							/>

							<View style={homeStyles.editButtons}>
								
								<TouchableOpacity
									onPress={handleSaveEdit}
									activeOpacity={0.8}
								>

									<LinearGradient
										colors={colors.gradients.success}
										style={homeStyles.editButton}	
									>
										<Ionicons name="checkmark" size={16} color="#ffffff"/>
										
										<Text style={homeStyles.editButtonText}>
											Save
										</Text>

									</LinearGradient>

								</TouchableOpacity>

								<TouchableOpacity
									onPress={handleCancelSave}
									activeOpacity={0.8}
								>

									<LinearGradient
										colors={colors.gradients.danger}
										style={homeStyles.editButton}
									>

										<Ionicons name="close" size={16} color="#ffffff" />

										<Text style={homeStyles.editButtonText}>
											cancel
										</Text>

									</LinearGradient>

								</TouchableOpacity>
								

							</View>

						</View>
					) : 
					(
						<View style={homeStyles.todoTextContainer}>

							<Text 
								style={
									[
										homeStyles.todoText, 
										item.isCompleted && {
											textDecorationLine: "line-through",
											color:				colors.textMuted,
											opacity:			0.6
										}
									]}
							>
								
								{item.text}

							</Text>

							<View style={homeStyles.todoActions}>
								
								{/* update todo */}
								<TouchableOpacity 
									onPress={() => handleEditTodo(item)}
									activeOpacity={0.6}
								>

									<LinearGradient 
										colors={colors.gradients.warning} 
										style={homeStyles.actionButton}
									>

										<Ionicons name="pencil" size={14} color="#ffffff" />

									</LinearGradient>

								</TouchableOpacity>

								{/* delete todo */}
								<TouchableOpacity 
									onPress={ () => handleDeleteTodo(item._id) }
									activeOpacity={0.6}
								>

									<LinearGradient 
										colors={colors.gradients.danger} 
										style={homeStyles.actionButton}
									>

										<Ionicons name="trash" size={14} color="#ffffff" />

									</LinearGradient>

								</TouchableOpacity>

							</View>


						</View>
					)
					}

					

				</LinearGradient>

			</View>
		)

	}

	return (
		<LinearGradient colors={colors.gradients.background} style={homeStyles.container} >
			<StatusBar barStyle={colors.statusBarStyle}/>
			<SafeAreaView style={homeStyles.safeArea}>
				
				<Header />
				
				<TodoInput />

				{/* FlatList renders only the items that are visible on the screen. */ }
				<FlatList 
					data={todos}
					renderItem={ renderTodoItem }
					keyExtractor={ (item) => (item._id) }
					style={homeStyles.todoList}
					contentContainerStyle={homeStyles.todoListContent}
					ListEmptyComponent={<EmptyState/>}	//when the list is empty, the empty sate component in the components file will be displayed
					//showsVerticalScrollIndicator={false} // this removes the scrollbar
				/>
				
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