const defaultAvatar = 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/icone_usuario.webp';

export interface ChatMsg {
  user: string;
  text: string;
  avatar: string;
}

const raw: { user: string; text: string; avatar?: string }[] = [
  { user: 'Daniel Price', text: 'Is this really a Vatican News special broadcast?', avatar: 'https://specialnew.online/wp-content/uploads/2025/09/6.webp' },
  { user: 'Olivia Kennedy', text: 'I clicked because it said “Breaking News” and prayer in the same headline.', avatar: 'https://specialnew.online/wp-content/uploads/2025/09/1.webp' },
  { user: 'Grace Morgan', text: 'This looks like a real newsroom, not a sermon.', avatar: 'https://specialnew.online/wp-content/uploads/2025/09/5.webp' },
  { user: 'Mason Chandler', text: 'Why would they air this if it wasn’t verified?', avatar: 'https://specialnew.online/wp-content/uploads/2025/09/7.webp' },
  { user: 'Caleb Bryant', text: 'I’m skeptical, but this is definitely interesting.', avatar: 'https://specialnew.online/wp-content/uploads/2025/09/4.webp' },
  { user: 'Carla Fernandez', text: 'They’re mentioning Vatican archives… that’s serious.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-02.webp' },
  { user: 'Theresa Souza', text: 'Historical documents like this are extremely rare.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-07.webp' },
  { user: 'Susan Andrews', text: 'If this is authentic, it changes a lot.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-08.webp' },
  { user: 'Andrew Lewis', text: 'This doesn’t feel sensationalized. It feels respectful.' },
  { user: 'Vera Lewis', text: 'Did they really say this prayer was hidden for centuries?', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-12.webp' },
  { user: 'Iris McGuire', text: 'I just got chills hearing that.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-13.webp' },
  { user: 'Gilbert Lee', text: 'The wording sounds ancient, not modern at all.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-17.webp' },
  { user: 'Elaine Rogers', text: 'I repeated the words quietly… I instantly felt calmer.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-24.webp' },
  { user: 'Martha Jones', text: 'My grandmother used to say something similar before sleeping.' },
  { user: 'Joan Lee', text: 'I didn’t expect to feel emotional watching a news broadcast.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-33.webp' },
  { user: 'Paul Vieira', text: 'Okay… I’m actually praying along now.' },
  { user: 'Anna Parker', text: 'Amen 🙏 I feel peace in my heart.' },
  { user: 'Adriana Gomez', text: 'I’m crying… this feels real.' },
  { user: 'Elizabeth Finley', text: 'Please pray so I can pay off 40,000 in credit card debt and bless my grandkids’ studies.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-39.webp' },
  { user: 'John Palmer', text: 'I ask for a blessing for a job to lift my family from hardship and finally own a home.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-49.webp' },
  { user: 'Nadia Ellis', text: 'I ask for prayer for my marriage and for healing in my body.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-58.webp' },
  { user: 'Trevor Hamilton', text: 'I’ve never seen prayer discussed like this on a news channel.', avatar: 'https://specialnew.online/wp-content/uploads/2025/09/3.webp' },
  { user: 'Lauren White', text: 'This feels more like a revelation than a report.', avatar: 'https://specialnew.online/wp-content/uploads/2025/09/2.webp' },
  { user: 'Ethan Brooks', text: 'You can tell this wasn’t meant to be commercialized.', avatar: 'https://specialnew.online/wp-content/uploads/2025/09/8.webp' },
  { user: 'Hannah Collins', text: 'The words sound simple, but very powerful.', avatar: 'https://specialnew.online/wp-content/uploads/2025/09/9.webp' },
  { user: 'Mark Reynolds', text: 'I paused everything else just to listen carefully.' },
  { user: 'Natalie Perez', text: 'It feels like something meant for this exact moment in time.' },
  { user: 'Stephen Moore', text: 'I wasn’t planning to pray today, but here I am.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-41.webp' },
  { user: 'Rachel Thompson', text: 'My chest feels lighter listening to this.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-44.webp' },
  { user: 'Kevin Walker', text: 'This prayer feels different… deeper somehow.' },
  { user: 'Linda Harris', text: 'I don’t remember the last time I felt this calm.' },
  { user: 'Patrick O’Neil', text: 'I believe there’s a reason this is being revealed now.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-46.webp' },
  { user: 'Monica Alvarez', text: 'I closed my eyes and followed every word.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-48.webp' },
  { user: 'Brian Scott', text: 'I feel peace like I haven’t felt in years.' },
  { user: 'Angela Brooks', text: 'Amen 🙏 I’m praying for everyone here.' },
  { user: 'Samuel Wright', text: 'This doesn’t feel like television… it feels sacred.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-52.webp' },
  { user: 'Denise Miller', text: 'I’m grateful I stayed until this moment.', avatar: 'https://oracaosagrada.viveremharmonia.com/wp-content/uploads/2025/05/osa_foto_perfil_00-55.webp' },
  { user: 'Support Team', text: 'If you feel called, stay with us in prayer. You are not alone. 🙏' },
];

export const scheduledMessages: ChatMsg[] = raw.map(m => ({ ...m, avatar: m.avatar || defaultAvatar }));
