'use strict';

const { SlashCommandBuilder, ChannelType } = require('discord.js');
const { PRESETS } = require('./presets');

// mais de 25 proteções: a escolha usa autocomplete (o Discord limita choices a 25)
const protectionOption = (o) => o.setName('protecao').setDescription('Proteção do anti-cheat (comece a digitar)').setRequired(true).setAutocomplete(true);
const playerIdOption = (o) => o.setName('id').setDescription('ID do jogador no jogo').setRequired(true).setMinValue(0).setMaxValue(999);

/*
 * Estrutura (o Discord permite no máximo 25 subcomandos/grupos por nível):
 *   /ac painel | status | global | login | meuservidor | historico | jogador | estatisticas
 *   /ac servidor   ...  configurações do servidor e da conta
 *   /ac protecao   ...  proteções, presets, exportar/importar
 *   /ac moderacao  ...  ações no jogo (online, kick, pm, congelar, bans)
 *   /ac imune      ...  nicks ignorados
 *   /ac donos      ...  permissões
 */
const acCommand = new SlashCommandBuilder()
  .setName('ac')
  .setDescription('Anti-cheat dos servidores SA-MP/open.mp')
  .setDMPermission(false)
  // ------------------------------------------------------------ atalhos
  .addSubcommand((s) => s.setName('painel').setDescription('Painel interativo para ativar/desativar proteções'))
  .addSubcommand((s) => s.setName('painelweb').setDescription('Gera o link do painel web ao vivo (dashboard no navegador)'))
  .addSubcommand((s) => s.setName('painelstatus').setDescription('Publica/atualiza o painel de status no canal (admin do bot)'))
  .addSubcommand((s) => s.setName('status').setDescription('Status do anti-cheat e do servidor'))
  .addSubcommand((s) => s.setName('global').setDescription('Liga/desliga o anti-cheat inteiro')
    .addBooleanOption((o) => o.setName('ativo').setDescription('true = ligado').setRequired(true)))
  .addSubcommand((s) => s.setName('login').setDescription('Registra o servidor no seu nome com o token de acesso mostrado no console')
    .addStringOption((o) => o.setName('token').setDescription('Token de acesso do console (ex.: EE-7K2QMX-ABCD-EFGH-JKLM)').setRequired(true).setMaxLength(40)))
  .addSubcommand((s) => s.setName('meuservidor').setDescription('Mostra o servidor registrado no seu nome e confirma a ativação'))
  .addSubcommand((s) => s.setName('historico').setDescription('Últimas detecções')
    .addStringOption((o) => o.setName('nick').setDescription('Filtrar por nick').setRequired(false)))
  .addSubcommand((s) => s.setName('jogador').setDescription('Ficha de um jogador: detecções, IPs e bans')
    .addStringOption((o) => o.setName('nick').setDescription('Nick exato do jogo').setRequired(true)))
  .addSubcommand((s) => s.setName('seguranca').setDescription('Verificação de segurança do servidor: nota de 0 a 100 e o que corrigir'))
  .addSubcommand((s) => s.setName('estatisticas').setDescription('Resumo das detecções')
    .addStringOption((o) => o.setName('periodo').setDescription('Período').setRequired(false).addChoices(
      { name: 'Últimas 24 horas', value: '24h' },
      { name: 'Últimos 7 dias', value: '7d' },
      { name: 'Últimos 30 dias', value: '30d' },
    )))
  // ---------------------------------------------------------- servidor
  .addSubcommandGroup((g) => g.setName('servidor').setDescription('Servidor e conta')
    .addSubcommand((s) => s.setName('lista').setDescription('Lista os servidores a que você tem acesso'))
    .addSubcommand((s) => s.setName('usar').setDescription('Escolhe qual servidor os comandos vão configurar')
      .addStringOption((o) => o.setName('id').setDescription('IDF do servidor').setRequired(true).setAutocomplete(true)))
    .addSubcommand((s) => s.setName('nome').setDescription('Define um nome para o servidor')
      .addStringOption((o) => o.setName('nome').setDescription('Nome (vazio = usar o hostname)').setRequired(false).setMaxLength(64)))
    .addSubcommand((s) => s.setName('logs').setDescription('Canal onde as detecções e alertas são enviados')
      .addChannelOption((o) => o.setName('canal').setDescription('Canal de texto').setRequired(true)
        .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)))
    .addSubcommand((s) => s.setName('intervalo').setDescription('De quantos em quantos segundos o servidor busca a configuração')
      .addIntegerOption((o) => o.setName('segundos').setDescription('3 a 300').setRequired(true).setMinValue(3).setMaxValue(300)))
    .addSubcommand((s) => s.setName('alertas').setDescription('Avisar no canal de logs quando o servidor cair ou voltar')
      .addBooleanOption((o) => o.setName('ativo').setDescription('true = avisar').setRequired(true)))
    .addSubcommand((s) => s.setName('resumo').setDescription('Enviar um resumo diário (meia-noite) no canal de logs')
      .addBooleanOption((o) => o.setName('ativo').setDescription('true = enviar').setRequired(true)))
    .addSubcommand((s) => s.setName('banduracao').setDescription('Duração dos bans do anti-cheat (desban automático)')
      .addIntegerOption((o) => o.setName('horas').setDescription('0 = permanente · máx. 8760 (1 ano)').setRequired(true).setMinValue(0).setMaxValue(8760)))
    .addSubcommand((s) => s.setName('auditoria').setDescription('Quem alterou o quê nas configurações'))
    .addSubcommand((s) => s.setName('notificacoes').setDescription('Onde receber os alertas de segurança (ataques, servidor desprotegido...)')
      .addStringOption((o) => o.setName('modo').setDescription('Entrega').setRequired(true).addChoices(
        { name: 'DM e canal de logs (padrão)', value: 'ambos' },
        { name: 'Só DM', value: 'dm' },
        { name: 'Só canal de logs (com menção)', value: 'canal' },
        { name: 'Desligar', value: 'desligado' },
      )))
    .addSubcommand((s) => s.setName('novachave').setDescription('Gera um novo token de acesso (o antigo para de funcionar) (dono)'))
    .addSubcommand((s) => s.setName('logout').setDescription('Sai do servidor (deixa de ser dono)')))
  // ---------------------------------------------------------- proteções
  .addSubcommandGroup((g) => g.setName('protecao').setDescription('Configurar proteções')
    .addSubcommand((s) => s.setName('ativar').setDescription('Ativa uma proteção, uma categoria ou todas')
      .addStringOption((o) => protectionOption(o)))
    .addSubcommand((s) => s.setName('desativar').setDescription('Desativa uma proteção, uma categoria ou todas')
      .addStringOption((o) => protectionOption(o)))
    .addSubcommand((s) => s.setName('acao').setDescription('O que acontece ao detectar (aviso, kick ou ban)')
      .addStringOption((o) => protectionOption(o))
      .addStringOption((o) => o.setName('tipo').setDescription('Punição').setRequired(true).addChoices(
        { name: 'Aviso (só registra no log)', value: 'aviso' },
        { name: 'Kick', value: 'kick' },
        { name: 'Ban', value: 'ban' },
      )))
    .addSubcommand((s) => s.setName('tolerancia').setDescription('Quantas detecções (em 60s) antes de punir')
      .addStringOption((o) => protectionOption(o))
      .addIntegerOption((o) => o.setName('quantidade').setDescription('1 = pune na primeira detecção').setRequired(true).setMinValue(1).setMaxValue(100)))
    .addSubcommand((s) => s.setName('limite').setDescription('Altera o limite numérico (velocidade, ping, % de acerto...)')
      .addStringOption((o) => protectionOption(o))
      .addIntegerOption((o) => o.setName('valor').setDescription('Novo limite').setRequired(true).setMinValue(1).setMaxValue(100000)))
    .addSubcommand((s) => s.setName('preset').setDescription('Aplica uma configuração pronta')
      .addStringOption((o) => o.setName('tipo').setDescription('Preset').setRequired(true)
        .addChoices(...Object.entries(PRESETS).map(([value, p]) => ({ name: p.name, value })))))
    .addSubcommand((s) => s.setName('restaurar').setDescription('Volta todas as proteções para o padrão'))
    .addSubcommand((s) => s.setName('exportar').setDescription('Baixa a configuração atual em um arquivo .json'))
    .addSubcommand((s) => s.setName('importar').setDescription('Aplica uma configuração de um arquivo .json exportado')
      .addAttachmentOption((o) => o.setName('arquivo').setDescription('Arquivo gerado por /ac protecao exportar').setRequired(true))))
  // --------------------------------------------------------- moderação
  .addSubcommandGroup((g) => g.setName('moderacao').setDescription('Ações no servidor do jogo')
    .addSubcommand((s) => s.setName('online').setDescription('Lista os jogadores online (ID, nick, ping, score)'))
    .addSubcommand((s) => s.setName('kick').setDescription('Kicka um jogador pelo ID')
      .addIntegerOption((o) => playerIdOption(o)))
    .addSubcommand((s) => s.setName('pm').setDescription('Mensagem privada para um jogador')
      .addIntegerOption((o) => playerIdOption(o))
      .addStringOption((o) => o.setName('mensagem').setDescription('Texto (sem acentos)').setRequired(true).setMaxLength(120)))
    .addSubcommand((s) => s.setName('congelar').setDescription('Congela um jogador')
      .addIntegerOption((o) => playerIdOption(o)))
    .addSubcommand((s) => s.setName('descongelar').setDescription('Descongela um jogador')
      .addIntegerOption((o) => playerIdOption(o)))
    .addSubcommand((s) => s.setName('anunciar').setDescription('Mensagem do anti-cheat para todos no jogo')
      .addStringOption((o) => o.setName('mensagem').setDescription('Texto (sem acentos)').setRequired(true).setMaxLength(120)))
    .addSubcommand((s) => s.setName('bans').setDescription('Bans aplicados pelo anti-cheat (com botões de desbanir)'))
    .addSubcommand((s) => s.setName('desbanir').setDescription('Desbane um IP no servidor (unbanip)')
      .addStringOption((o) => o.setName('ip').setDescription('Ex.: 177.10.20.30 ou 177.10.*.*').setRequired(true))))
  // ----------------------------------------------- blacklist (ban cruzado)
  .addSubcommandGroup((g) => g.setName('blacklist').setDescription('Lista negra compartilhada entre os seus servidores')
    .addSubcommand((s) => s.setName('adicionar').setDescription('Bane um nick ou IP em TODOS os seus servidores')
      .addStringOption((o) => o.setName('nick').setDescription('Nick do jogador'))
      .addStringOption((o) => o.setName('ip').setDescription('IP do jogador (ex.: 177.10.20.30)'))
      .addStringOption((o) => o.setName('motivo').setDescription('Motivo').setMaxLength(100)))
    .addSubcommand((s) => s.setName('remover').setDescription('Tira um nick ou IP da lista negra')
      .addStringOption((o) => o.setName('nick').setDescription('Nick'))
      .addStringOption((o) => o.setName('ip').setDescription('IP')))
    .addSubcommand((s) => s.setName('listar').setDescription('Mostra a sua lista negra')))
  // ------------------------------------------------- webhook de saída
  .addSubcommandGroup((g) => g.setName('webhook').setDescription('Receba os alertas no seu próprio Discord')
    .addSubcommand((s) => s.setName('definir').setDescription('Define o webhook do Discord deste servidor')
      .addStringOption((o) => o.setName('url').setDescription('https://discord.com/api/webhooks/...').setRequired(true).setMaxLength(200))
      .addStringOption((o) => o.setName('minimo').setDescription('O que enviar')
        .addChoices({ name: 'Avisos, kicks e bans', value: '0' }, { name: 'Kicks e bans', value: '1' }, { name: 'Só bans', value: '2' })))
    .addSubcommand((s) => s.setName('remover').setDescription('Desliga o webhook'))
    .addSubcommand((s) => s.setName('ver').setDescription('Mostra o webhook configurado')))
  // ---------------------------------------------- procurados (watchlist)
  .addSubcommandGroup((g) => g.setName('procurados').setDescription('Vigie jogadores: avisa quando entram ou são pegos')
    .addSubcommand((s) => s.setName('adicionar').setDescription('Começa a vigiar um nick')
      .addStringOption((o) => o.setName('nick').setDescription('Nick do jogo').setRequired(true))
      .addStringOption((o) => o.setName('anotacao').setDescription('Motivo/nota').setMaxLength(100)))
    .addSubcommand((s) => s.setName('remover').setDescription('Para de vigiar um nick')
      .addStringOption((o) => o.setName('nick').setDescription('Nick do jogo').setRequired(true)))
    .addSubcommand((s) => s.setName('listar').setDescription('Lista os jogadores vigiados')))
  // ---------------------------------------------- selo público / status
  .addSubcommandGroup((g) => g.setName('selo').setDescription('Selo público "Protegido por EagleEYE" e página de status')
    .addSubcommand((s) => s.setName('publico').setDescription('Liga o selo e a página de status pública deste servidor'))
    .addSubcommand((s) => s.setName('privado').setDescription('Desliga o selo público deste servidor'))
    .addSubcommand((s) => s.setName('ver').setDescription('Mostra o link do selo e da página de status')))
  // ------------------------------------------------------------ outros
  .addSubcommandGroup((g) => g.setName('imune').setDescription('Jogadores ignorados pelo anti-cheat')
    .addSubcommand((s) => s.setName('adicionar').setDescription('Adiciona um nick imune')
      .addStringOption((o) => o.setName('nick').setDescription('Nick exato do jogo').setRequired(true)))
    .addSubcommand((s) => s.setName('remover').setDescription('Remove um nick imune')
      .addStringOption((o) => o.setName('nick').setDescription('Nick exato do jogo').setRequired(true)))
    .addSubcommand((s) => s.setName('listar').setDescription('Lista os nicks imunes')))
  .addSubcommandGroup((g) => g.setName('donos').setDescription('Quem pode configurar o servidor (só donos alteram)')
    .addSubcommand((s) => s.setName('adicionar').setDescription('Dá permissão a um usuário ou cargo')
      .addUserOption((o) => o.setName('usuario').setDescription('Usuário'))
      .addRoleOption((o) => o.setName('cargo').setDescription('Cargo')))
    .addSubcommand((s) => s.setName('remover').setDescription('Remove a permissão de um usuário (inclusive donos) ou cargo')
      .addUserOption((o) => o.setName('usuario').setDescription('Usuário'))
      .addRoleOption((o) => o.setName('cargo').setDescription('Cargo')))
    .addSubcommand((s) => s.setName('listar').setDescription('Lista quem tem permissão')))
  .addSubcommandGroup((g) => g.setName('licenca').setDescription('Licenças do plugin (só administradores do bot)')
    .addSubcommand((s) => s.setName('criar').setDescription('Emite uma licença nova')
      .addStringOption((o) => o.setName('cliente').setDescription('Nome do cliente').setRequired(false).setMaxLength(100))
      .addStringOption((o) => o.setName('nota').setDescription('Observação').setRequired(false).setMaxLength(200))
      .addIntegerOption((o) => o.setName('dias').setDescription('Validade em dias (vazio = sem validade)').setRequired(false).setMinValue(1).setMaxValue(3650)))
    .addSubcommand((s) => s.setName('revogar').setDescription('Revoga uma licença (o plugin para na hora)')
      .addStringOption((o) => o.setName('chave').setDescription('Chave da licença').setRequired(true).setMaxLength(40)))
    .addSubcommand((s) => s.setName('reativar').setDescription('Reativa uma licença revogada')
      .addStringOption((o) => o.setName('chave').setDescription('Chave da licença').setRequired(true).setMaxLength(40)))
    .addSubcommand((s) => s.setName('info').setDescription('Detalhes de uma licença')
      .addStringOption((o) => o.setName('chave').setDescription('Chave da licença').setRequired(true).setMaxLength(40)))
    .addSubcommand((s) => s.setName('listar').setDescription('Lista as licenças emitidas')));

module.exports = { commands: [acCommand.toJSON()] };
