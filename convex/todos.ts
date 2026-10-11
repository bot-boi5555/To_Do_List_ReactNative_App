import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTodos = query({
	
	handler: async (context) => {
		
		const todos = await context.db.query("todos").order("desc").collect();

		return todos;
	} 

});


export const addTodo = mutation({

	args: {todoText: v.string()},

	handler: async (context, args) => {
		// insert todoText into todos table, returns table id
		const todoId = await context.db.insert("todos", {

			text: 			args.todoText,
			isCompleted:	false 
		
		});

		return todoId;
	}

});


export const toggleTodo = mutation({

	args: {
		id: v.id("todos")
	},

	handler: async (context, args) => {
		
		const todo = await context.db.get(args.id);

		if (!todo) {
			throw new ConvexError("Todo not found.");
		}

		// patch is used to update
		await context.db.patch("todos", args.id, {
			isCompleted: !todo.isCompleted
		});

	}

});


export const deleteTodo = mutation({

	args: {todoId: v.id("todos")},

	handler: async (context, args) => {
		await context.db.delete(args.todoId);
	}

});


export const updatedTodo = mutation({
	
	args: {
		id: 	v.id("todos"), 
		newText: 	v.string()
	}, 
	
	handler: async (context, args) => {
		
		const todo = await context.db.get(args.id);

		if (!todo) {
			throw new ConvexError("Todo not found.");
		}

		await context.db.patch("todos", args.id, {
			text: args.newText
		});

	}

});


export const deleteAllTodos = mutation({

	handler: async (context) => {

		const todos = await context.db.query("todos").collect();

		for(const todo of todos) {
			await context.db.delete("todos", todo._id);
		}

		return {deletedCount: todos.length}
	}

});