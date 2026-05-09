// Vetor de usuários
const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    senha: "123456",
    expirado: false
  },
  {
    id: 2,
    nome: "Maria Souza",
    email: "maria@email.com",
    senha: "abc123",
    expirado: true
  },
  {
    id: 3,
    nome: "Carlos Lima",
    email: "carlos@email.com",
    senha: "senha789",
    expirado: false
  }
]

// Função para realizar login
function fazerLogin(email, senha) {

  // Procura usuário pelo email
  const usuarioEncontrado = usuarios.find(usuario => usuario.email === email)

  // Valida se usuário existe
  if (!usuarioEncontrado) {
    return "Usuário não encontrado"
  }

  // Valida se senha está correta
  if (usuarioEncontrado.senha !== senha) {
    return "Senha incorreta"
  }

  // Valida se a credencial expirou
  if (usuarioEncontrado.expirado === true) {
    return "Renove suas credenciais"
  }

  // Login realizado
  return "Login realizado com sucesso"
}



// TESTES


// 1) Login realizado com sucesso
console.log(
  fazerLogin("joao@email.com", "123456")
)


// 2) Credencial expirada
console.log(
  fazerLogin("maria@email.com", "abc123")
)


// 3) Usuário não encontrado
console.log(
  fazerLogin("naoexiste@email.com", "123456")
)


// 4) Senha incorreta
console.log(
  fazerLogin("carlos@email.com", "senhaErrada")
)
