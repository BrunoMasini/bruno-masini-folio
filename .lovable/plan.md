# Adicionar foto real de Bruno Masini ao portfólio

## Objetivo
Substituir o retrato provisório pelo arquivo enviado (`WhatsApp_Image_2026-09-14_at_15.15.16.jpeg`), mantendo o recorte, a estética editorial e a responsividade da seção hero.

## Alterações previstas

1. **Criar asset da foto real**
   - Usar o CLI `lovable-assets` para fazer upload do arquivo enviado pelo usuário.
   - Gerar o ponteiro `src/assets/bruno-masini-foto-real.jpg.asset.json`.

2. **Atualizar o componente `src/components/portfolio-page.tsx`**
   - Trocar o import `profilePlaceholder` para o novo asset (`bruno-masini-foto-real.jpg.asset.json`).
   - Remover a faixa "Imagem provisória · pronta para receber sua foto" sobreposta na foto.
   - Atualizar o `alt` da imagem para "Bruno Masini, Senior IT Analyst".
   - Avaliar e ajustar o filtro `grayscale-[12%]`: manter leve ou remover para preservar a qualidade da foto real.

3. **Limpar assets antigos**
   - Remover o arquivo `src/assets/bruno-executive-placeholder.jpg`.
   - Remover o ponteiro do placeholder, se existir.

4. **Verificar**
   - Conferir o build e a renderização da seção hero no preview.
   - Validar que a imagem carrega sem erros de console e que o layout permanece responsivo.
