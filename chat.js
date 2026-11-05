// ShawDrafts Blog — AI Assistant (expanded FAQ)
(function() {
  const R = [
    { k: ['price','pricing','cost','charge','rate','fee','kitna','paisa','pese'],
      a: "My Fiverr gigs start at $10: blog posts, logos, Instagram designs — all $10/$25/$45 tiers. Custom projects quoted on scope. See full details: shawdrafts.github.io/gigs/" },
    { k: ['service','offer','what do you do','kaam'],
      a: "4 services: ✍️ SEO blog writing, 🎨 Canva design (posts, carousels, posters, logos), 🌐 WordPress websites, 📈 Google Ads setup & management. Details: shawdrafts.github.io/gigs/" },
    { k: ['hire','contact','work with','order','book','start a project'],
      a: "3 ways: 🟢 Fiverr: fiverr.com/shawdrafts 🟣 Instagram DM: @ha_shaw_official 🟢 WhatsApp: wa.me/923284411298 — I reply fast!" },
    { k: ['who','about','your name','tum kaun','introduction'],
      a: "I'm Syed Haider Ali Shah Bukhari — freelancer from Burewala, Pakistan, serving clients worldwide. 40+ certifications. Full story: shawdrafts.github.io/about/" },
    { k: ['seo','blog','article','content writing','rank google'],
      a: "I write SEO blog posts that rank on Google and convert readers to buyers — from $10 on Fiverr. Original, researched, keyword-optimized." },
    { k: ['logo','brand identity'],
      a: "Professional logos from $10: 2-5 concepts, transparent PNG, social versions, brand sheet in Premium. Order: fiverr.com/shawdrafts/design-a-professional-logo-for-your-business" },
    { k: ['design','canva','poster','graphic','instagram post','carousel','thumbnail'],
      a: "I design scroll-stopping Instagram posts & carousels, posters, thumbnails — bold photo-forward style. From $10 on Fiverr." },
    { k: ['wordpress','website','web design','site banani'],
      a: "I build WordPress sites — business, blogs, portfolios, WooCommerce stores. Message me on Fiverr or WhatsApp with your requirements for a quote." },
    { k: ['ads','google ads','advertising','ppc'],
      a: "Google Ads certified (Search & Creative 2026). I set up & manage campaigns focused on conversions, not just clicks." },
    { k: ['certificate','certification','qualified','credential'],
      a: "40+ certs: 19 HubSpot, 17 Google, 12 Canva, 9 Coursera, 2 OPSWAT cybersecurity, Saylor English. Listed on my Fiverr profile." },
    { k: ['review','testimonial','feedback','rating'],
      a: "Read client reviews and leave your own: shawdrafts.github.io/reviews/ — your feedback means everything!" },
    { k: ['subscribe','newsletter','updates','email list'],
      a: "Subscribe for marketing tips & updates — use the subscribe box in the footer of any page. One useful email, no spam." },
    { k: ['portfolio','samples','work examples','previous work'],
      a: "See my design samples: shawdrafts.github.io/gigs/ — logos, posters, business cards & more." },
    { k: ['delivery','how long','time','kitne din'],
      a: "Delivery: blog posts 2-4 days, logos 2-4 days, Instagram packs 1-3 days depending on package. Rush delivery available as a gig extra." },
    { k: ['revision','changes','edit'],
      a: "Every package includes revisions (1-3 depending on tier). I revise until you're happy — within the package scope." },
    { k: ['payment','pay','paisa kaise'],
      a: "All payments go securely through Fiverr — cards, PayPal & more. Your money is protected until you approve the delivery." },
    { k: ['location','where','based','country','pakistan'],
      a: "I'm based in Burewala, Punjab, Pakistan — but I work with clients in every timezone, worldwide. 🌍" },
    { k: ['language','urdu','english','zuban'],
      a: "I communicate in English and Urdu. I can understand your requirements in either language." },
    { k: ['hello','hi','salam','hey','aoa','assalam'],
      a: "Hello! 👋 Welcome to ShawDrafts. Ask me about services, pricing, gigs, reviews — anything!" },
    { k: ['thank','shukriya','thanks'],
      a: "You're welcome! Anything else I can help with? 😊" },
    { k: ['bye','allah hafiz','goodbye'],
      a: "Allah Hafiz! 👋 Come back anytime — or hire me on Fiverr: fiverr.com/shawdrafts" },
    { k: ['ai studios','video'],
      a: "I reviewed AI Studios (AI video with avatars) — read it: shawdrafts.github.io/posts/ai-studios-review/. My affiliate link is inside if you want to try it!" },
    { k: ['fiverr','gig'],
      a: "My 4 Fiverr gigs: SEO blog writing, SEO for startups, Instagram posts & carousels, logo design — all from $10. Full details: shawdrafts.github.io/gigs/" },
    { k: ['whatsapp'],
      a: "WhatsApp me directly: wa.me/923284411298 — fastest way to reach me! 🟢" },
    { k: ['instagram','insta'],
      a: "Follow me: @ha_shaw_official — daily marketing tips, behind the scenes & updates!" },
    { k: ['facebook','fb'],
      a: "Find me on Facebook: ShawDrafts page + my personal profile. Links in the Find Me Everywhere section!" },
    { k: ['social','follow'],
      a: "Find me everywhere: shawdrafts.github.io/social/ — Instagram @ha_shaw_official, Facebook ShawDrafts, Fiverr @shawdrafts, GitHub @shawdrafts, LinkedIn, WhatsApp!" },
    { k: ['google cert','skillshop'],
      a: "17 Google Skillshop certs: Ads Search (94%), Creative (86%), Analytics, Display, Video, Shopping, Apps, 360 suite. Details + verification: shawdrafts.github.io/certs/google/" },
    { k: ['hubspot'],
      a: "19 HubSpot Academy certs: Digital Marketing, Inbound, Social Media, Sales, RevOps + software certs. Full list: shawdrafts.github.io/certs/hubspot/" },
    { k: ['canva cert'],
      a: "12 Canva Design School certificates — design, AI and marketing. List: shawdrafts.github.io/certs/canva/" },
  ];
  const FALLBACK = "Good question! I can answer about: services, pricing, gigs, portfolio, delivery, revisions, reviews, contact. Or reach me directly: Fiverr fiverr.com/shawdrafts · WhatsApp wa.me/923284411298";

  function reply(q) {
    q = q.toLowerCase();
    let best = null, bestLen = 0;
    for (const r of R) {
      for (const k of r.k) {
        if (q.includes(k) && k.length > bestLen) { best = r.a; bestLen = k.length; }
      }
    }
    return best || FALLBACK;
  }

  const css = `
  #sd-chat-btn{position:fixed;bottom:24px;right:24px;width:60px;height:60px;border-radius:50%;
    background:linear-gradient(135deg,#00d4ff,#8b5cf6);border:none;cursor:pointer;z-index:9999;
    box-shadow:0 8px 30px rgba(0,212,255,.4);font-size:28px;display:flex;align-items:center;justify-content:center;
    transition:transform .2s}
  #sd-chat-btn:hover{transform:scale(1.1)}
  #sd-chat-win{position:fixed;bottom:100px;right:24px;width:350px;max-width:calc(100vw - 48px);height:460px;
    background:#12121f;border:1px solid #23233a;border-radius:18px;z-index:9999;display:none;
    flex-direction:column;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.5)}
  #sd-chat-win.open{display:flex}
  #sd-chat-head{background:linear-gradient(90deg,#00d4ff,#8b5cf6);padding:14px 18px;color:#080810;font-weight:800}
  #sd-chat-head small{display:block;font-weight:600;opacity:.75}
  #sd-chat-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px}
  .sd-msg{max-width:88%;padding:10px 14px;border-radius:14px;font-size:14px;line-height:1.55}
  .sd-bot{background:#1e1e30;color:#e5e5f5;align-self:flex-start;border-bottom-left-radius:4px}
  .sd-user{background:#00d4ff;color:#080810;align-self:flex-end;border-bottom-right-radius:4px;font-weight:600}
  #sd-chat-in{display:flex;border-top:1px solid #23233a;padding:12px;gap:8px}
  #sd-chat-in input{flex:1;background:#0a0a14;border:1px solid #23233a;border-radius:24px;
    padding:10px 16px;color:#fff;font-size:14px;outline:none}
  #sd-chat-in button{background:#00d4ff;border:none;border-radius:50%;width:42px;height:42px;cursor:pointer;font-size:18px;flex-shrink:0}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  const btn = document.createElement('button');
  btn.id = 'sd-chat-btn'; btn.innerHTML = '💬'; btn.setAttribute('aria-label','Chat with ShawDrafts assistant');
  const win = document.createElement('div'); win.id = 'sd-chat-win';
  win.innerHTML = `<div id="sd-chat-head">ShawDrafts Assistant<small>Ask me anything about my work</small></div>
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
  const quick = ['Services','Pricing','Reviews','Contact'];
  function send() {
    const q = input.value.trim(); if (!q) return;
    add(q, 'sd-user'); input.value = '';
    setTimeout(() => add(reply(q), 'sd-bot'), 400);
  }
  btn.onclick = () => {
    win.classList.toggle('open');
    if (win.classList.contains('open') && !msgs.children.length) {
      add("Hi! I'm the ShawDrafts assistant 👋 Ask me about services, pricing, gigs, reviews, delivery — anything!", 'sd-bot');
      const qr = document.createElement('div');
      qr.style.cssText = 'display:flex;gap:6px;flex-wrap:wrap;align-self:flex-start';
      quick.forEach(q => {
        const b = document.createElement('button');
        b.textContent = q;
        b.style.cssText = 'background:#1e1e30;color:#00d4ff;border:1px solid #00d4ff;border-radius:20px;padding:6px 12px;font-size:12px;cursor:pointer';
        b.onclick = () => { input.value = q; send(); };
        qr.appendChild(b);
      });
      msgs.appendChild(qr); msgs.scrollTop = msgs.scrollHeight;
    }
  };
  win.querySelector('#sd-chat-in button').onclick = send;
  input.onkeydown = e => { if (e.key === 'Enter') send(); };
})();
