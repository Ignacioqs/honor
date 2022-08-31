import useInput from "./use-input";

const Contacto = () => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.length >= 3 && value.length < 50);

  const {
    value: enteredLastname,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
  } = useInput((value) => value.length >= 3 && value.length < 50);

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPhone,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput((value) => !isNaN(value) && value.length <= 8);

  const {
    value: enteredSubject,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
  } = useInput((value) => value.length >= 20 && value.length < 100);

  return (
    <form className="form">
      <h2>Contáctenos</h2>

      <div className="input">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Máximo 50. Mínimo 3</p>}
      </div>
      <div className="input">
        <label htmlFor="apellidos">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          onChange={lastnameChangeHandler}
          onBlur={lastnameBlurHandler}
          value={enteredLastname}
        />
        {lastnameInputHasError && (
          <p className="error-text">Máximo 50. Mínimo 3</p>
        )}
      </div>
      <div className="input">
        <label htmlFor="correo">Correo</label>
        <input
          type="text"
          id="correo"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">debe incluir @</p>}
      </div>
      <div className="input">
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="text"
          id="telefono"
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
          value={enteredPhone}
        />
        {phoneInputHasError && (
          <p className="error-text">Máximo 8 Dígitos, Todos numéricos</p>
        )}
      </div>
      <div className="asunto">
        <label htmlFor="asunto">Asunto</label>
        <input
          type="text"
          id="asunto"
          onChange={subjectChangeHandler}
          onBlur={subjectBlurHandler}
          value={enteredSubject}
        />
        {subjectInputHasError && (
          <p className="error-text">Máximo 50. Mínimo 20</p>
        )}
      </div>

      <div className="input">
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default Contacto;
