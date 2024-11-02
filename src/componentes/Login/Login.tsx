
const Login = () => {
  return (
    <div >
    <div >
      <form >
        <div >
          <p>Usuario</p>
          <input
            type="text"
         
            required
          />
        </div>
        <div >
          <p>Contraseña</p>
          <input
            type="password"
            required
          />
        </div>
        <div >
          <div >
            <button type="submit">
              Iniciar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login