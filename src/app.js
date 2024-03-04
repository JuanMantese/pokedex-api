require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const { router } = require('./routes')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

app.use(cors())
app.use('/v1', router)

const PORT = process.env.PORT || 3000;

// Middleware para mostrar la documentación Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});