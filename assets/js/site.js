/* CSC Desk: shared site script (header, footer, tool registry, home page, helpers) */
(function () {
  'use strict';

  /* ---------- Tool registry: single source of truth for the home page ---------- */
  var CATS = [
    { id: 'photo', name: 'Photo & Image Tools', icon: 'fa-image' },
    { id: 'id', name: 'ID Card, Cards & Print', icon: 'fa-id-card' },
    { id: 'pdf', name: 'PDF Tools', icon: 'fa-file-pdf' },
    { id: 'govt', name: 'Govt Applications & Affidavits', icon: 'fa-landmark' },
    { id: 'docs', name: 'Resume & Documents', icon: 'fa-file-lines' },
    { id: 'bill', name: 'Receipts & Billing', icon: 'fa-receipt' },
    { id: 'calc', name: 'Calculators', icon: 'fa-calculator' },
    { id: 'exam', name: 'Exam & Education', icon: 'fa-graduation-cap' },
    { id: 'util', name: 'Quick Utilities', icon: 'fa-bolt' }
  ];

  var TOOLS = [
    // Photo & image
    ['tools_photo_resizer', 'Photo Resizer', 'Crop and resize a photo to exact pixels or mm and a maximum file size in KB.', 'photo', 'fa-crop-simple'],
    ['tools_sign_resizer', 'Signature Resizer', 'Crop and shrink a signature to the size and KB limit of a job form.', 'photo', 'fa-signature'],
    ['tools_thumb_resizer', 'Thumb Impression Resizer', 'Crop and resize left or right thumb impression for applications.', 'photo', 'fa-fingerprint'],
    ['tools_image_compressor', 'Image Compressor', 'Reduce image size to a target KB without changing its dimensions.', 'photo', 'fa-compress'],
    ['tools_image_converter_pro', 'Image Converter', 'Convert images between JPG, PNG and WebP.', 'photo', 'fa-right-left'],
    ['tools_image_crop', 'Image Crop Tool', 'Crop images with free or fixed aspect ratios.', 'photo', 'fa-crop'],
    ['tools_bg_remover', 'Background Remover', 'Remove or replace a plain background colour. Works best on studio style photos.', 'photo', 'fa-wand-magic-sparkles'],
    ['tools_ai_passport_studio', 'Passport & Stamp Photo Studio', 'Make passport and stamp size photo sheets with a background colour and cut lines.', 'photo', 'fa-user-large'],
    ['tools_name_date_photo', 'Name & Date on Photo', 'Add the candidate name and date strip below a photo for job forms.', 'photo', 'fa-calendar-day'],
    ['tools_photo_sign_joiner', 'Photo & Signature Joiner', 'Join photo and signature into a single image with adjustable border.', 'photo', 'fa-object-group'],
    ['tools_image_text_extractor', 'Image Text Extractor (OCR)', 'Read text from an image in English or Hindi and copy it.', 'photo', 'fa-font'],
    ['tools_whatsapp_image_print', 'WhatsApp Image Print', 'Enhance and print many images on A4 pages in a grid.', 'photo', 'fa-print'],
    // ID cards and print
    ['tools_admit_card_holder', 'Admit Card Holder', 'Printable admit card holder layouts.', 'id', 'fa-ticket'],
    // PDF
    ['tools_jpg_to_pdf', 'JPG to PDF', 'Turn JPG and PNG images into one PDF.', 'pdf', 'fa-file-image'],
    ['tools_pdf_merger', 'PDF Merger', 'Join several PDF files into one.', 'pdf', 'fa-object-ungroup'],
    ['tools_pdf_splitter', 'PDF Splitter', 'Split a PDF into pages or page ranges.', 'pdf', 'fa-scissors'],
    ['tools_pdf_watermark', 'PDF Watermark', 'Add a text watermark to every page of a PDF.', 'pdf', 'fa-droplet'],
    ['tools_word_to_pdf', 'Word to PDF', 'Convert a .docx file to PDF (text, tables and basic formatting).', 'pdf', 'fa-file-word'],
    // Govt
    ['haryana-application-generator', 'Application Generator', 'Ready application letters for common government services, in English and Hindi.', 'govt', 'fa-file-signature'],
    ['tools_affidavit_format', 'Affidavit Formats', 'Common affidavit formats ready to fill and print.', 'govt', 'fa-gavel'],
    ['tools_bank_application', 'Bank Applications', 'Bank letters and application formats.', 'govt', 'fa-building-columns'],
    ['tools_agreement_format_generator', 'Agreement Generator', 'Rent and other agreement formats.', 'govt', 'fa-handshake'],
    // Docs
    ['haryana-resume-generator', 'Resume Builder', 'Resume maker with several templates.', 'docs', 'fa-id-badge'],
    // Billing
    ['tools_bill_receipt_generator', 'Bill & Receipt Generator', 'Receipts for utility, recharge and other payments.', 'bill', 'fa-receipt'],
    // Calculators
    ['tools_age_calculator', 'Age Calculator', 'Exact age on a cut-off date for exams.', 'calc', 'fa-cake-candles'],
    ['tools_date_calculator', 'Date Calculator', 'Days between dates, or add and subtract days.', 'calc', 'fa-calendar-days'],
    ['tools_percentage_calculator', 'Percentage Calculator', 'Percent of, percent change and marks percentage.', 'calc', 'fa-percent'],
    ['tools_loan_emi_calculator', 'Loan EMI Calculator', 'EMI, total interest and repayment schedule.', 'calc', 'fa-indian-rupee-sign'],
    ['tools_cgpa_calculator', 'CGPA Calculator', 'CGPA and SGPA to percentage and back.', 'calc', 'fa-chart-simple'],
    ['tools_gold_silver_rate', 'Gold & Silver Value Calculator', 'Enter today\'s rate and get value by weight and purity.', 'calc', 'fa-coins'],
    // Exam
    ['tools_typing_test', 'Typing Test', 'Check typing speed and accuracy in English or Hindi.', 'exam', 'fa-keyboard'],
    // Utilities
    ['tools_qr_code_generator', 'QR Code Generator', 'QR codes for text, links, UPI and WhatsApp.', 'util', 'fa-qrcode'],
    ['tools_whatsapp_ultimate', 'WhatsApp Direct Message', 'Open a WhatsApp chat with any number without saving it.', 'util', 'fa-whatsapp'],
    ['tools_pvc_id_print', 'PVC ID Card Print', 'Crop front and back of an ID and print them at card size on A4.', 'id', 'fa-credit-card'],
    ['tools_pan_aadhaar_print', 'PAN & Aadhaar Print', 'Print PAN, Aadhaar and similar cards at actual size, front and back.', 'id', 'fa-address-card'],
    ['tools_student_id_creator', 'Student ID Card Creator', 'Create school and college ID cards and print many per sheet.', 'id', 'fa-user-graduate'],
    ['tools_farmer_id_maker', 'Farmer ID Card Maker', 'Make farmer ID cards with land details and print them.', 'id', 'fa-tractor'],
    ['tools_visiting_card_maker', 'Visiting Card Maker', 'Design a visiting card and print 10 per A4 sheet.', 'id', 'fa-address-book'],
    ['tools_notebook_sticker', 'Notebook Sticker Maker', 'Print name labels for notebooks on an A4 sheet.', 'id', 'fa-tag'],
    ['tools_csc_stamp_maker', 'Stamp Maker', 'Design a round or rectangle stamp image for your shop.', 'id', 'fa-stamp'],
    ['tools_mppeb_template', 'MPPEB Document Editor', 'Type or paste text and format it A4 ready for print as per common exam board layouts.', 'govt', 'fa-pen-to-square'],
    ['tools_biodata_maker', 'Marriage Biodata Maker', 'Create a biodata with photo and print it.', 'docs', 'fa-heart'],
    ['tools_cover_letter_generator', 'Cover Letter Generator', 'Write a job cover letter from a few details.', 'docs', 'fa-envelope-open-text'],
    ['tools_invoice_generator', 'Invoice Generator', 'GST or simple invoices with item table and totals.', 'bill', 'fa-file-invoice'],
    ['tools_salary_slip_generator', 'Salary Slip Generator', 'Monthly salary slip with earnings and deductions.', 'bill', 'fa-money-check-dollar'],
    ['tools_service_rate_list', 'Service Rate List', 'Editable rate board for your shop. Saved on this device.', 'bill', 'fa-list-check'],
    ['tools_question_paper_maker', 'Question Paper Maker', 'Create a printable question paper with MCQ and descriptive questions.', 'exam', 'fa-file-circle-question'],
    ['tools_pdf_merge', 'PDF Merge', 'Join several PDF files into one (same tool as PDF Merger).', 'pdf', 'fa-object-group'],
    ['tools_pdf_split', 'PDF Split', 'Split or extract pages from a PDF (same tool as PDF Splitter).', 'pdf', 'fa-scissors'],
    ['tools_photo_signature_joiner', 'Photo Signature Joiner', 'Join photo and signature into one image (same tool as Photo & Signature Joiner).', 'photo', 'fa-object-group'],
    ['tools_photo_name_joiner', 'Photo Name Joiner', 'Add name and date below a photo (same tool as Name & Date on Photo).', 'photo', 'fa-calendar-day'],
    ['tools_passport_photo_sheet', 'Passport Photo Sheet', 'Passport photo sheets with cut lines (same tool as Passport & Stamp Photo Studio).', 'photo', 'fa-user-large'],
    ['tools_resume_builder', 'Resume Builder (shortcut)', 'Opens the Resume Builder with several templates.', 'docs', 'fa-id-badge'],
    ['tools_student_id_card', 'Student ID Card', 'Student ID card with photo, front and back, 85.6 × 54 mm.', 'id', 'fa-id-card'],
    ['tools_id_card_print', 'ID Card Print', 'General ID card for staff or members, front and back.', 'id', 'fa-id-card'],
    ['tools_multiple_id_card_print', 'Multiple ID Card Print', 'Paste a list and photos to print many ID cards, 10 per A4 page.', 'id', 'fa-people-group'],
  ].map(function (t) { return { file: t[0], name: t[1], desc: t[2], cat: t[3], icon: t[4] }; });

  /* ---------- Official portal quick links: add a new link by adding one line here ---------- */
  var LINKS = [
    // [name, short description, url, font-awesome icon]
    ['Mobisafar Agent Portal', 'AEPS & banking login', 'https://agent.mobisafar.com/MOBISAFAR/Login.aspx', 'fa-wallet'],
    ['CSC DigiPay Lite', 'Micro ATM & merchant banking', 'https://digipaylite.in/', 'fa-mobile-screen-button'],
    ['CSC Digital Seva Connect', 'Official auth & citizen services', 'https://connect.csc.gov.in/account/authorize?response_type=code&client_id=0f8ca686-5a31-46b8-bb51-d9834ba9fa9d&redirect_uri=https%3A%2F%2Fdigitalseva.csc.gov.in%2Fauth%2Fcallback%2F&state=45937', 'fa-id-card-clip'],
    ['CM Window Status', 'Haryana CM grievance status', 'https://cmharyanacell.nic.in/citizen/view-status?TabID=V', 'fa-clipboard-check'],
    ['HR CD Service Login', 'Haryana service login', 'https://hry.cdservice.in/Home/HRLogin', 'fa-right-to-bracket'],
    ['Saral Haryana', 'Citizen services portal', 'https://saralharyana.gov.in/', 'fa-landmark'],
    ['ePDS Search RC', 'Ration card search', 'https://epds.haryanafood.gov.in/search-rc', 'fa-wheat-awn'],
    ['PPP Office Haryana', 'Parivar Pehchan Patra', 'https://ppp-office.haryana.gov.in/', 'fa-people-roof'],
    ['Mera Parivar', 'Haryana family portal', 'https://meraparivar.haryana.gov.in/', 'fa-users'],
    ['Housing PMS Consumer', 'Consumer login', 'https://consumer.housingpms.org.in/#/login?cid=544', 'fa-house'],
    ['MDU Samarth (DDE)', 'DDE MDU student login', 'https://ddemdu.samarth.edu.in/index.php/site/login', 'fa-graduation-cap'],
    ['ePOS SRC Transaction', 'Ration depot transactions', 'https://epos.haryanafood.gov.in/SRC_Trans_Int', 'fa-receipt'],
    ['Pension Beneficiary Info', 'Social Justice pension', 'https://pension.socialjusticehry.gov.in/Ben_Inf', 'fa-hand-holding-heart'],
    ['HRTC eBooking', 'Haryana Roadways tickets', 'https://ebooking.hrtransport.gov.in/#/home', 'fa-bus']
  ];

  var CSC = window.CSC = { LINKS: LINKS, TOOLS: TOOLS, CATS: CATS, tools: {} };
  CSC.libs = {
    pdflib: 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',
    jszip: 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
    tesseract: 'https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/5.1.0/tesseract.min.js',
    qrcode: 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
    mammoth: 'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js',
    html2pdf: 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
  };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  CSC.$ = $; CSC.$$ = $$;
  var esc = CSC.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };


  /* ---------- Page background colour (global: every page gets it from the header) ---------- */
  var BGS = [['Default', '#f4f7f6'], ['White', '#ffffff'], ['Cream', '#fbf6e9'], ['Sky', '#e8f1fb'], ['Mint', '#e6f5ec'], ['Rose', '#fbeaee'], ['Lilac', '#efe9fa'], ['Grey', '#e6e9ed']];
  function applyBg(c) {
    var st = document.getElementById('csc-bg');
    if (!st) { st = document.createElement('style'); st.id = 'csc-bg'; document.head.appendChild(st); }
    st.textContent = c && c !== BGS[0][1] ? 'body{background:' + c + ' !important}:root{--bg:' + c + '}@media print{body{background:#fff !important}}' : '';
  }
  function bgPicker(hdr) {
    var cur = CSC.safe.get('csc_bg', BGS[0][1]); applyBg(cur);
    var nav = hdr.querySelector('nav'); if (!nav) return;
    var wrap = document.createElement('div'); wrap.className = 'bgpick no-print';
    wrap.innerHTML = '<button type="button" class="bgbtn" aria-haspopup="true" aria-expanded="false" title="Change background colour"><i class="fa-solid fa-palette" aria-hidden="true"></i> <span>BG Colour</span></button><div class="bgmenu" hidden role="group" aria-label="Background colour">' +
      BGS.map(function (b) { return '<button type="button" class="sw" data-c="' + b[1] + '" title="' + b[0] + '" aria-label="' + b[0] + '" style="background:' + b[1] + '"></button>'; }).join('') +
      '<label class="swc" title="Pick any colour"><input type="color" value="' + (/^#[0-9a-f]{6}$/i.test(cur) ? cur : '#f4f7f6') + '" aria-label="Custom colour"></label></div>';
    nav.appendChild(wrap);
    var btn = wrap.querySelector('.bgbtn'), menu = wrap.querySelector('.bgmenu');
    function set(c) { cur = c; CSC.safe.set('csc_bg', c); applyBg(c); }
    btn.onclick = function (e) { e.stopPropagation(); var o = menu.hidden; menu.hidden = !o; btn.setAttribute('aria-expanded', String(o)); };
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); } });
    [].forEach.call(menu.querySelectorAll('.sw'), function (b) { b.onclick = function () { set(b.getAttribute('data-c')); }; });
    menu.querySelector('input').addEventListener('input', function () { set(this.value); });
  }

  /* ---------- Header and footer ---------- */
  function chrome() {
    var h = $('#site-header');
    if (h && !h.firstChild) {
      var here = location.pathname.split('/').pop() || 'index.html';
      h.innerHTML = '<div class="hdr"><a class="logo" href="index.html"><img src="favicon.svg" alt="" width="32" height="32"> CSC Desk</a>' +
        '<nav aria-label="Main"><a href="index.html"' + (here === 'index.html' ? ' aria-current="page"' : '') + '>Home</a>' +
        '<a href="index.html#tools">Tools</a><a href="index.html#links">Portal Links</a></nav></div>';
      bgPicker(h);
    }
    var f = $('#site-footer');
    if (f && !f.firstChild) {
      f.innerHTML = '<div class="ftr"><span>&copy; ' + new Date().getFullYear() + ' CSC Desk. Free tools for CSC operators and cyber cafes.</span>' +
        '<span>All tools run in your browser. Your photos and documents are not uploaded.</span></div>';
    }
  }

  /* ---------- Home page ---------- */
  function quickLinks() {
    var g = $('#quick-links'); if (!g) return;
    g.innerHTML = LINKS.map(function (l) {
      return '<a href="' + esc(l[2]) + '" target="_blank" rel="noopener" class="quick-card"><i class="fa-solid ' + esc(l[3] || 'fa-link') + '" aria-hidden="true"></i><strong>' + esc(l[0]) + '</strong><span>' + esc(l[1]) + '</span></a>';
    }).join('');
  }

  function home() {
    quickLinks();
    var list = $('#tool-list'); if (!list) return;
    var cats = $('#cats'), side = $('#category-list'), q = $('#tool-search');
    var active = 'all';
    var count = function (id) { return TOOLS.filter(function (t) { return id === 'all' || t.cat === id; }).length; };
    var tc = $('#tool-count'); if (tc) tc.textContent = TOOLS.length;

    function chips() {
      if (!cats) return;
      cats.innerHTML = '';
      [{ id: 'all', name: 'All' }].concat(CATS.filter(function (c) { return count(c.id) > 0; })).forEach(function (c) {
        var b = document.createElement('button');
        b.className = 'chip'; b.type = 'button'; b.setAttribute('aria-pressed', c.id === active);
        b.textContent = c.name + ' (' + count(c.id) + ')';
        b.onclick = function () { active = c.id; render(); };
        cats.appendChild(b);
      });
    }
    function sidebar() {
      if (!side) return;
      side.innerHTML = '';
      CATS.filter(function (c) { return count(c.id) > 0; }).forEach(function (c) {
        var li = document.createElement('li');
        li.innerHTML = '<a href="#tools"><span>' + esc(c.name) + '</span><span class="count">' + count(c.id) + '</span></a>';
        li.firstChild.onclick = function () { active = c.id; if (q) q.value = ''; render(); };
        side.appendChild(li);
      });
    }
    function render() {
      var term = (q && q.value || '').trim().toLowerCase();
      var items = TOOLS.filter(function (t) {
        return (active === 'all' || t.cat === active) && (!term || (t.name + ' ' + t.desc).toLowerCase().indexOf(term) > -1);
      });
      list.innerHTML = items.length ? items.map(function (t) {
        return '<a class="tool-card" href="' + t.file + '.html"><div class="ic"><i class="fa-solid ' + (t.icon === 'fa-whatsapp' ? 'fa-comment-dots' : t.icon) + '" aria-hidden="true"></i></div><div><strong>' + esc(t.name) + '</strong><span class="d">' + esc(t.desc) + '</span></div></a>';
      }).join('') : '<p class="empty">No tool found. Try another word.</p>';
      chips();
    }
    if (q) q.addEventListener('input', render);
    sidebar(); render();
  }

  /* ---------- Shared helpers for tool pages ---------- */
  CSC.h = function (tag, attrs, kids) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'class') e.className = attrs[k]; else if (k === 'html') e.innerHTML = attrs[k];
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]);
    });
    [].concat(kids || []).forEach(function (c) { e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  };

  CSC.safe = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
  };

  CSC.fmtBytes = function (n) { return n < 1024 ? n + ' B' : n < 1048576 ? (n / 1024).toFixed(1) + ' KB' : (n / 1048576).toFixed(2) + ' MB'; };

  CSC.loadScript = function (url) {
    CSC._s = CSC._s || {};
    if (CSC._s[url]) return CSC._s[url];
    return CSC._s[url] = new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = url; s.onload = res; s.onerror = function () { delete CSC._s[url]; rej(new Error('Could not load ' + url + '. Check your internet connection.')); };
      document.head.appendChild(s);
    });
  };

  CSC.fileToImage = function (file) {
    return new Promise(function (res, rej) {
      var url = URL.createObjectURL(file), im = new Image();
      im.onload = function () { im._url = url; res(im); };
      im.onerror = function () { URL.revokeObjectURL(url); rej(new Error('This file is not a valid image: ' + file.name)); };
      im.src = url;
    });
  };

  CSC.canvasBlob = function (canvas, type, q) {
    return new Promise(function (res) { canvas.toBlob(res, type || 'image/png', q); });
  };

  /* Encode a canvas to a Blob no bigger than maxKB. JPEG quality is searched first, then the image is scaled down. */
  CSC.fitToKB = async function (canvas, maxKB, minKB) {
    var max = maxKB * 1024, work = canvas;
    function flat(c) { // JPEG has no transparency, so paint white behind it
      var f = document.createElement('canvas'); f.width = c.width; f.height = c.height;
      var x = f.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, f.width, f.height); x.drawImage(c, 0, 0); return f;
    }
    work = flat(canvas);
    for (var round = 0; round < 12; round++) {
      var lo = 0.05, hi = 0.95, best = null;
      var top = await CSC.canvasBlob(work, 'image/jpeg', hi);
      if (top.size <= max) {
        // Smaller than needed already. If a minimum is asked for, we keep top quality (cannot honestly pad).
        return top;
      }
      for (var i = 0; i < 8; i++) {
        var mid = (lo + hi) / 2, b = await CSC.canvasBlob(work, 'image/jpeg', mid);
        if (b.size <= max) { best = b; lo = mid; } else hi = mid;
      }
      if (best) return best;
      var nw = document.createElement('canvas'); nw.width = Math.max(8, Math.round(work.width * 0.85)); nw.height = Math.max(8, Math.round(work.height * 0.85));
      nw.getContext('2d').drawImage(work, 0, 0, nw.width, nw.height); work = nw;
    }
    return CSC.canvasBlob(work, 'image/jpeg', 0.05);
  };

  CSC.download = function (blob, name) {
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  };

  CSC.toast = function (msg, bad) {
    var t = CSC.h('div', { role: 'status', style: 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:' + (bad ? '#b3261e' : '#073d27') + ';color:#fff;padding:10px 18px;border-radius:8px;z-index:999;max-width:90vw;box-shadow:0 4px 14px rgba(0,0,0,.3)' }, msg);
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 3500);
  };

  /* Drop zone. opts: {accept, multiple, label, icon, onFiles(files)} */
  CSC.dropzone = function (o) {
    var input = CSC.h('input', { type: 'file', style: 'display:none' });
    if (o.accept) input.accept = o.accept; if (o.multiple) input.multiple = true;
    var box = CSC.h('div', { class: 't-drop', tabindex: '0', role: 'button', 'aria-label': o.label || 'Choose file' },
      [CSC.h('i', { class: 'fa-solid ' + (o.icon || 'fa-cloud-arrow-up'), 'aria-hidden': 'true' }),
      CSC.h('p', { html: '<b>' + esc(o.label || 'Drop a file here or click to browse') + '</b>' }), input]);
    function take(fl) { fl = [].slice.call(fl || []); if (!o.multiple) fl = fl.slice(0, 1); if (fl.length) o.onFiles(fl); }
    box.addEventListener('click', function (e) { if (e.target !== input) input.click(); });
    box.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
    input.addEventListener('change', function () { take(input.files); input.value = ''; });
    ['dragenter', 'dragover'].forEach(function (n) { box.addEventListener(n, function (e) { e.preventDefault(); box.classList.add('over'); }); });
    ['dragleave', 'drop'].forEach(function (n) { box.addEventListener(n, function (e) { e.preventDefault(); box.classList.remove('over'); }); });
    box.addEventListener('drop', function (e) { take(e.dataTransfer.files); });
    return box;
  };

  /* Interactive crop box on an image. Returns {el, setAspect(r), getCanvas(w,h), rect()} */
  CSC.cropper = function (img, o) {
    o = o || {};
    var maxW = o.maxWidth || 520, scale = Math.min(1, maxW / img.naturalWidth);
    var cw = Math.round(img.naturalWidth * scale), ch = Math.round(img.naturalHeight * scale);
    var cv = CSC.h('canvas', { width: cw, height: ch }), ctx = cv.getContext('2d');
    var wrap = CSC.h('div', { class: 't-crop' }, cv);
    var aspect = o.aspect || 0, r = { x: 0, y: 0, w: cw, h: ch }, drag = null;
    function fit() {
      if (!aspect) { r = { x: cw * 0.05, y: ch * 0.05, w: cw * 0.9, h: ch * 0.9 }; return; }
      var w = cw * 0.9, h = w / aspect; if (h > ch * 0.9) { h = ch * 0.9; w = h * aspect; }
      r = { x: (cw - w) / 2, y: (ch - h) / 2, w: w, h: h };
    }
    function draw() {
      ctx.clearRect(0, 0, cw, ch); ctx.drawImage(img, 0, 0, cw, ch);
      ctx.fillStyle = 'rgba(0,0,0,.5)';
      ctx.fillRect(0, 0, cw, r.y); ctx.fillRect(0, r.y + r.h, cw, ch - r.y - r.h);
      ctx.fillRect(0, r.y, r.x, r.h); ctx.fillRect(r.x + r.w, r.y, cw - r.x - r.w, r.h);
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.strokeRect(r.x, r.y, r.w, r.h);
      ctx.fillStyle = '#fff'; var s = 9; ctx.fillRect(r.x + r.w - s, r.y + r.h - s, s * 2, s * 2);
    }
    function pt(e) { var b = cv.getBoundingClientRect(); return { x: (e.clientX - b.left) * cw / b.width, y: (e.clientY - b.top) * ch / b.height }; }
    function clamp() { r.w = Math.max(10, Math.min(r.w, cw)); r.h = Math.max(10, Math.min(r.h, ch)); r.x = Math.max(0, Math.min(r.x, cw - r.w)); r.y = Math.max(0, Math.min(r.y, ch - r.h)); }
    cv.addEventListener('pointerdown', function (e) {
      var p = pt(e); cv.setPointerCapture(e.pointerId);
      if (Math.abs(p.x - (r.x + r.w)) < 22 && Math.abs(p.y - (r.y + r.h)) < 22) drag = { m: 'size' };
      else if (p.x > r.x && p.x < r.x + r.w && p.y > r.y && p.y < r.y + r.h) drag = { m: 'move', dx: p.x - r.x, dy: p.y - r.y };
      else { drag = { m: 'new', sx: p.x, sy: p.y }; }
    });
    cv.addEventListener('pointermove', function (e) {
      if (!drag) return; var p = pt(e);
      if (drag.m === 'move') { r.x = p.x - drag.dx; r.y = p.y - drag.dy; clamp(); }
      else if (drag.m === 'size') {
        r.w = Math.max(10, p.x - r.x); r.h = aspect ? r.w / aspect : Math.max(10, p.y - r.y);
        if (r.x + r.w > cw) { r.w = cw - r.x; if (aspect) r.h = r.w / aspect; }
        if (r.y + r.h > ch) { r.h = ch - r.y; if (aspect) r.w = r.h * aspect; }
      } else {
        var w = Math.abs(p.x - drag.sx), h = aspect ? w / aspect : Math.abs(p.y - drag.sy);
        r = { x: Math.min(drag.sx, p.x), y: aspect ? (p.y < drag.sy ? drag.sy - h : drag.sy) : Math.min(drag.sy, p.y), w: Math.max(10, w), h: Math.max(10, h) };
        if (aspect && p.x < drag.sx) r.x = drag.sx - r.w; clamp();
      }
      draw(); if (o.onChange) o.onChange();
    });
    var end = function () { drag = null; }; cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end);
    fit(); draw();
    return {
      el: wrap,
      setAspect: function (a) { aspect = a || 0; fit(); draw(); if (o.onChange) o.onChange(); },
      rect: function () { var k = 1 / scale; return { x: r.x * k, y: r.y * k, w: r.w * k, h: r.h * k }; },
      getCanvas: function (w, h) {
        var k = 1 / scale, c = document.createElement('canvas'), rr = this.rect();
        c.width = w || Math.round(rr.w); c.height = h || Math.round(rr.h);
        c.getContext('2d').drawImage(img, rr.x, rr.y, rr.w, rr.h, 0, 0, c.width, c.height); return c;
      }
    };
  };

  /* Print an HTML string in an isolated frame (keeps the page UI out of the printout). */
  CSC.printHTML = function (body, css) {
    var f = document.createElement('iframe');
    f.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0';
    document.body.appendChild(f);
    var d = f.contentWindow.document; d.open();
    d.write('<!doctype html><html><head><meta charset="utf-8"><title>CSC Desk</title><style>@page{size:A4;margin:0}body{margin:0;font-family:Arial,sans-serif}' + (css || '') + '</style></head><body>' + body + '</body></html>');
    d.close();
    var go = function () { f.contentWindow.focus(); f.contentWindow.print(); setTimeout(function () { f.remove(); }, 2000); };
    var imgs = [].slice.call(d.images), left = imgs.length;
    if (!left) return setTimeout(go, 100);
    imgs.forEach(function (im) { if (im.complete) { if (!--left) go(); } else im.onload = im.onerror = function () { if (!--left) go(); }; });
  };

  /* Mount a tool from the registry CSC.tools[name] into #tool-root */
  CSC.mount = function (name) {
    var root = $('#tool-root');
    var fn = CSC.tools[name];
    if (!root || !fn) { if (root) root.innerHTML = '<p class="err">This tool failed to load. Refresh the page.</p>'; return; }
    try { fn(root); } catch (e) { console.error(e); root.innerHTML = '<p class="err">Something went wrong: ' + esc(e.message) + '</p>'; }
  };

  function init() { chrome(); home(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
