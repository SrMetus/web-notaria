import { google } from 'googleapis';

const sendEmail = async (formData) => {
  // Configura las credenciales desde el archivo JSON descargado
  const credentials = require('./ruta/a/tus-credenciales.json');
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Configura el token de acceso con las credenciales almacenadas
  oAuth2Client.setCredentials({ refresh_token: 'TU_REFRESH_TOKEN' });

  // Datos del formulario
  const { nombre, correo, asunto, mensaje } = formData;

  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'tucorreo@gmail.com',
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken: 'TU_REFRESH_TOKEN',
        accessToken: accessToken,
      },
    });

    // Configura el contenido del correo
    const mailOptions = {
      from: 'tucorreo@gmail.com',
      to: 'destinatario@example.com',
      subject: asunto,
      text: `De: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
    };

    // Envía el correo electrónico
    await transport.sendMail(mailOptions);
    console.log('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo', error);
  }
};
