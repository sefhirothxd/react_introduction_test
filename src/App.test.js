import { render, screen, fireEvent } from '@testing-library/react';
import Formulario from './components/Formulario';
import Probando from './components/Probando';

describe('Probando el contador', () => {
  test('probando si el contador inicia en 0', () => {
    render(<Probando />);
    const contador = screen.getByTestId('contador');
    expect(contador.innerHTML).toEqual('0');
  });
  test('probando snapshots', () => {
    const { container } = render(<Probando />);
    expect(container).toMatchSnapshot();
  });
  test('probando si el contador aumenta en 2', () => {
    render(<Probando />);
    const boton = screen.getByTestId('botton');
    fireEvent.click(boton);
    const contador = screen.getByTestId('contador');
    expect(contador.innerHTML).toEqual('2');
  });
});

describe('Haciendo pruebas al componente formulario', () => {
  test('verificando si existe el titulo Login', () => {
    const title = 'Login';
    const { container, getByText, getByTestId } = render(<Formulario />);

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toEqual(title);
    // toBe se aseguro que sea identico (espacio,etc)
    //ToContent es para verificar si el contenido es el mismo
    //toBeTruthy es para verificar si el elemento existe.
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });
  test('verificando si existe el boton submit', () => {
    const { container, getByTestId } = render(<Formulario />);
    const form = screen.getByRole('form');
    const submit = screen.getByRole('button');
    fireEvent.submit(form);
    expect(submit).toBeTruthy();
  });
  test('verificando si existe el input email y contraseña', () => {
    const inputEmail = 'probando@gmail.com';
    const inputPassword = '123456';
    const { container, getByTestId } = render(<Formulario />);
    //getByRole es para verificar si existe el elemento con el role especificado.
    const form = screen.getByRole('form');
    const email = screen.getByRole('textbox', { name: 'email' });
    const password = screen.getByRole('textbox', { name: 'password' });
    //fireEvent es para simular el evento click.
    //fireEvent.input es para simular el evento input.
    fireEvent.input(email, { target: { value: inputEmail } });
    fireEvent.input(password, { target: { value: inputPassword } });
    //fireEvent.submit es para simular el evento submit.
    fireEvent.submit(form);
    expect(getByTestId('test-email')).toBeTruthy();
    expect(getByTestId('test-password')).toBeTruthy();
  });
});
