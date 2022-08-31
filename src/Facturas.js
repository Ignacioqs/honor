import useInput from "./use-input";

const Facturas = () => {
  const {
    value: enteredId,
    hasError: idInputHasError,
    valueChangeHandler: idChangeHandler,
    inputBlurHandler: idBlurHandler,
  } = useInput((value) => value.length >= 10 && value.length < 20);

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
    value: enteredLastname2,
    hasError: lastname2InputHasError,
    valueChangeHandler: lastname2ChangeHandler,
    inputBlurHandler: lastname2BlurHandler,
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
    value: enteredInvoice,
    hasError: invoiceInputHasError,
    valueChangeHandler: invoiceChangeHandler,
    inputBlurHandler: invoiceBlurHandler,
  } = useInput((value) => value.length >= 3 && value.length < 50);

  return (
    <form className="form">
      <h2>Activa tu factura</h2>
      <div className="radio">
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Option 1</label>

        <input type="radio" id="contactChoice2" name="contact" value="phone" />
        <label for="contactChoice2">Option 2</label>
      </div>

      {/* /// */}

      <div className="input">
        <label htmlFor="id">Número de Identificación</label>
        <input
          type="text"
          id="id"
          onChange={idChangeHandler}
          onBlur={idBlurHandler}
          value={enteredId}
        />
        {idInputHasError && <p className="error-text">Máximo 20. Mínimo 10</p>}
      </div>
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
        <label htmlFor="apellido1">Apellido 1</label>
        <input
          type="text"
          id="apellido1"
          onChange={lastnameChangeHandler}
          onBlur={lastnameBlurHandler}
          value={enteredLastname}
        />
        {lastnameInputHasError && (
          <p className="error-text">Máximo 50. Mínimo 3</p>
        )}
      </div>
      <div className="input">
        <label htmlFor="apellido2">Apellido 2</label>
        <input
          type="text"
          id="apellido2"
          onChange={lastname2ChangeHandler}
          onBlur={lastname2BlurHandler}
          value={enteredLastname2}
        />
        {lastname2InputHasError && (
          <p className="error-text">Máximo 50. Mínimo 3</p>
        )}
      </div>
      <div className="input provincia">
        <label htmlFor="provincia">Provincia</label>
        <select name="provincia" id="provincia">
          <option value="">Escoger Provincia</option>
          <option value="uno">San José</option>
          <option value="dos">Heredia</option>
          <option value="tres">Alajuela</option>
          <option value="cuatro">Cartago</option>
        </select>
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
        <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
        <input type="date" name="party" min="1900-01-01" max="2022-04-30" />
      </div>
      <div className="input">
        <label htmlFor="Numero">Numero de Teléfono</label>
        <input
          type="text"
          id="Numero"
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
          value={enteredPhone}
        />
        {phoneInputHasError && (
          <p className="error-text">Máximo 8 Dígitos, Todos numéricos</p>
        )}
      </div>
      <div className="input provincia">
        <label htmlFor="lugar">Lugar de Compra</label>
        <select name="lugar" id="lugar">
          <option value="">Escoger Provincia</option>
          <option value="uno">San José</option>
          <option value="dos">Heredia</option>
          <option value="tres">Alajuela</option>
          <option value="cuatro">Cartago</option>
        </select>
      </div>
      <div className="input">
        <label htmlFor="numeroFactura">Numero de Factura</label>
        <input
          type="text"
          id="lugar"
          onChange={invoiceChangeHandler}
          onBlur={invoiceBlurHandler}
          value={enteredInvoice}
        />
        {invoiceInputHasError && (
          <p className="error-text">(Máximo 50. Mínimo 3)</p>
        )}
      </div>
      <div className="input">
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default Facturas;
