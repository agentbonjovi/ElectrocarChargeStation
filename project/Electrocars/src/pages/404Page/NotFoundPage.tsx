import { FC } from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import { ROUTES } from "../../Routes";

export const NotFoundPage: FC = () => {
    return (
        <div className="NotFound-container">
            <h1 className="NotFound-title">404</h1>
            <p className="NotFound-message">Страница не найдена</p>
            <Link to={ROUTES.HOME}>Главная</Link>
        </div>
    );
};