import { FC } from "react";
import { Link } from "react-router-dom";
import "./ForbiddenPage.css";

export const ForbiddenPage: FC = () => {
    return (
        <div className="forbidden-container">
            <h1 className="forbidden-title">403</h1>
            <p className="forbidden-message">Доступ запрещён</p>
            <Link className="forbidden-route" to="ROUTES.LOGIN">Авторизоваться</Link>
        </div>
    );
};