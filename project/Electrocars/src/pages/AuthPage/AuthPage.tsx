import "./AuthPage.css";
import { FC, FormEvent, useState } from "react";
import { Container, Card , Form, Button} from "react-bootstrap";
import { ROUTES } from "../../Routes";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/index.ts";
import { getUser } from "../../store/user/slice";

export const AuthPage: FC = () => {
  const dispatch = useAppDispatch();
  const [username, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitUser = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(getUser({username, password}))
    navigate(ROUTES.STATIONS) 

};

  return (
    <Container id="auth-page">
      <Card className="auth-page">
        <Card.Title className="largeText">Вход</Card.Title>
        <Card.Body className="card-body">
        <Form onSubmit={submitUser} className="login-form">
            <Form.Group className="mb-3" controlId="formLogin">
                <Form.Label>Логин</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Введите логин"
                    value={username}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="secondary" type="submit" className="login">
                Войти
            </Button>
            <Card.Link as={Link} to={ROUTES.REGISTRATION}>Регистрация</Card.Link>
        </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};