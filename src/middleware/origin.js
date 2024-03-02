// Verify the session
const checkSession = () => {
  const headerAuth = req.headers.authorization || '';
  const token = headerAuth.split(' ').pop(); // Devuelve el ultimo valor que es el token

  if (!token) {
    res.status(405)
    res.send({ error: 'Token does not exist' })
  }
}

module.exports = { checkSession }