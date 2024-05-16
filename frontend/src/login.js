import React from "react";
import AuthForm from "./components/authform";

export default function Login() {
    return (
        <>
          <header>
            <NavBar />
          </header>
          <main>
            <h1>Hologroski-Tipney Family Through The Years</h1>
            <AuthForm authType = {"login"}/>
          </main>
        </>
      );
}