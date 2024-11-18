import { TodoComponent } from "./todo.component";

describe('TodoComponent', () => {
  let component: TodoComponent;

  beforeEach(() => {
    component = new TodoComponent();
  });

  it('should add a task to the list', () => {
    component.addTask('New Task');
    expect(component.tasks).toContain('New Task');
  });

  it('should not add an empty task', () => {
    component.addTask('');
    expect(component.tasks.length).toBe(0);
  });
});
