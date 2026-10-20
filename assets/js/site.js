/* ===== CSC DESK: single source of truth. Edit here, every page updates. ===== */
const SITE = {
  defaultTheme: "light",
  name: "CSC Desk",            // change brand name here
  year: 2026,
  nav: [
    { label: "Home",        href: "index.html",        icon: "house" },
    { label: "All tools",   href: "index.html#tools",  icon: "toolbox" },
    { label: "Quick links", href: "index.html#links",  icon: "bolt" }
    // add About / Contact / Privacy here once those pages exist
  ],
  quickLinks: [   // official portals only; re-check URLs every few months
    ["Aadhaar", "UIDAI download & update", "id-card", "https://uidai.gov.in"],
    ["PAN card", "NSDL / UTIITSL", "address-card", "https://www.onlineservices.nsdl.com"],
    ["Ayushman card", "Eligibility & status", "shield-halved", "https://beneficiary.nha.gov.in"],
    ["Driving licence", "Parivahan Sarathi", "car", "https://sarathi.parivahan.gov.in"],
    ["Income tax", "e-Filing portal", "indian-rupee-sign", "https://www.incometax.gov.in"],
    ["UHBVN bill", "Haryana north zone", "bolt", "https://uhbvn.org.in"],
    ["DHBVN bill", "Haryana south zone", "bolt", "https://dhbvn.org.in"],
    ["Saral Haryana", "Haryana citizen services", "file-signature", "https://saralharyana.gov.in/"],
    ["CM Window status", "Check complaint status", "magnifying-glass-chart", "https://cmharyanacell.nic.in/citizen/view-status?TabID=V"],
    ["Parivar Pehchan Patra", "PPP office Haryana", "users", "https://ppp-office.haryana.gov.in/"],
    ["Mera Parivar", "Family ID (PPP) portal", "people-roof", "https://meraparivar.haryana.gov.in/"],
    ["Old age pension", "Beneficiary information", "hand-holding-heart", "https://pension.socialjusticehry.gov.in/Ben_Inf"],
    ["EPDS ration card", "Search ration card (RC)", "wheat-awn", "https://epds.haryanafood.gov.in/search-rc"],
    ["ePOS transactions", "Ration SRC transactions", "cash-register", "https://epos.haryanafood.gov.in/SRC_Trans_Int"],
    ["HR CD Service login", "Haryana CD service portal", "right-to-bracket", "https://hry.cdservice.in/Home/HRLogin"],
    ["Protean PAN agent", "PAN agent login (PAAM)", "id-badge", "https://www.onlineservices.proteantech.in/paam/login.html"],
    ["Housing PMS login", "Consumer login", "building", "https://consumer.housingpms.org.in/#/login?cid=544"],
    ["Samarth eGov (DDE MDU)", "University student login", "graduation-cap", "https://ddemdu.samarth.edu.in/index.php/site/login"],
    ["Haryana Roadways", "Online bus booking", "bus", "https://ebooking.hrtransport.gov.in/#/home"],
    ["DSSSB", "Delhi recruitment board", "briefcase", "https://dsssb.delhi.gov.in"],
    ["PM Awas Yojana (Gramin)", "Rural housing scheme", "house-chimney", "https://pmayg.nic.in"]
  ],
  cats: ["CSC counter", "Documents", "Photo & ID print", "PDF & image", "Calculators", "Utilities"],
  // [title, category, file, icon, description, live?]  -> add one line per new template.
  // live=1 shows "Ready"; live=0 shows "Soon" and is not clickable.
  tools: [
    ["Utility bill receipt", "CSC counter", "tools_bill_receipt_generator.html", "receipt", "Two half-A4 receipts: customer copy and office copy.", 1],
    ["Service rate list", "CSC counter", "tools_service_rate_list.html", "list-check", "Printable rate board for your counter.", 1],
    ["Counter stamp maker", "CSC counter", "tools_csc_stamp_maker.html", "stamp", "Round and rectangle shop stamps.", 1],
    ["Invoice generator", "CSC counter", "tools_invoice_generator.html", "file-invoice", "Simple GST-ready invoices.", 1],
    ["Visiting card maker", "CSC counter", "tools_visiting_card_maker.html", "address-book", "Print-ready cards, 10 per A4.", 1],
    ["Resume & biodata maker", "Documents", "haryana-resume-generator.html", "file-lines", "Bilingual resumes, fresher to experienced, with photo and A4 print.", 1],
    ["Haryana application maker", "Documents", "haryana-application-generator.html", "pen-to-square", "Pension, ration card, electricity, DOB verification, grievance and affidavits.", 1],
    ["Marriage biodata", "Documents", "tools_biodata_maker.html", "ring", "Family details, horoscope and partner preferences.", 1],
    ["Rent agreement", "Documents", "tools_agreement_format_generator.html", "house", "Residential and commercial formats.", 1],
    ["Salary slip", "Documents", "tools_salary_slip_generator.html", "money-check-dollar", "Earnings, deductions and net pay.", 1],
    ["Affidavit formats", "Documents", "tools_affidavit_format.html", "scale-balanced", "Common affidavit drafts.", 1],
    ["Cover letter", "Documents", "tools_cover_letter_generator.html", "envelope-open-text", "Job application letters.", 1],
    ["Bank application", "Documents", "tools_bank_application.html", "building-columns", "Standard letters for bank work.", 1],
    ["Admit card holder", "Documents", "tools_admit_card_holder.html", "ticket", "Keep exam admit card details together.", 1],
    ["Passport photo sheet", "Photo & ID print", "tools_passport_photo_sheet.html", "image", "Passport and stamp photos on A4.", 1],
    ["PAN & ID card print", "Photo & ID print", "tools_pan_aadhaar_print.html", "print", "Front and back card scans at exact size.", 1],
    ["ID card print (front + back)", "Photo & ID print", "tools_id_card_print.html", "credit-card", "Front and back of a card on one A4, exact card size.", 1],
    ["Student ID card", "Photo & ID print", "tools_student_id_card.html", "graduation-cap", "School and college ID layouts.", 1],
    ["Photo + name joiner", "Photo & ID print", "tools_photo_name_joiner.html", "id-badge", "Add name and date strip for exam forms.", 1],
    ["Photo + signature joiner", "Photo & ID print", "tools_photo_signature_joiner.html", "signature", "Combine photo and signature in one image.", 1],
    ["Photo & signature resizer", "PDF & image", "tools_photo_resizer.html", "up-right-and-down-left-from-center", "Resize to exact pixels and KB for exam forms.", 1],
    ["Image compressor", "PDF & image", "tools_image_compressor.html", "compress", "Reduce size for portal uploads.", 1],
    ["Images to PDF", "PDF & image", "tools_pdf_merger.html", "file-pdf", "Combine photos and scans into one PDF.", 1],
    ["PDF merge", "PDF & image", "tools_pdf_merge.html", "object-group", "Join several PDFs.", 1],
    ["PDF split", "PDF & image", "tools_pdf_split.html", "scissors", "Pull pages out of a PDF.", 1],
    ["Crop image", "PDF & image", "tools_image_crop.html", "crop-simple", "Crop to standard form sizes.", 1],
    ["Age calculator", "Calculators", "tools_age_calculator.html", "cake-candles", "Exact age for exam forms.", 1],
    ["GST calculator", "Calculators", "tool-template.html", "percent", "Add or remove GST from a price.", 1],
    ["Loan EMI calculator", "Calculators", "tools_loan_emi_calculator.html", "calculator", "Monthly EMI and total interest.", 1],
    ["Percentage calculator", "Calculators", "tools_percentage_calculator.html", "chart-simple", "Marks percentage, percent of a value, and change.", 1],
    ["Date difference", "Calculators", "tools_date_calculator.html", "calendar-days", "Days between two dates.", 1],
    ["QR code generator", "Utilities", "tools_qr_code_generator.html", "qrcode", "QR for links, UPI and text.", 1],
    ["Typing test", "Utilities", "tools_typing_test.html", "keyboard", "English and Hindi typing speed.", 1],
    ["Gold & silver rate", "Utilities", "tools_gold_silver_rate.html", "coins", "Type the daily rate, print a rate board, work out value.", 1],
    ["Notebook name sticker", "Utilities", "tools_notebook_sticker.html", "book", "Printable name labels.", 1],
    ["Multiple ID cards print", "Photo & ID print", "tools_multiple_id_card_print.html", "clone", "Up to 3 cards, front and back, on one A4.", 1],
    ["Image text reader (OCR)", "PDF & image", "tools_image_text_extractor.html", "wand-magic-sparkles", "Read text from a photo or scan, English and Hindi.", 1],
    ["CGPA to percentage", "Calculators", "tools_cgpa_calculator.html", "graduation-cap", "Convert CGPA using your university formula.", 1],
    ["Quick resume (one page)", "Documents", "tools_resume_builder.html", "file-lines", "Simple one-page resume. Fill, print, done.", 1]
  ]
};

(function () {
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const THEMES = [['light','Light green'],['purple','Purple'],['ocean','Ocean blue'],['rose','Rose'],['dark','Dark'],['auto','Auto (device)']];
  let theme = SITE.defaultTheme;
  try { theme = localStorage.getItem('cscdesk_theme') || theme; } catch (e) {}
  const applyTheme = v => v === 'auto' ? document.documentElement.removeAttribute('data-theme') : document.documentElement.setAttribute('data-theme', v);
  applyTheme(theme);
  const here = location.pathname.split('/').pop() || 'index.html';
  const I = n => `<i class="fa-solid fa-${n}" aria-hidden="true"></i>`;

  const header = document.getElementById('site-header');
  if (header) {
    header.className = 'site-header';
    header.innerHTML = `<div class="nav">
      <a class="logo" href="index.html"><span class="logo-mark">${I('desktop')}</span>${esc(SITE.name)}</a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Menu">${I('bars')}</button>
      <ul class="nav-links" id="nav-links">${SITE.nav.map(n =>
        `<li><a href="${esc(n.href)}"${n.href === here ? ' aria-current="page"' : ''}>${I(n.icon)}${esc(n.label)}</a></li>`).join('')}<li><select class="theme-pick" id="theme-pick" aria-label="Colour theme">${THEMES.map(([v,l]) => `<option value="${v}">${l}</option>`).join('')}</select></li></ul></div>`;
    const b = header.querySelector('.nav-toggle'), l = header.querySelector('.nav-links');
    b.addEventListener('click', () => b.setAttribute('aria-expanded', l.classList.toggle('open')));
  }
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML = `<p>&copy; ${SITE.year} ${esc(SITE.name)}. Free tools for CSC operators and cyber cafes.</p>
      <p>Not a government website. Quick links open official portals in a new tab.</p>`;
  }
  const q = document.getElementById('quick-links');
  if (q) q.innerHTML = SITE.quickLinks.map(([t, s, i, u]) =>
    `<a class="quick-card" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${I(i)}<div><h3>${esc(t)}</h3><p>${esc(s)}</p></div><span class="ext">${I('arrow-up-right-from-square')}</span></a>`).join('');

  const list = document.getElementById('tool-list');
  if (list) {
    const cats = document.getElementById('cats'), search = document.getElementById('tool-search');
    const all = ['All', ...SITE.cats]; let cat = 'All';
    const count = c => SITE.tools.filter(t => c === 'All' || t[1] === c).length;
    const stat = document.getElementById('stat-count');
    if (stat) stat.textContent = SITE.tools.filter(t => t[5]).length + ' ready, ' + SITE.tools.filter(t => !t[5]).length + ' coming';
    cats.innerHTML = all.map(c => `<button class="cat" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)} <small>${count(c)}</small></button>`).join('');
    const draw = () => {
      const term = search.value.trim().toLowerCase();
      const rows = SITE.tools.filter(t => (cat === 'All' || t[1] === cat) && (t[0] + ' ' + t[4] + ' ' + t[1]).toLowerCase().includes(term))
        .sort((a, b) => b[5] - a[5]);
      list.innerHTML = rows.length ? rows.map(([t, c, f, i, d, live]) => {
        const inner = `<span class="tool-ico">${I(i)}</span><div><h3>${esc(t)}</h3><p>${esc(d)}</p></div><span class="tag ${live ? 'live' : 'soon'}">${live ? 'Ready' : 'Soon'}</span>`;
        return live ? `<a class="tool" href="${esc(f)}">${inner}</a>` : `<div class="tool is-soon">${inner}</div>`;
      }).join('') : '<p class="empty">No tool found. Try another word, or pick All.</p>';
    };
    cats.addEventListener('click', e => {
      const b = e.target.closest('.cat'); if (!b) return; cat = b.dataset.c;
      cats.querySelectorAll('.cat').forEach(x => x.setAttribute('aria-pressed', x === b)); draw();
    });
    search.addEventListener('input', draw); draw();
  }
  const pick = document.getElementById('theme-pick');
  if (pick) { pick.value = theme; pick.addEventListener('change', () => { applyTheme(pick.value); try { localStorage.setItem('cscdesk_theme', pick.value); } catch (e) {} }); }
})();
