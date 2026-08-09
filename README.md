# Landing page - Mestre Eduardo Oliveira

Landing page estática e responsiva para captação de clientes de obras e reformas, com foco principal nas regiões mais procuradas de Brasília e em Águas Lindas de Goiás. Demais localidades da RIDE-DF aparecem como cobertura mediante consulta.

## Estratégia aplicada

- Conversão: chamadas para WhatsApp na primeira dobra, entre seções e em botão flutuante.
- Autoridade: formação e experiências profissionais extraídas do currículo fornecido.
- Prova visual: animação do Eduardo aplicada no destaque principal, sem apresentá-la como registro documental.
- SEO local: título, descrição, dados estruturados, conteúdo semântico e cobertura completa da RIDE-DF.
- Qualificação do contato: formulário que monta uma mensagem estruturada e abre o WhatsApp.
- Mobile-first: navegação simplificada, botões grandes e ausência de rolagem horizontal.
- Privacidade: Google Analytics bloqueado até o visitante aceitar cookies analíticos.

## Como visualizar

Abra `index.html` diretamente ou inicie um servidor local neste diretório:

```powershell
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173/`.

## Configuração do GA4

Crie uma propriedade GA4 separada e um fluxo Web. Depois insira o ID de medição no atributo `data-ga-id` da tag `<body>` em `index.html`:

```html
<body data-ga-id="G-XXXXXXXXXX">
```

Os eventos implementados são `click_whatsapp` e `generate_lead`. Eles não enviam nome, telefone, região digitada ou mensagem.

## Antes de publicar

1. Escolha o domínio definitivo.
2. Adicione canonical, `og:url` e `og:image` absolutos no `index.html`.
3. Troque ou confirme o telefone, e-mail e regiões atendidas.
4. Inclua fotos reais de obras, somente com autorização dos proprietários.
5. Quando houver avaliações reais, adicione depoimentos com nome e permissão do cliente.
6. Gere `sitemap.xml` com o domínio publicado e indique sua URL no `robots.txt`.
7. Crie ou complete o Perfil da Empresa no Google com o mesmo nome, telefone e área de atendimento.
8. Cadastre o site no Google Search Console e envie o sitemap.

## Créditos das imagens ilustrativas

- Alvenaria: Ethan Sarkar / Pexels, foto 30081237.
- Pisos e acabamentos: Sergei Starostin / Pexels, foto 29181494.
- Drywall: AI25.Studio / Pexels, foto 4981812.

As imagens são ilustrativas e não representam obras executadas pelo Eduardo.

## Expansão de SEO local

Após publicar a página principal, o crescimento orgânico pode continuar com páginas individuais e conteúdo original para serviços e regiões que realmente sejam atendidos, por exemplo:

- mestre de obras em Taguatinga;
- reforma em Águas Claras;
- pedreiro em Vicente Pires;
- assentamento de porcelanato em Brasília;
- alvenaria estrutural no Distrito Federal.

Evite criar muitas páginas com texto quase idêntico. Cada página local deve ter informações, fotos, casos e perguntas específicas daquela região ou serviço.
