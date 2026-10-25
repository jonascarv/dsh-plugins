# dsh-locale-pt-br

**Português (Brasil)** | [English](#english)

Pacote de idioma **Português (Brasil)** para a interface web do [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

Cobre toda a interface: **62 namespaces, 2.799 strings traduzidas** — chat, configurações, gerenciador de plugins, agendamentos, barra lateral, terminal, entrada de voz e mais.

## Instalação

### Pelo Plugin Manager (recomendado)

1. Clone este repositório:
   ```sh
   git clone https://github.com/jonascarv/dsh-plugins.git
   ```
2. No DeepSeek Harness, abra **Plugins** e instale o bundle a partir da pasta `locale-pt-br/` dentro do clone.
3. Recarregue a página (F5).

### Pela conversa com o agente

Peça ao agente do DSH:

> Instale o bundle em `C:\caminho\para\dsh-plugins\locale-pt-br` com o plugin_manager.

## Ativação

1. Abra **Configurações → Geral**
2. Na linha **Idioma**, selecione **Português (Brasil)**

A interface muda imediatamente e a escolha fica salva permanentemente. Textos sem tradução aparecem em inglês (fallback automático) — nada quebra.

## Como funciona

O plugin usa a API pública de localização do cliente (`@deepseek-ai/dsh-client-locale`):

- `ctx.locale.addLanguage({ id: 'pt-BR', label: 'Português (Brasil)', fallback: 'en' })` registra o idioma no seletor.
- `ctx.locale.register(ns, 'pt-BR', dict)` registra cada um dos 62 dicionários de namespace.

## Contribuindo

Encontrou uma tradução estranha ou um texto sem traduzir? Abra uma issue ou PR neste repositório. Os dicionários-fonte ficam embutidos em `client.js`, gerados a partir dos arquivos JSON por namespace.

## Licença

[MIT](LICENSE)

---

## English

**Brazilian Portuguese (pt-BR) language pack** for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) web interface.

Full coverage: **62 namespaces, 2,799 translated strings** — chat, settings, plugin manager, schedules, sidebar, terminal, voice input, and more.

### Install

1. Clone this repository.
2. In DeepSeek Harness, install the bundle from the cloned directory (Plugin Manager, or ask the agent to install it with `plugin_manager`).
3. Reload the page (F5).

### Activate

Open **Settings → General → Language** and select **Português (Brasil)**. The UI switches immediately and the choice is persisted. Untranslated strings fall back to English.

### How it works

Uses the public client locale API (`@deepseek-ai/dsh-client-locale`): `ctx.locale.addLanguage` registers the `pt-BR` language with `en` fallback, and `ctx.locale.register` contributes each of the 62 namespace dictionaries.

### Contributing

Found an awkward translation or an untranslated string? Open an issue or PR in this repository.

### License

[MIT](LICENSE)
