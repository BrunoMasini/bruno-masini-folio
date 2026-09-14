# Plano — Portfólio executivo de Bruno Masini

## Objetivo
Transformar a página inicial atualmente vazia em um portfólio profissional, responsivo e em português, pensado para leitura rápida por recrutadores e líderes de tecnologia.

## Direção visual escolhida
- Estilo editorial híbrido, com composição assimétrica e acabamento executivo.
- Paleta clara com azul corporativo, cinza profundo e cinzas frios.
- Títulos em Instrument Serif e textos em Work Sans.
- Ritmo visual sofisticado, bordas discretas e contraste forte, sem aparência genérica de template.
- Foto profissional em destaque; até o envio da imagem real, usar um placeholder neutro e facilmente substituível.

## Estrutura da página
1. **Navegação compacta** com atalhos para perfil, experiência, projetos, formação e contato.
2. **Abertura** com Bruno Masini como título principal, cargo, idade, resumo profissional, foto e ações de e-mail e LinkedIn.
3. **Habilidades principais** organizadas por categoria em blocos e badges escaneáveis.
4. **Trajetória profissional** em timeline expansível, com resumo visível e detalhes sob demanda para NITRO, SYNCONTI, Clínicas Inteligentes e Unihealth, além do agrupamento de experiências anteriores.
5. **Projetos e destaques** com os três casos informados, dando ênfase ao impacto e às tecnologias envolvidas sem inventar métricas.
6. **Educação, certificações e idiomas** em uma composição editorial clara e comparável.
7. **Contato e rodapé** com e-mail, LinkedIn e créditos.

## Interações e experiência
- Rolagem suave e navegação por âncoras.
- Entradas sutis em fade conforme as seções aparecem, respeitando a preferência de redução de movimento do dispositivo.
- Expansão acessível da timeline por clique e teclado.
- Links externos e e-mail funcionais, com ícones Lucide e estados visuais claros.
- Layout ajustado para celular, tablet e desktop, mantendo textos e ações sem sobreposição.

## Detalhes técnicos
- Implementar com React, Tailwind CSS v4 e Lucide React já disponíveis no projeto.
- Definir cores, tipografia, sombras e raios como tokens semânticos globais.
- Carregar as fontes pela página raiz e adicionar metadados exclusivos de SEO e compartilhamento à página inicial.
- Separar os blocos principais em componentes focados quando isso melhorar manutenção e leitura.
- Não adicionar banco de dados, formulário persistente ou serviços externos; o contato abrirá o cliente de e-mail e o perfil do LinkedIn.

## Validação
- Conferir carregamento sem erros e funcionamento da timeline e dos links.
- Revisar visualmente em desktop e celular.
- Verificar contraste, foco por teclado, texto alternativo da foto e comportamento com animações reduzidas.
