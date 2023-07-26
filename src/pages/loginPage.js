import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import "../App.css";

const supabase = createClient(
  "https://fdtnfwnyiknfkxwvcfbq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkdG5md255aWtuZmt4d3ZjZmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDY1NDIsImV4cCI6MjAwNDkyMjU0Mn0.9UmG6GIaDyHQ7qfizkTnR_py_2__vokyiXiBwiqCttA"
);

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      // vai para o sucesso
      navigate("/success");
    } else {
      // vai para a tela de login
      navigate("/");
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["discord"]}
        />
      </header>
    </div>
  );
}

export default Login;
