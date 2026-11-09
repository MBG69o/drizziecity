'use strict';

function parseIds(value) {
  return String(value || '').split(',').map((s) => s.trim()).filter((s) => /^\d{5,25}$/.test(s));
}

function memberRoleIds(interaction) {
  const roles = interaction.member && interaction.member.roles;
  if (!roles) return [];
  // GuildMemberRoleManager (cache) ou array de IDs (APIInteractionGuildMember)
  return Array.isArray(roles) ? roles : [...roles.cache.keys()];
}

/**
 * Permissões por servidor do jogo:
 *  - administradores do bot (.env AC_BOT_ADMIN_IDS): tudo, em qualquer servidor
 *  - donos: quem fez /ac login com a chave do servidor (podem gerenciar permissões)
 *  - admins/cargos: adicionados pelos donos (podem configurar proteções)
 */
class Permissions {
  constructor({ botAdminIds = [] } = {}) {
    this.botAdminIds = botAdminIds;
  }

  isBotAdmin(interaction) {
    return this.botAdminIds.includes(interaction.user.id);
  }

  isOwner(server, interaction) {
    return this.isBotAdmin(interaction) || server.owners.includes(interaction.user.id);
  }

  isAllowed(server, interaction) {
    if (this.isOwner(server, interaction)) return true;
    if (server.admins.includes(interaction.user.id)) return true;
    const roles = new Set(server.roles);
    return memberRoleIds(interaction).some((id) => roles.has(id));
  }
}

module.exports = { Permissions, parseIds };
