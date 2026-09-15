# Primeiro acesso administrativo por e-mail

## Objetivo
Permitir que o único administrador autorizado, **fradmasini@gmail.com**, crie o primeiro acesso por meio de um link seguro recebido por e-mail. O link **Admin** continuará discreto no rodapé.

## Implementação
1. Adicionar à tela `/admin` a opção **Enviar link de primeiro acesso**.
2. Aceitar o envio somente para o e-mail administrativo previamente autorizado; nenhum outro visitante poderá criar conta administrativa.
3. Ao abrir o link recebido, confirmar a sessão, conceder o acesso administrativo pelas regras já existentes e exibir a criação da senha.
4. Adicionar uma tela pública para definir a nova senha e estados claros de sucesso, link inválido/expirado e falha no envio.
5. Incluir **Esqueci minha senha** no login, reutilizando o mesmo fluxo seguro por e-mail para acessos futuros.
6. Manter o login atual por e-mail e senha após a criação da senha.

## Validação
- Confirmar que o link chega somente a `fradmasini@gmail.com`.
- Testar primeiro acesso, definição de senha, login, saída e recuperação de senha.
- Confirmar que outros e-mails não conseguem criar conta nem obter permissão administrativa.
- Validar a experiência em computador e celular.

## Detalhes técnicos
- Usar o sistema de autenticação do Lovable Cloud e links com retorno para o próprio site.
- Criar a rota pública de redefinição de senha exigida pelo fluxo de recuperação.
- Manter a autorização no servidor e a função de papel administrativo já configurada; não armazenar permissão no navegador.
- Atualizar a lista de tarefas do projeto com este primeiro acesso e manter o painel completo de edição como trabalho separado.
