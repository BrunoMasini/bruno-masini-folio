# Foto real, área de administração e contato por e-mail

## 1. Foto de perfil real
A foto enviada substitui o retrato provisório no topo da página (mesmo enquadramento e moldura editorial já usados). A imagem provisória é removida do projeto.

## 2. Contato
Os botões de contato já abrem o aplicativo de e-mail do visitante para **bruno-masini@hotmail.com**. Vou confirmar todos os pontos de contato (topo, cartão lateral e seção final) e incluir um assunto padrão, por exemplo "Contato via portfólio".

## 3. Botão de administração (login + edição do conteúdo)
Para que você possa entrar e alterar textos, será necessário ativar o **Lovable Cloud**, que fornece login e banco de dados integrados.

Como vai funcionar:
- Um discreto acesso "Admin" no rodapé leva à página de login.
- Login com e-mail e senha; somente **fradmasini@gmail.com** recebe permissão de administrador. Na primeira entrada você cria a senha.
- Após entrar, a página passa a exibir botões "Editar" em cada bloco: nome, idade, título, resumo do hero, competências, cada item da trajetória (cargo, empresa, período, descrição), projetos, formação, certificações, idiomas e dados de contato.
- Você pode adicionar, editar, reordenar e remover itens nas listas (trajetória, projetos, certificações etc.).
- As alterações são salvas na hora e ficam visíveis para qualquer visitante.
- Visitantes só leem o conteúdo; ninguém sem o seu login consegue alterar nada.

Também será possível trocar a foto de perfil pelo painel, sem precisar falar comigo.

## Detalhes técnicos
- Ativar Lovable Cloud (auth por e-mail/senha + Postgres + storage).
- Foto enviada para o CDN de assets (`lovable-assets`) e usada como valor inicial do campo de foto.
- Tabelas: `site_content` (chave/valor em JSON por seção) ou tabelas por seção com coluna `sort_order`; `user_roles` + enum `app_role` e função `has_role` (security definer) para o papel de admin.
- RLS: `SELECT` público (anon + authenticated); `INSERT/UPDATE/DELETE` apenas com `has_role(auth.uid(), 'admin')`. GRANTs explícitos para anon/authenticated/service_role.
- Trigger que concede o papel `admin` apenas quando o e-mail confirmado for `fradmasini@gmail.com`.
- Rotas: `/auth` pública (login) e `/_authenticated/admin` para o painel de edição.
- Leitura pública do conteúdo via server function pública (cliente publishable) chamada no loader de `/`; escritas via server functions com `requireSupabaseAuth` que revalidam o papel de admin.
- Upload da foto para bucket de storage com política de escrita restrita a admin.
