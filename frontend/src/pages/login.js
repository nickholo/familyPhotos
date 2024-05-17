import React from "react";
import AuthForm from "../components/authform";

export default function Login() {
    return (
        <>
          <main>
            <AuthForm authType = {"login"}/>
          </main>
        </>
      );
}