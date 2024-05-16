import React from "react";
import AuthForm from "./components/authform";

export default function Signup() {
    return (
        <>
          <header>
            <NavBar />
          </header>
          <main>
            <h1>Hologroski-Tipney Family Through The Years</h1>
            <AuthForm authType = {"signup"}/>
          </main>
        </>
      );
}