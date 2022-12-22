import React, { useEffect } from "react";

function Todo() {
	const [activity, setActivity] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [edit, setEdit] = React.useState({});
	const [todos, setTodos] = React.useState([]);

	useEffect(function () {
		document.title = "Todo Apps";
	});

	function generateId() {
		return Date.now();
	}

	function saveTodoHandler(event) {
		event.preventDefault();

		if (!activity) {
			return setMessage("isi dlu dong");
		}

		setMessage("");

		if (edit.id) {
			const newTodo = {
				...edit,
				activity,
			};

			const editTodoIndex = todos.findIndex(function (todo) {
				return todo.id === edit.id;
			});

			const newTodos = [...todos];
			newTodos[editTodoIndex] = newTodo;

			setTodos(newTodos);

			return canceleditHandler();
		}

		setTodos([
			...todos,
			{
				id: generateId(),
				activity,
				done: false,
			},
		]);
		setActivity("");
	}

	function removeTodoHandler(todoId) {
		const filteredTodos = todos.filter(function (todo) {
			return todo.id !== todoId;
		});

		setTodos(filteredTodos);
		if (edit.id) canceleditHandler();
	}

	function editTodoHandler(todo) {
		setActivity(todo.activity);
		setEdit(todo);
	}

	function canceleditHandler() {
		setEdit({});
		setActivity("");
	}

	function doneTodoHandler(todo) {
		const newTodo = {
			...todo,
			done: todo.done ? false : true,
		};
		const editTodoIndex = todos.findIndex(function (currentTodo) {
			return currentTodo.id === todo.id;
		});

		const newTodos = [...todos];
		newTodos[editTodoIndex] = newTodo;

		setTodos(newTodos);
	}

	return (
		<div className='px-4 pt-5 my-5 text-center border-bottom'>
			<h1 className='display-4 fw-bold'>Simple TODO App</h1>
			{message && <div style={{ color: "red" }}>{message}</div>}
			<form onSubmit={saveTodoHandler}>
				<div className='input-group mb-3'>
					<input
						type='text'
						placeholder='Nama aktifitas'
						value={activity}
						className='form-control'
						onChange={function (event) {
							setActivity(event.target.value);
						}}
					/>
					<button type='submit' className='btn btn-outline-secondary'>
						{edit.id ? "Simpan" : "Submit"}
					</button>
					{edit.id && (
						<button onClick={canceleditHandler} className='btn btn-outline-dark'>
							Batal Edit
						</button>
					)}
				</div>
			</form>
			{todos.length > 0 ? (
				<ul className='list-group'>
					{todos.map(function (todo) {
						return (
							<li key={todo.id} className='list-group-item'>
								<input
									className='form-check-input me-1'
									type='checkbox'
									checked={todo.done}
									onChange={doneTodoHandler.bind(this, todo)}
									id='list'
								/>
								<label class='form-check-label stretched-link' for='list'>
									{todo.activity}({todo.done ? "Selesai" : "Belum Selesai"})
								</label>
								<button
									onClick={editTodoHandler.bind(this, todo)}
									className='btn btn-outline-secondary btn-sm'>
									Edit
								</button>
								<button
									onClick={removeTodoHandler.bind(this, todo.id)}
									className='btn btn-outline-danger btn-sm'>
									Hapus
								</button>
							</li>
						);
					})}
				</ul>
			) : (
				<i>Kosong</i>
			)}
		</div>
	);
}

export default Todo;
