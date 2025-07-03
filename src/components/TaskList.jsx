import { Component } from "react";
export default class TaskList extends Component {
    static tasks = [
        { id: 1, text: "Task 1" },
        { id: 2, text: "Task 2" },
        { id: 3, text: "Task 3" },
        { id: 4, text: "Task 4" },
    ];
    handleAddTask = () => {
        const findInput = document.querySelector(".add-task");
        const text = findInput.value;
        if (!findInput) return;
        if (text === "") {
            alert("Field cannot be empty");
        }
        TaskList.tasks.push({
            id: TaskList.tasks.length + 1,
            text,
        });
        findInput.value = "";
        this.forceUpdate();
    };

    handleDeleteButton = (id) => {
        console.log("button");
        TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
        this.forceUpdate();
    };
    render() {
        return (
            <section className="task-list">
                <div>
                    <input className="add-task" type="text" />
                    <button onClick={this.handleAddTask}>Add Task</button>
                </div>
                <ul>
                    {TaskList.tasks.map((task) => (
                        <li key={task.id}>
                            <span>{task.text}</span>
                            <button onClick={() => this.handleDeleteButton(task.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}