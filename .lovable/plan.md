# Corrigir o primeiro acesso administrativo

## Objetivo
Permitir que **fradmasini@gmail.com** defina uma nova senha pelo e-mail e entre na área administrativa sem confusão com o link de confirmação.

## Alterações
1. Trocar o botão **Enviar link de primeiro acesso** para enviar um link de definição/recuperação de senha, em vez de um novo link de confirmação.
2. Preencher e bloquear o e-mail administrativo autorizado na tela de acesso, evitando digitação incorreta.
3. Ajustar a página aberta pelo e-mail para aceitar somente um link válido de recuperação, mostrar os campos de nova senha e confirmar claramente quando ela for salva.
4. Após salvar, encerrar a sessão temporária e direcionar ao login administrativo para entrar com a nova senha.
5. Melhorar as mensagens para distinguir link expirado, senha inválida e conta sem permissão.

## Validação
- Solicitar um novo link pela área administrativa.
- Confirmar que o link abre a tela **Definir nova senha**.
- Criar a senha e entrar com **fradmasini@gmail.com**.
- Confirmar que a área administrativa é exibida em celular e computador.

## Estado confirmado
A conta **fradmasini@gmail.com** já está com o e-mail confirmado e com permissão de administrador. Nenhuma alteração de permissão ou de dados será necessária.
