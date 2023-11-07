import React from "react";

export const Form = () => {
    return (
        <div className="container mt-5 ">
            <h1>Formulario de Contacto</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="correo" name="correo" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="asunto" className="form-label">Asunto</label>
                    <input type="text" className="form-control" id="asunto" name="asunto" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}