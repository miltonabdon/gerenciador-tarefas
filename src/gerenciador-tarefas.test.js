import { render, screen } from '@testing-library/react';

test('deve rendezir o projeto sem erro', () => {
  render(<GerenciadorTarefas />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
