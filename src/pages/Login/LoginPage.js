import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [setUser] = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://tk.oauth.getoboru.xyz/login', {
        method: 'post',
        body: JSON.stringify({ username, password }),
        headers: {'Content-Type': 'application/json'}
      });

      if (!response.ok){
        if (response.status === 401) alert('Kode / PIN Pertandingan Salah');
        else if (response.status === 400) alert('Tidak memasukkan Kode / PIN pertandingan');
        else alert('Terdapat kesalahan pada server, harap kontak admin');
        return;
      }
      const content = await response.json();
      setUser(content)
      localStorage.setItem("user", JSON.stringify(content));
      navigate('/e-wallet');
    } catch(err) {
      alert('Terdapat kesalahan pada server, harap kontak admin');
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}