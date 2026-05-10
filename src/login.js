const usuarios = [
  {
    id: 1,
    nome: "Varian Wrynn",
    email: "Varian_Wrynn@alianceWOW.com",
    senha: "QueroPastel",
    expirado: false,
  },
  {
    id: 2,
    nome: "Sylvana Correventos",
    email: "Sylvana_Correventos@hordeWOW.com",
    senha: "QueroBoloDeChocolate",
    expirado: true,
  },
  {
    id: 3,
    nome: "Illidan Tempesfúria",
    email: "Illidan_Tempesfuria@hordeWOW.com",
    senha: "QueroSaladaComCouve",
    expirado: false,
  },
];

export function fazerLogin(email, senha) {
  const usuario = usuarios.find((u) => u.email === email);
  if (!usuario) {
    return "Email ou senha incorretos";
  }
  if (usuario.senha !== senha) {
    return "Email ou senha incorretos";
  }
  if (usuario.expirado) {
    return "Renove suas credenciais";
  }
  return "Login realizado com sucesso";
}
