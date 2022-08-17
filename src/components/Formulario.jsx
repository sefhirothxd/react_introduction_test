import React from 'react';

const formulario = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.elements.email.value.trim() === '' ||
      e.target.elements.password.value.trim() === ''
    ) {
      return;
    }
    console.log(e.target.elements.email.value);
    console.log(e.target.elements.password.value);
  };
  return (
    <form
      onSubmit={onSubmit}
      aria-label="form"
      className="flex flex-col gap-2 items-center"
    >
      <h1 data-testid="test-title">Login</h1>
      <input
        data-testid="test-email"
        type="text"
        name="email"
        aria-label="email"
      />
      <input
        aria-label="password"
        data-testid="test-password"
        type="password"
        role={'textbox'}
        name="password"
      />
      <button type="Submit" className="border border-white">
        enviar
      </button>
    </form>
  );
};

export default formulario;
