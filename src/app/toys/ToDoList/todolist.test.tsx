import { beforeAll, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDoList from './page';

describe('Todo List', () => {
  beforeAll(() => {
    render(<ToDoList />);
  });

  test('the ToDoList UI has the correct elements', () => {
    expect(
      screen.getByRole('heading', { level: 1, name: 'Classic... A ToDo List' })
    ).toBeDefined();
  });

  test('the ToDoList adds valid todos', async () => {
    let user = userEvent.setup();
    let todoInput = screen.getByRole('textbox');
    let addButton = screen.getByText('Add');

    expect(addButton.closest('button')!.disabled).toBe(true);

    await user.type(todoInput, 'Hi');
    expect(addButton.closest('button')!.disabled).toBe(false);
    await user.click(addButton);

    await user.type(todoInput, '  ');
    await user.click(addButton);

    let todos = screen.getAllByRole('list');
    expect(todos.length).to.equal(1);
  });


  test('the ToDoList does not add invalid todos', async () => {
    let user = userEvent.setup();
    let todoInput = screen.getByRole('textbox');
    let addButton = screen.getByText('Add');

    user.clear(todoInput);

    expect(addButton.closest('button')!.disabled).toBe(true);

    await user.type(todoInput, '  ');
    await user.click(addButton);

    let todos = screen.getAllByRole('list');
    expect(todos.length).to.equal(1);
  });
});
