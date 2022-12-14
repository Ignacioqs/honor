import useInput from "../use-input";
import classes from "./Facturas.module.css";

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
    <form className={classes.form}>
      <h2>Activa tu factura</h2>
      <div className={classes.radio}>
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label htmlFor="contactChoice1">Option 1</label>

        <input type="radio" id="contactChoice2" name="contact" value="phone" />
        <label htmlFor="contactChoice2">Option 2</label>
      </div>

      <div className={classes.input}>
        <label htmlFor="id">N??mero de Identificaci??n</label>
        <input
          type="text"
          id="id"
          onChange={idChangeHandler}
          onBlur={idBlurHandler}
          value={enteredId}
        />
        {idInputHasError && (
          <p className={classes["error-text"]}>M??ximo 20. M??nimo 10</p>
        )}
      </div>
      <div className={classes.input}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className={classes["error-text"]}>M??ximo 50. M??nimo 3</p>
        )}
      </div>
      <div className={classes.input}>
        <label htmlFor="apellido1">Apellido 1</label>
        <input
          type="text"
          id="apellido1"
          onChange={lastnameChangeHandler}
          onBlur={lastnameBlurHandler}
          value={enteredLastname}
        />
        {lastnameInputHasError && (
          <p className={classes["error-text"]}>M??ximo 50. M??nimo 3</p>
        )}
      </div>
      <div className={classes.input}>
        <label htmlFor="apellido2">Apellido 2</label>
        <input
          type="text"
          id="apellido2"
          onChange={lastname2ChangeHandler}
          onBlur={lastname2BlurHandler}
          value={enteredLastname2}
        />
        {lastname2InputHasError && (
          <p className={classes["error-text"]}>M??ximo 50. M??nimo 3</p>
        )}
      </div>
      <div className={`${classes.input} ${classes.provincia}`}>
        <label htmlFor="provincia">Provincia</label>
        <select name="provincia" id="provincia">
          <option value="">Escoger Provincia</option>
          <option value="uno">San Jos??</option>
          <option value="dos">Heredia</option>
          <option value="tres">Alajuela</option>
          <option value="cuatro">Cartago</option>
        </select>
      </div>
      <div className={classes.input}>
        <label htmlFor="correo">Correo</label>
        <input
          type="text"
          id="correo"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={classes["error-text"]}>debe incluir @</p>
        )}
      </div>
      <div className={classes.input}>
        <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
        <input type="date" name="party" min="1900-01-01" max="2022-04-30" />
      </div>
      <div className={classes.input}>
        <label htmlFor="Numero">Numero de Tel??fono</label>
        <input
          type="text"
          id="Numero"
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
          value={enteredPhone}
        />
        {phoneInputHasError && (
          <p className={classes["error-text"]}>
            M??ximo 8 D??gitos, Todos num??ricos
          </p>
        )}
      </div>
      <div className={`${classes.input} ${classes.provincia}`}>
        <label htmlFor="lugar">Lugar de Compra</label>
        <select name="lugar" id="lugar">
          <option value="">Escoger Provincia</option>
          <option value="uno">San Jos??</option>
          <option value="dos">Heredia</option>
          <option value="tres">Alajuela</option>
          <option value="cuatro">Cartago</option>
        </select>
      </div>
      <div className={classes.input}>
        <label htmlFor="numeroFactura">Numero de Factura</label>
        <input
          type="text"
          id="lugar"
          onChange={invoiceChangeHandler}
          onBlur={invoiceBlurHandler}
          value={enteredInvoice}
        />
        {invoiceInputHasError && (
          <p className={classes["error-text"]}>(M??ximo 50. M??nimo 3)</p>
        )}
      </div>
      <div className={classes.input}>
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default Facturas;
