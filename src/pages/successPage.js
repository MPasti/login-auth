import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";

const supabase = createClient(
  "https://fdtnfwnyiknfkxwvcfbq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkdG5md255aWtuZmt4d3ZjZmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDY1NDIsImV4cCI6MjAwNDkyMjU0Mn0.9UmG6GIaDyHQ7qfizkTnR_py_2__vokyiXiBwiqCttA"
);

function Success() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
          console.log(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOut() {
    // eslint-disable-next-line no-unused-vars
    const { error } = await supabase.auth.signOut;

    if (!error) {
      navigate("/");
    }
  }

  return (
    <div className="Success">
      <header className="Success-header">
        {Object.keys(user).length !== 0 ? (
          <>
            <h1>Logado com sucesso</h1>
            <button onClick={signOut}> Sair </button>
          </>
        ) : (
          <>
            <h1> Usuário não logado</h1>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Voltar para login
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default Success;
