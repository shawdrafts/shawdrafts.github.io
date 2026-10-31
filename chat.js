// ShawDrafts Blog — AI Assistant (FAQ bot)
(function() {
  const R = [
    { k: ['price','pricing','cost','charge','rate','fee','kitna','paisa'],
      a: "My Fiverr gigs start at $10 for blog posts, designs and logos. Custom projects are quoted based on scope — message me on Fiverr for an exact quote: fiverr.com/shawdrafts" },
    { k: ['service','offer','what do you do','kaam'],
      a: "I offer 4 services: ✍️ SEO blog writing, 🎨 Canva design (posts, carousels, posters), 🌐 WordPress websites, and 📈 Google Ads setup & management." },
    { k: ['hire','contact','work with','order','book'],
      a: "You can hire me on Fiverr: fiverr.com/shawdrafts — DM me on Instagram @ha_shaw_official — or WhatsApp me directly: wa.me/923284411298. I reply fast!" },
    { k: ['who','about','name','tum kaun'],
      a: "I'm Syed Haider Ali Shah Bukhari — a freelancer from Burewala, Pakistan, working with clients worldwide. 40+ certifications across HubSpot, Google, Canva and more." },
    { k: ['seo','blog','article','content'],
      a: "I write SEO blog posts that rank on Google and turn readers into buyers — starting at $10 on Fiverr. Every post is original and optimized." },
    { k: ['design','logo','canva','poster','graphic'],
      a: "I design logos, social posts, carousels and posters in Canva — bold, professional, photo-forward style. Logo gigs start at $10 on Fiverr." },
    { k: ['wordpress','website','web'],
      a: "I build WordPress websites — business sites, blogs, portfolios and WooCommerce stores. Message me on Fiverr with your requirements for a quote." },
    { k: ['ads','google ads','advertising'],
      a: "I'm Google Ads certified (Search & Creative, 2026). I set up and manage campaigns that track conversions, not just clicks." },
    { k: ['certificate','certification','qualified'],
      a: "I hold 40+ certifications: 19 HubSpot, 17 Google, 12 Canva, 9 Coursera, 2 OPSWAT cybersecurity. All listed on my Fiverr profile." },
    { k: ['hello','hi','salam','hey','aoa'],
      a: "Hello! 👋 Welcome to ShawDrafts. Ask me about my services, pricing, or how to hire me!" },
    { k: ['thank','shukriya'],
      a: "You're welcome! Anything else I can help with?" },
  ];
  const FALLBACK = "Good question! Message me on Fiverr (fiverr.com/shawdrafts), Instagram @ha_shaw_official, or WhatsApp wa.me/923284411298 — I reply personally.";

  function reply(q) {
    q = q.toLowerCase();
    for (const r of R) {
      if (r.k.some(k => q.includes(k))) return r.a;
    }
    return FALLBACK;
  }

  // Build UI
  const css = `
  #sd-chat-btn{position:fixed;bottom:24px;right:24px;width:60px;height:60px;border-radius:50%;
    background:linear-gradient(135deg,#00d4ff,#8b5cf6);border:none;cursor:pointer;z-index:9999;
    box-shadow:0 8px 30px rgba(0,212,255,.4);font-size:28px;display:flex;align-items:center;justify-content:center}
  #sd-chat-win{position:fixed;bottom:100px;right:24px;width:340px;max-width:calc(100vw - 48px);height:440px;
    background:#12121f;border:1px solid #23233a;border-radius:18px;z-index:9999;display:none;
    flex-direction:column;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.5)}
  #sd-chat-win.open{display:flex}
  #sd-chat-head{background:linear-gradient(90deg,#00d4ff,#8b5cf6);padding:14px 18px;color:#080810;font-weight:800}
  #sd-chat-head small{display:block;font-weight:600;opacity:.75}
  #sd-chat-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px}
  .sd-msg{max-width:85%;padding:10px 14px;border-radius:14px;font-size:14px;line-height:1.5}
  .sd-bot{background:#1e1e30;color:#e5e5f5;align-self:flex-start;border-bottom-left-radius:4px}
  .sd-user{background:#00d4ff;color:#080810;align-self:flex-end;border-bottom-right-radius:4px;font-weight:600}
  #sd-chat-in{display:flex;border-top:1px solid #23233a;padding:12px;gap:8px}
  #sd-chat-in input{flex:1;background:#0a0a14;border:1px solid #23233a;border-radius:24px;
    padding:10px 16px;color:#fff;font-size:14px;outline:none}
  #sd-chat-in button{background:#00d4ff;border:none;border-radius:50%;width:42px;height:42px;
    cursor:pointer;font-size:18px;flex-shrink:0}
  `;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  const btn = document.createElement('button');
  btn.id = 'sd-chat-btn'; btn.innerHTML = '💬'; btn.setAttribute('aria-label','Chat');
  const win = document.createElement('div'); win.id = 'sd-chat-win';
  win.innerHTML = `<div id="sd-chat-head">ShawDrafts Assistant<small>Ask about services, pricing, hiring</small></div>
    <div id="sd-chat-msgs"></div>
    <div id="sd-chat-in"><input placeholder="Type your question..." maxlength="300"><button>➤</button></div>`;
  document.body.appendChild(btn); document.body.appendChild(win);

  const msgs = win.querySelector('#sd-chat-msgs');
  const input = win.querySelector('input');
  function add(t, cls) {
    const d = document.createElement('div');
    d.className = 'sd-msg ' + cls; d.textContent = t;
    msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
  }
  function send() {
    const q = input.value.trim(); if (!q) return;
    add(q, 'sd-user'); input.value = '';
    setTimeout(() => add(reply(q), 'sd-bot'), 500);
  }
  btn.onclick = () => {
    win.classList.toggle('open');
    if (win.classList.contains('open') && !msgs.children.length)
      add("Hi! I'm the ShawDrafts assistant. Ask me about services, pricing, or how to hire me. 👋", 'sd-bot');
  };
  win.querySelector('button').onclick = send;
  input.onkeydown = e => { if (e.key === 'Enter') send(); };
})();
