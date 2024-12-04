import { TodoComponent } from "./todo.component";
import { fireEvent, render, screen } from "@testing-library/angular";

describe('TodoComponent', () => {
  let component: TodoComponent;

  beforeEach(async() => {
    await render(TodoComponent);
  });

  it('should add a task to the list', () => {
		const newTaskInput = screen.getByRole('textbox');
		const addTaskButton = screen.getByRole('button');

		fireEvent['input'](newTaskInput, {target : {value : 'New Task'}});
		fireEvent['click'](addTaskButton);

		const newTask = screen.getByRole('listitem');
		expect(newTask.textContent).toBe('New Task');
  });

  it('should not add an empty task', () => {
		const addTaskButton = screen.getByRole('button');
		fireEvent['click'](addTaskButton);

		const notExistingNewTask = screen.queryByRole('listitem')!;
		expect(notExistingNewTask).toBe(null);
  });
});
