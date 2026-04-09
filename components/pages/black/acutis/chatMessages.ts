const defaultAvatar = 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/icone_usuario.webp';

export interface ChatMsg {
  user: string;
  text: string;
  avatar: string;
  time?: number;
}

function uiAvatar(name: string, bg: string) {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);
  return `https://ui-avatars.com/api/?name=${initials}&background=${bg}&color=fff&size=64&bold=true`;
}

export const scheduledMessages: ChatMsg[] = [
  { time: 1,  user: 'Robert Peterson', text: 'May God bless you all! In the name of Jesus', avatar: uiAvatar('Robert Peterson','4A90D9') },
  { time: 5,  user: 'Luciana Parker',  text: 'This broadcast changed my day... gratitude to everyone!', avatar: uiAvatar('Luciana Parker','D97B4A') },
  { time: 8,  user: 'Susan Anderson',  text: 'Wow, I entered just at prayer time... Thank God', avatar: 'https://ui-avatars.com/api/?name=SA&background=E91E8C&color=fff&size=64&bold=true' },
  { time: 10, user: 'Andrew Lewis',    text: 'God is wonderful! Amen', avatar: uiAvatar('Andrew Lewis','27AE60') },
  { time: 11, user: 'Paul Caesar',     text: 'Saint Benedict, guide our steps!', avatar: uiAvatar('Paul Caesar','8E44AD') },
  { time: 12, user: 'Vera Lucy',       text: 'Bless, Lord, every family connected to this live broadcast', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-12.webp' },
  { time: 12, user: 'Irene Newman',    text: 'Amen!', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-13.webp' },
  { time: 15, user: 'Claudia Foster',  text: 'Amen!!', avatar: uiAvatar('Claudia Foster','C0392B') },
  { time: 17, user: 'Gilbert Lima',    text: 'Wow, interesting an 800-year-old Prayer? It can only be from God himself', avatar: 'https://ui-avatars.com/api/?name=GL&background=E67E22&color=fff&size=64&bold=true' },
  { time: 19, user: 'Regina Celia',    text: 'Glory to You, Lord! We are ready', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-19.webp' },
  { time: 23, user: 'Martha Johnson',  text: 'I just started watching... has anyone used this prayer already?', avatar: uiAvatar('Martha Johnson','2C3E50') },
  { time: 24, user: 'Eliana Roberts',  text: 'Praying!', avatar: 'https://ui-avatars.com/api/?name=ER&background=9B59B6&color=fff&size=64&bold=true' },
  { time: 26, user: 'Support Team',    text: 'Yes, Marta! Thousands of people are already reporting healings, financial blessings, and family restoration through this 7-minute prayer of Saint Benedict.', avatar: uiAvatar('Support Team','1A6B3A') },
  { time: 33, user: 'Joan Lima',       text: 'Amen, glory to God!', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-33.webp' }
];
