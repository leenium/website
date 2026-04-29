const LEENIUM_THEMES = {
  leenium:     { bg:'#060b0f', bg2:'#060c10', panel:'#0b1319', line:'#1d313d', lineHi:'#284050', tx:'#d8f7ea', muted:'#8cb7a9', accent:'#35d6a0', blue:'#376781', warn:'#ffd479', red:'#ff5f56', glow1:'rgba(53,214,160,0.07)', glow2:'rgba(74,184,232,0.045)' },
  catppuccin:  { bg:'#1e1e2e', bg2:'#181825', panel:'#313244', line:'#45475a', lineHi:'#585b70', tx:'#cdd6f4', muted:'#a6adc8', accent:'#89b4fa', blue:'#74c7ec', warn:'#f9e2af', red:'#f38ba8', glow1:'rgba(137,180,250,0.07)', glow2:'rgba(116,199,236,0.045)' },
  ethereal:    { bg:'#060B1E', bg2:'#080c1f', panel:'#0e1530', line:'#1c2650', lineHi:'#2a3870', tx:'#ffcead', muted:'#a3bfd1', accent:'#7d82d9', blue:'#a3bfd1', warn:'#E9BB4F', red:'#ED5B5A', glow1:'rgba(125,130,217,0.08)', glow2:'rgba(163,191,209,0.04)' },
  everforest:  { bg:'#2d353b', bg2:'#272e34', panel:'#343f46', line:'#475258', lineHi:'#596165', tx:'#d3c6aa', muted:'#a7b7a8', accent:'#7fbbb3', blue:'#83c092', warn:'#dbbc7f', red:'#e67e80', glow1:'rgba(127,187,179,0.07)', glow2:'rgba(131,192,146,0.04)' },
  gruvbox:     { bg:'#282828', bg2:'#242424', panel:'#3c3836', line:'#504945', lineHi:'#665c54', tx:'#d4be98', muted:'#a89984', accent:'#7daea3', blue:'#7daea3', warn:'#d8a657', red:'#ea6962', glow1:'rgba(125,174,163,0.07)', glow2:'rgba(216,166,87,0.04)' },
  hackerman:   { bg:'#0B0C16', bg2:'#0c0d18', panel:'#14162a', line:'#1e2040', lineHi:'#2e3255', tx:'#ddf7ff', muted:'#85E1FB', accent:'#82FB9C', blue:'#829dd4', warn:'#50f7d4', red:'#50f872', glow1:'rgba(130,251,156,0.08)', glow2:'rgba(130,157,212,0.04)' },
  kanagawa:    { bg:'#1f1f28', bg2:'#1a1a22', panel:'#2d2d3a', line:'#363646', lineHi:'#54546d', tx:'#dcd7ba', muted:'#938aa9', accent:'#7e9cd8', blue:'#7fb4ca', warn:'#c0a36e', red:'#c34043', glow1:'rgba(126,156,216,0.07)', glow2:'rgba(127,180,202,0.04)' },
  lumon:       { bg:'#16242d', bg2:'#131f27', panel:'#1b2d40', line:'#304860', lineHi:'#4d86b0', tx:'#d6e2ee', muted:'#6fb8e3', accent:'#8bc9eb', blue:'#6fb8e3', warn:'#b4e4f6', red:'#4d86b0', glow1:'rgba(139,201,235,0.08)', glow2:'rgba(111,184,227,0.05)' },
  'matte-black':{ bg:'#121212', bg2:'#0e0e0e', panel:'#1a1a1a', line:'#333333', lineHi:'#444444', tx:'#bebebe', muted:'#8a8a8d', accent:'#e68e0d', blue:'#e68e0d', warn:'#FFC107', red:'#D35F5F', glow1:'rgba(230,142,13,0.08)', glow2:'rgba(255,193,7,0.04)' },
  miasma:      { bg:'#222222', bg2:'#1a1a1a', panel:'#2a2a2a', line:'#333333', lineHi:'#444444', tx:'#c2c2b0', muted:'#999988', accent:'#78824b', blue:'#c9a554', warn:'#c9a554', red:'#b36d43', glow1:'rgba(120,130,75,0.08)', glow2:'rgba(201,165,84,0.04)' },
  nord:        { bg:'#2e3440', bg2:'#272c36', panel:'#3b4252', line:'#434c5e', lineHi:'#4c566a', tx:'#d8dee9', muted:'#7b88a1', accent:'#81a1c1', blue:'#88c0d0', warn:'#ebcb8b', red:'#bf616a', glow1:'rgba(129,161,193,0.07)', glow2:'rgba(136,192,208,0.04)' },
  'osaka-jade':{ bg:'#111c18', bg2:'#0e1814', panel:'#1a2b22', line:'#23372B', lineHi:'#384d3f', tx:'#C1C497', muted:'#8e9468', accent:'#509475', blue:'#2DD5B7', warn:'#E5C736', red:'#FF5345', glow1:'rgba(80,148,117,0.08)', glow2:'rgba(45,213,183,0.04)' },
  'retro-82':  { bg:'#05182e', bg2:'#04152a', panel:'#0a2240', line:'#134e5a', lineHi:'#1e6070', tx:'#f6dcac', muted:'#8cbfb8', accent:'#faa968', blue:'#028391', warn:'#e97b3c', red:'#f85525', glow1:'rgba(250,169,104,0.08)', glow2:'rgba(2,131,145,0.05)' },
  ristretto:   { bg:'#2c2525', bg2:'#261f1f', panel:'#332b2b', line:'#403e41', lineHi:'#524e53', tx:'#e6d9db', muted:'#c3b7b8', accent:'#f38d70', blue:'#85dacc', warn:'#f9cc6c', red:'#fd6883', glow1:'rgba(243,141,112,0.08)', glow2:'rgba(133,218,204,0.04)' },
  'tokyo-night':{ bg:'#1a1b26', bg2:'#16161e', panel:'#24253a', line:'#32344a', lineHi:'#444b6a', tx:'#a9b1d6', muted:'#565f89', accent:'#7aa2f7', blue:'#7dcfff', warn:'#e0af68', red:'#f7768e', glow1:'rgba(122,162,247,0.07)', glow2:'rgba(125,207,255,0.04)' },
  vantablack:  { bg:'#000000', bg2:'#000000', panel:'#0a0a0a', line:'#1a1a1a', lineHi:'#2a2a2a', tx:'#ffffff', muted:'#8d8d8d', accent:'#b0b0b0', blue:'#b0b0b0', warn:'#cecece', red:'#a4a4a4', glow1:'rgba(255,255,255,0.03)', glow2:'rgba(255,255,255,0.02)' },
};

function leeniumApplyTheme(name) {
  const t = LEENIUM_THEMES[name];
  if (!t) return;
  const r = document.documentElement;
  // main site vars
  r.style.setProperty('--bg',     t.bg);
  r.style.setProperty('--bg2',    t.bg2);
  r.style.setProperty('--panel',  t.panel);
  r.style.setProperty('--bdr',    t.line);
  r.style.setProperty('--bdhi',   t.lineHi);
  r.style.setProperty('--tx',     t.tx);
  r.style.setProperty('--muted',  t.muted);
  r.style.setProperty('--accent', t.accent);
  r.style.setProperty('--blue',   t.blue);
  r.style.setProperty('--warn',   t.warn);
  r.style.setProperty('--red',    t.red);
  // manual site vars
  r.style.setProperty('--bg-2',   t.bg2);
  r.style.setProperty('--line',   t.line);
  r.style.setProperty('--line-hi',t.lineHi);
  r.style.setProperty('--text',   t.tx);
  r.style.setProperty('--danger', t.red);
  // body gradient (main page only)
  if (document.body) {
    const grad = `radial-gradient(ellipse 70% 40% at 12% -8%, ${t.glow1} 0%, transparent 55%), radial-gradient(ellipse 55% 30% at 88% 4%, ${t.glow2} 0%, transparent 50%), ${t.bg}`;
    document.body.style.background = grad;
  }
  localStorage.setItem('leenium-site-theme', name);
  // update picker label if present
  const lbl = document.getElementById('leeniumThemeLabel');
  if (lbl) lbl.textContent = name;
}

function leeniumLoadTheme() {
  const saved = localStorage.getItem('leenium-site-theme') || 'leenium';
  leeniumApplyTheme(saved);
  return saved;
}

// apply immediately to avoid flash
leeniumLoadTheme();

document.addEventListener('DOMContentLoaded', function () {
  const picker = document.getElementById('leeniumThemePicker');
  if (!picker) return;

  const current = localStorage.getItem('leenium-site-theme') || 'leenium';

  Object.keys(LEENIUM_THEMES).forEach(function (name) {
    const t = LEENIUM_THEMES[name];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = name;
    btn.title = name;
    btn.style.cssText = [
      'display:block', 'width:100%', 'text-align:left',
      'padding:4px 10px', 'border:none', 'cursor:pointer',
      'font:inherit', 'font-size:0.75rem', 'letter-spacing:0.04em',
      `background:${t.bg}`, `color:${t.tx}`,
      `border-left:2px solid ${name === current ? t.accent : 'transparent'}`,
      'transition:border-color 0.1s, background 0.1s',
      'white-space:nowrap',
    ].join(';');
    btn.addEventListener('mouseenter', function () {
      btn.style.background = t.panel;
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.background = t.bg;
    });
    btn.addEventListener('click', function () {
      leeniumApplyTheme(name);
      // update active border on all buttons
      picker.querySelectorAll('button').forEach(function (b) {
        b.style.borderLeftColor = 'transparent';
      });
      btn.style.borderLeftColor = t.accent;
      // close picker
      picker.style.display = 'none';
    });
    picker.appendChild(btn);
  });
});
