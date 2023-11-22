import React from "react";
import "../styles/footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <p>&copy; 2023 Notaria Carlos Wendt Gaggero</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <p>Calle Prat #856 Valparaiso</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
