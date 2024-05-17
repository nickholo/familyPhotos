import React from "react";
import AuthForm from "../components/authform";

export default function Signup() {
    return (
        <>
          <main>
            <AuthForm authType = {"signup"}/>
          </main>
        </>
      );
}