'use strict';

const { SlashCommandBuilder, ChannelType } = require('discord.js');
const { PROTECTIONS } = require('./protections');

const protectionChoices = PROTECTIONS.map((p) => ({ name: p.name, value: p.key }));
const protectionChoicesAll = [{ name: 'Todas as proteções', value: 'todas' }, ...protectionChoices];
const valueChoices = PROTECTIONS.filter((p) => p.valueLabel).map((p) => ({ name: `${p.name} (${p.valueLabel})`, value: p.key }));

function protectionOption(o, all = false, choices = null) {
  return o.setName('protecao').setDescription('Proteção do anti-cheat').setRequired(true)
    .addChoices(...(choices || (all ? protectionChoicesAll : protectionChoices)));
}

const acCommand = new SlashCommandBuilder()
  .setName('ac')
  .setDescription('Configura o anti-cheat do servidor SA-MP/open.mp')
  .setDMPermission(false)
  .addSubcommand((s) => s.setName('painel').setDescription('Painel interativo para ativar/desativar proteções'))
  .addSubcommand((s) => s.setName('status').setDescription('Status do anti-cheat e do servidor'))
  .addSubcommand((s) => s.setName('ativar').setDescription('Ativa uma proteção')
    .addStringOption((o) => protectionOption(o, true)))
  .addSubcommand((s) => s.setName('desativar').setDescription('Desativa uma proteção')
    .addStringOption((o) => protectionOption(o, true)))
  .addSubcommand((s) => s.setName('acao').setDescription('Define o que acontece ao detectar (aviso, kick ou ban)')
    .addStringOption((o) => protectionOption(o, true))
    .addStringOption((o) => o.setName('tipo').setDescription('Punição').setRequired(true).addChoices(
      { name: 'Aviso (só registra no log)', value: 'aviso' },
      { name: 'Kick', value: 'kick' },
      { name: 'Ban', value: 'ban' },
    )))
  .addSubcommand((s) => s.setName('tolerancia').setDescription('Quantas detecções (em 60s) antes de punir')
    .addStringOption((o) => protectionOption(o, true))
    .addIntegerOption((o) => o.setName('quantidade').setDescription('1 = pune na primeira detecção').setRequired(true).setMinValue(1).setMaxValue(100)))
  .addSubcommand((s) => s.setName('limite').setDescription('Altera o limite numérico de uma proteção (velocidade, ping, etc.)')
    .addStringOption((o) => protectionOption(o, false, valueChoices))
    .addIntegerOption((o) => o.setName('valor').setDescription('Novo limite').setRequired(true).setMinValue(1).setMaxValue(100000)))
  .addSubcommand((s) => s.setName('global').setDescription('Liga/desliga o anti-cheat inteiro')
    .addBooleanOption((o) => o.setName('ativo').setDescription('true = ligado').setRequired(true)))
  .addSubcommand((s) => s.setName('intervalo').setDescription('De quantos em quantos segundos o servidor busca a configuração')
    .addIntegerOption((o) => o.setName('segundos').setDescription('3 a 300').setRequired(true).setMinValue(3).setMaxValue(300)))
  .addSubcommand((s) => s.setName('logs').setDescription('Define o canal onde as detecções são enviadas')
    .addChannelOption((o) => o.setName('canal').setDescription('Canal de texto').setRequired(true)
      .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)))
  .addSubcommand((s) => s.setName('historico').setDescription('Últimas detecções')
    .addStringOption((o) => o.setName('nick').setDescription('Filtrar por nick').setRequired(false)))
  .addSubcommand((s) => s.setName('restaurar').setDescription('Volta todas as proteções para o padrão'))
  .addSubcommand((s) => s.setName('desbanir').setDescription('Desbane um IP no servidor (unbanip)')
    .addStringOption((o) => o.setName('ip').setDescription('Ex.: 177.10.20.30 ou 177.10.*.*').setRequired(true)))
  .addSubcommand((s) => s.setName('kick').setDescription('Kicka um jogador do servidor pelo ID')
    .addIntegerOption((o) => o.setName('id').setDescription('ID do jogador no jogo').setRequired(true).setMinValue(0).setMaxValue(999)))
  .addSubcommand((s) => s.setName('anunciar').setDescription('Envia uma mensagem do anti-cheat para todos no jogo')
    .addStringOption((o) => o.setName('mensagem').setDescription('Texto (sem acentos)').setRequired(true).setMaxLength(120)))
  .addSubcommandGroup((g) => g.setName('imune').setDescription('Jogadores ignorados pelo anti-cheat')
    .addSubcommand((s) => s.setName('adicionar').setDescription('Adiciona um nick imune')
      .addStringOption((o) => o.setName('nick').setDescription('Nick exato do jogo').setRequired(true)))
    .addSubcommand((s) => s.setName('remover').setDescription('Remove um nick imune')
      .addStringOption((o) => o.setName('nick').setDescription('Nick exato do jogo').setRequired(true)))
    .addSubcommand((s) => s.setName('listar').setDescription('Lista os nicks imunes')))
  .addSubcommandGroup((g) => g.setName('donos').setDescription('Quem pode configurar o anti-cheat (só super donos)')
    .addSubcommand((s) => s.setName('adicionar').setDescription('Dá permissão a um usuário ou cargo')
      .addUserOption((o) => o.setName('usuario').setDescription('Usuário'))
      .addRoleOption((o) => o.setName('cargo').setDescription('Cargo')))
    .addSubcommand((s) => s.setName('remover').setDescription('Remove a permissão de um usuário ou cargo')
      .addUserOption((o) => o.setName('usuario').setDescription('Usuário'))
      .addRoleOption((o) => o.setName('cargo').setDescription('Cargo')))
    .addSubcommand((s) => s.setName('listar').setDescription('Lista quem tem permissão')));

module.exports = { commands: [acCommand.toJSON()] };
