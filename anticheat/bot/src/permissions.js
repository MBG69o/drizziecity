'use strict';

function parseIds(value) {
  return String(value || '').split(',').map((s) => s.trim()).filter((s) => /^\d{5,25}$/.test(s));
}

class Permissions {
  constructor(store, { ownerIds = [], roleIds = [] } = {}) {
    this.store = store;
    this.ownerIds = ownerIds;
    this.roleIds = roleIds;
  }

  /** Super donos: definidos no .env ou dono do servidor do Discord. */
  isSuperOwner(interaction) {
    return this.ownerIds.includes(interaction.user.id)
      || (interaction.guild && interaction.guild.ownerId === interaction.user.id);
  }

  /** Pode configurar o anti-cheat. */
  isAllowed(interaction) {
    if (this.isSuperOwner(interaction)) return true;
    const { owners, roles } = this.store.state;
    if (owners.includes(interaction.user.id)) return true;
    const memberRoles = interaction.member && interaction.member.roles;
    if (!memberRoles) return false;
    const allowedRoles = new Set([...roles, ...this.roleIds]);
    // GuildMemberRoleManager (cache) ou array de IDs (APIInteractionGuildMember)
    const ids = Array.isArray(memberRoles) ? memberRoles : [...memberRoles.cache.keys()];
    return ids.some((id) => allowedRoles.has(id));
  }
}

module.exports = { Permissions, parseIds };
