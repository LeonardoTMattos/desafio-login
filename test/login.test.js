import { fazerLogin } from "../src/login.js";
import assert from "assert";

describe("fazerLogin", function () {
  context("quando o email e senha estão corretos", function () {
    it("deve retornar mensagem de sucesso", function () {
      // Arrange
      const emailValido = "Varian_Wrynn@alianceWOW.com";
      const senhaCerta = "QueroPastel";

      // Act
      const resultado = fazerLogin(emailValido, senhaCerta);

      // Assert
      assert.equal(resultado, "Login realizado com sucesso");
    });
  });

  context("quando o usuário está expirado", function () {
    it("deve retornar mensagem para renovar credenciais", function () {
      // Arrange
      const emailExpirado = "Sylvana_Correventos@hordeWOW.com";
      const senhaCerta = "QueroBoloDeChocolate";

      // Act
      const resultado = fazerLogin(emailExpirado, senhaCerta);

      // Assert
      assert.equal(resultado, "Renove suas credenciais");
    });
  });

  context("quando as credenciais estão incorretas", function () {
    it("deve retornar mensagem de erro quando email não existe ou está errado", function () {
      // Arrange
      const emailInexistente = "arthas@lichking.com";
      const qualquerSenha = "SenhaAleatoria-churrasco";

      // Act
      const resultado = fazerLogin(emailInexistente, qualquerSenha);

      // Assert
      assert.equal(resultado, "Email ou senha incorretos");
    });

    it("deve retornar mensagem de erro quando senha está errada", function () {
      // Arrange
      const emailValido = "Illidan_Tempesfuria@hordeWOW.com";
      const senhaErrada = "SenhaErrada-churrasco";

      // Act
      const resultado = fazerLogin(emailValido, senhaErrada);

      // Assert
      assert.equal(resultado, "Email ou senha incorretos");
    });
  });
});
