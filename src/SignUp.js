function SignUp() {
  return (
    <div>
      <form action="">
        <label for="username" >Username</label>
        <input id="username" type="text" required></input>
        <br></br>
        <label for="password">Password</label>
        <input id="password" type="password" required></input>
        <br></br>
        <label for="repeatPassword">Verify Password</label>
        <input id="repeatPassword" type="password" required></input>
        <br></br>
        <label for="displayName">Display Name</label>
        <input id="displayName" type="text" required></input>
        <br></br>
      </form>
    </div>
  );
}

export default SignUp;