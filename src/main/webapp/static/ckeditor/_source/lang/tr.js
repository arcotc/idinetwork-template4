 /*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
* @fileOverview
*/

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['tr'] =
{
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir : 'ltr',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle : 'Zengin metin editörü, %1, yard?m için ALT 0 tu?una bas?n.',

	// ARIA descriptions.
	toolbar	: 'Toolbar',
	editor	: 'Zengin Metin Editörü',

	// Toolbar buttons without dialogs.
	source			: 'Kaynak',
	newPage			: 'Yeni Sayfa',
	save			: 'Kaydet',
	preview			: 'Ön ?zleme',
	cut				: 'Kes',
	copy			: 'Kopyala',
	paste			: 'Yap??t?r',
	print			: 'Yazd?r',
	underline		: 'Alt? Çizgili',
	bold			: 'Kal?n',
	italic			: '?talik',
	selectAll		: 'Tümünü Seç',
	removeFormat	: 'Biçimi Kald?r',
	strike			: 'Üstü Çizgili',
	subscript		: 'Alt Simge',
	superscript		: 'Üst Simge',
	horizontalrule	: 'Yatay Sat?r Ekle',
	pagebreak		: 'Sayfa Sonu Ekle',
	pagebreakAlt		: 'Page Break', // MISSING
	unlink			: 'Köprü Kald?r',
	undo			: 'Geri Al',
	redo			: 'Tekrarla',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Sunucuyu Gez',
		url				: 'URL',
		protocol		: 'Protokol',
		upload			: 'Kar??ya Yükle',
		uploadSubmit	: 'Sunucuya Yolla',
		image			: 'Resim',
		flash			: 'Flash',
		form			: 'Form',
		checkbox		: 'Onay Kutusu',
		radio			: 'Seçenek Dü?mesi',
		textField		: 'Metin Giri?i',
		textarea		: 'Çok Sat?rl? Metin',
		hiddenField		: 'Gizli Veri',
		button			: 'Dü?me',
		select			: 'Seçim Menüsü',
		imageButton		: 'Resimli Dü?me',
		notSet			: '<tan?mlanmam??>',
		id				: 'Kimlik',
		name			: 'Ad',
		langDir			: 'Dil Yönü',
		langDirLtr		: 'Soldan Sa?a (LTR)',
		langDirRtl		: 'Sa?dan Sola (RTL)',
		langCode		: 'Dil Kodlamas?',
		longDescr		: 'Uzun Tan?ml? URL',
		cssClass		: 'Biçem Sayfas? S?n?flar?',
		advisoryTitle	: 'Dan??ma Ba?l???',
		cssStyle		: 'Biçem',
		ok				: 'Tamam',
		cancel			: '?ptal',
		close			: 'Kapat',
		preview			: 'Ön gösterim',
		generalTab		: 'Genel',
		advancedTab		: 'Geli?mi?',
		validateNumberFailed : 'Bu de?er say? de?ildir.',
		confirmNewPage	: '?ceri?iniz kay?t edilmedi?inden dolay? kaybolacakt?r. Yeni bir sayfa yüklemek istedi?inize eminsiniz?',
		confirmCancel	: 'Baz? seçenekler de?i?mi?tir. Dialog penceresini kapatmak istedi?inize eminmisiniz?',
		options			: 'Seçenekler',
		target			: 'Hedef',
		targetNew		: 'Yeni Pencere (_blank)',
		targetTop		: 'Enüst Pencere (_top)',
		targetSelf		: 'Ayn? Pencere (_self)',
		targetParent	: 'Ana Pencere (_parent)',
		langDirLTR		: 'Left to Right (LTR)', // MISSING
		langDirRTL		: 'Right to Left (RTL)', // MISSING
		styles			: 'Style', // MISSING
		cssClasses		: 'Stylesheet Classes', // MISSING
		width			: 'Geni?lik',
		height			: 'Yükseklik',
		align			: 'Hizalama',
		alignLeft		: 'Sol',
		alignRight		: 'Sa?',
		alignCenter		: 'Merkez',
		alignTop		: 'Tepe',
		alignMiddle		: 'Orta',
		alignBottom		: 'Alt',
		invalidHeight	: 'Yükseklik say? olmal?d?r.',
		invalidWidth	: 'Geni?lik bir say? olmal?d?r.',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, haz?r de?ildir</span>'
	},

	contextmenu :
	{
		options : '?çerik Menüsü Seçenekleri'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Özel Karakter Ekle',
		title		: 'Özel Karakter Seç',
		options : 'Özel Karakter Seçenekleri'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Link Ekle/Düzenle',
		other 		: '<di?er>',
		menu		: 'Link Düzenle',
		title		: 'Link',
		info		: 'Link Bilgisi',
		target		: 'Hedef',
		upload		: 'Kar??ya Yükle',
		advanced	: 'Geli?mi?',
		type		: 'Link Türü',
		toUrl		: 'URL',
		toAnchor	: 'Bu sayfada çapa',
		toEmail		: 'E-Posta',
		targetFrame		: '<çerçeve>',
		targetPopup		: '<yeni aç?lan pencere>',
		targetFrameName	: 'Hedef Çerçeve Ad?',
		targetPopupName	: 'Yeni Aç?lan Pencere Ad?',
		popupFeatures	: 'Yeni Aç?lan Pencere Özellikleri',
		popupResizable	: 'Resizable',
		popupStatusBar	: 'Durum Çubu?u',
		popupLocationBar: 'Yer Çubu?u',
		popupToolbar	: 'Araç Çubu?u',
		popupMenuBar	: 'Menü Çubu?u',
		popupFullScreen	: 'Tam Ekran (IE)',
		popupScrollBars	: 'Kayd?rma Çubuklar?',
		popupDependent	: 'Ba??ml? (Netscape)',
		popupLeft		: 'Sola Göre Konum',
		popupTop		: 'Yukar?ya Göre Konum',
		id				: 'Id',
		langDir			: 'Dil Yönü',
		langDirLTR		: 'Soldan Sa?a (LTR)',
		langDirRTL		: 'Sa?dan Sola (RTL)',
		acccessKey		: 'Eri?im Tu?u',
		name			: 'Ad',
		langCode			: 'Dil Yönü',
		tabIndex			: 'Sekme ?ndeksi',
		advisoryTitle		: 'Dan??ma Ba?l???',
		advisoryContentType	: 'Dan??ma ?çerik Türü',
		cssClasses		: 'Biçem Sayfas? S?n?flar?',
		charset			: 'Ba?l? Kaynak Karakter Gurubu',
		styles			: 'Biçem',
		rel			: 'Relationship', // MISSING
		selectAnchor		: 'Ba?lant? Seç',
		anchorName		: 'Ba?lant? Ad? ile',
		anchorId			: 'Eleman Kimlik Numaras? ile',
		emailAddress		: 'E-Posta Adresi',
		emailSubject		: '?leti Konusu',
		emailBody		: '?leti Gövdesi',
		noAnchors		: '(Bu belgede hiç çapa yok)',
		noUrl			: 'Lütfen Link URL\'sini yaz?n',
		noEmail			: 'Lütfen E-posta adresini yaz?n'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Ba?lant? Ekle/Düzenle',
		menu		: 'Ba?lant? Özellikleri',
		title		: 'Ba?lant? Özellikleri',
		name		: 'Ba?lant? Ad?',
		errorName	: 'Lütfen ba?lant? için ad giriniz'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Say?land?r?lm?? Liste Özellikleri',
		bulletedTitle		: 'Simgeli Liste Özellikleri',
		type				: 'Tipi',
		start				: 'Ba?la',
		validateStartNumber				:'List start number must be a whole number.', // MISSING
		circle				: 'Daire',
		disc				: 'Disk',
		square				: 'Kare',
		none				: 'Yok',
		notset				: '<ayarlanmam??>',
		armenian			: 'Ermenice say?land?rma',
		georgian			: 'Gürcüce numaraland?rma (an, ban, gan, vs.)',
		lowerRoman			: 'Küçük Roman (i, ii, iii, iv, v, vs.)',
		upperRoman			: 'Büyük Roman (I, II, III, IV, V, vs.)',
		lowerAlpha			: 'Küçük Alpha (a, b, c, d, e, vs.)',
		upperAlpha			: 'Büyük Alpha (A, B, C, D, E, vs.)',
		lowerGreek			: 'Küçük Greek (alpha, beta, gamma, vs.)',
		decimal				: 'Ondal?k (1, 2, 3, vs.)',
		decimalLeadingZero	: 'Ba?? s?f?rl? ondal?k (01, 02, 03, vs.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Bul ve De?i?tir',
		find				: 'Bul',
		replace				: 'De?i?tir',
		findWhat			: 'Aranan:',
		replaceWith			: 'Bununla de?i?tir:',
		notFoundMsg			: 'Belirtilen yaz? bulunamad?.',
		matchCase			: 'Büyük/küçük harf duyarl?',
		matchWord			: 'Kelimenin tamam? uysun',
		matchCyclic			: 'E?le?en döngü',
		replaceAll			: 'Tümünü De?i?tir',
		replaceSuccessMsg	: '%1 bulunanlardan de?i?tirildi.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tablo',
		title		: 'Tablo Özellikleri',
		menu		: 'Tablo Özellikleri',
		deleteTable	: 'Tabloyu Sil',
		rows		: 'Sat?rlar',
		columns		: 'Sütunlar',
		border		: 'Kenar Kal?nl???',
		widthPx		: 'piksel',
		widthPc		: 'yüzde',
		widthUnit	: 'geni?lik birimi',
		cellSpace	: 'Izgara kal?nl???',
		cellPad		: 'Izgara yaz? aras?',
		caption		: 'Ba?l?k',
		summary		: 'Özet',
		headers		: 'Ba?l?klar',
		headersNone		: 'Yok',
		headersColumn	: '?lk Sütun',
		headersRow		: '?lk Sat?r',
		headersBoth		: 'Her ?kisi',
		invalidRows		: 'Sat?r say?s? 0 say?s?ndan büyük olmal?d?r.',
		invalidCols		: 'Sütün say?s? 0 say?s?ndan büyük olmal?d?r.',
		invalidBorder	: 'Çerceve büyüklüklü?ü say? olmal?d?r.',
		invalidWidth	: 'Tablo geni?li?i say? olmal?d?r.',
		invalidHeight	: 'Tablo yüksekli?i say? olmal?d?r.',
		invalidCellSpacing	: 'Hücre bo?lu?u (spacing) say? olmal?d?r.',
		invalidCellPadding	: 'Hücre aral??? (padding) say? olmal?d?r.',

		cell :
		{
			menu			: 'Hücre',
			insertBefore	: 'Hücre Ekle - Önce',
			insertAfter		: 'Hücre Ekle - Sonra',
			deleteCell		: 'Hücre Sil',
			merge			: 'Hücreleri Birle?tir',
			mergeRight		: 'Birle?tir - Sa?daki ?le ',
			mergeDown		: 'Birle?tir - A?a??daki ?le ',
			splitHorizontal	: 'Hücreyi Yatay Böl',
			splitVertical	: 'Hücreyi Dikey Böl',
			title			: 'Hücre Özellikleri',
			cellType		: 'Hücre Tipi',
			rowSpan			: 'Sat?rlar Mesafesi (Span)',
			colSpan			: 'Sütünlar Mesafesi (Span)',
			wordWrap		: 'Kelime Kayd?rma',
			hAlign			: 'Dü?ey Hizalama',
			vAlign			: 'Yata? Hizalama',
			alignBaseline	: 'Tabana',
			bgColor			: 'Arkaplan Rengi',
			borderColor		: 'Çerçeve Rengi',
			data			: 'Veri',
			header			: 'Ba?l?k',
			yes				: 'Evet',
			no				: 'Hay?r',
			invalidWidth	: 'Hücre geni?li?i say? olmal?d?r.',
			invalidHeight	: 'Hücre yüksekli?i say? olmal?d?r.',
			invalidRowSpan	: 'Sat?rlar?n mesafesi tam say? olmal?d?r.',
			invalidColSpan	: 'Sütünlar?n mesafesi tam say? olmal?d?r.',
			chooseColor		: 'Seçiniz'
		},

		row :
		{
			menu			: 'Sat?r',
			insertBefore	: 'Sat?r Ekle - Önce',
			insertAfter		: 'Sat?r Ekle - Sonra',
			deleteRow		: 'Sat?r Sil'
		},

		column :
		{
			menu			: 'Sütun',
			insertBefore	: 'Kolon Ekle - Önce',
			insertAfter		: 'Kolon Ekle - Sonra',
			deleteColumn	: 'Sütun Sil'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Dü?me Özellikleri',
		text		: 'Metin (De?er)',
		type		: 'Tip',
		typeBtn		: 'Dü?me',
		typeSbm		: 'Gönder',
		typeRst		: 'S?f?rla'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Onay Kutusu Özellikleri',
		radioTitle	: 'Seçenek Dü?mesi Özellikleri',
		value		: 'De?er',
		selected	: 'Seçili'
	},

	// Form Dialog.
	form :
	{
		title		: 'Form Özellikleri',
		menu		: 'Form Özellikleri',
		action		: '??lem',
		method		: 'Yöntem',
		encoding	: 'Kodlama'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Seçim Menüsü Özellikleri',
		selectInfo	: 'Bilgi',
		opAvail		: 'Mevcut Seçenekler',
		value		: 'De?er',
		size		: 'Boyut',
		lines		: 'sat?r',
		chkMulti	: 'Çoklu seçime izin ver',
		opText		: 'Metin',
		opValue		: 'De?er',
		btnAdd		: 'Ekle',
		btnModify	: 'Düzenle',
		btnUp		: 'Yukar?',
		btnDown		: 'A?a??',
		btnSetValue : 'Seçili de?er olarak ata',
		btnDelete	: 'Sil'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Çok Sat?rl? Metin Özellikleri',
		cols		: 'Sütunlar',
		rows		: 'Sat?rlar'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Metin Giri?i Özellikleri',
		name		: 'Ad',
		value		: 'De?er',
		charWidth	: 'Karakter Geni?li?i',
		maxChars	: 'En Fazla Karakter',
		type		: 'Tür',
		typeText	: 'Metin',
		typePass	: '?ifre'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Gizli Veri Özellikleri',
		name	: 'Ad',
		value	: 'De?er'
	},

	// Image Dialog.
	image :
	{
		title		: 'Resim Özellikleri',
		titleButton	: 'Resimli Dü?me Özellikleri',
		menu		: 'Resim Özellikleri',
		infoTab		: 'Resim Bilgisi',
		btnUpload	: 'Sunucuya Yolla',
		upload		: 'Kar??ya Yükle',
		alt			: 'Alternatif Yaz?',
		lockRatio	: 'Oran? Kilitle',
		unlockRatio	: 'Kilitli Oran',
		resetSize	: 'Boyutu Ba?a Döndür',
		border		: 'Kenar',
		hSpace		: 'Yatay Bo?luk',
		vSpace		: 'Dikey Bo?luk',
		alertUrl	: 'Lütfen resmin URL\'sini yaz?n?z',
		linkTab		: 'Köprü',
		button2Img	: 'Seçili resim butonunu basit resime çevirmek istermisiniz?',
		img2Button	: 'Seçili olan resimi, resimli butona çevirmek istermisiniz?',
		urlMissing	: 'Resmin URL kayna?? eksiktir.',
		validateBorder	: 'Çerçeve tam say? olmal?d?r.',
		validateHSpace	: 'HSpace tam say? olmal?d?r.',
		validateVSpace	: 'VSpace tam say? olmal?d?r.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Flash Özellikleri',
		propertiesTab	: 'Özellikler',
		title			: 'Flash Özellikleri',
		chkPlay			: 'Otomatik Oynat',
		chkLoop			: 'Döngü',
		chkMenu			: 'Flash Menüsünü Kullan',
		chkFull			: 'Tam ekrana ?zinver',
 		scale			: 'Boyutland?r',
		scaleAll		: 'Hepsini Göster',
		scaleNoBorder	: 'Kenar Yok',
		scaleFit		: 'Tam S??d?r',
		access			: 'Kod ?zni',
		accessAlways	: 'Herzaman',
		accessSameDomain: 'Ayn? domain',
		accessNever		: 'Asla',
		alignAbsBottom	: 'Tam Alt?',
		alignAbsMiddle	: 'Tam Ortas?',
		alignBaseline	: 'Taban Çizgisi',
		alignTextTop	: 'Yaz? Tepeye',
		quality			: 'Kalite',
		qualityBest		: 'En iyi',
		qualityHigh		: 'Yüksek',
		qualityAutoHigh	: 'Otomatik Yükseklik',
		qualityMedium	: 'Orta',
		qualityAutoLow	: 'Otomatik Dü?üklük',
		qualityLow		: 'Dü?ük',
		windowModeWindow: 'Pencere',
		windowModeOpaque: 'Opak',
		windowModeTransparent : '?effaf',
		windowMode		: 'Pencere modu',
		flashvars		: 'Flash De?erleri',
		bgcolor			: 'Arka Renk',
		hSpace			: 'Yatay Bo?luk',
		vSpace			: 'Dikey Bo?luk',
		validateSrc		: 'Lütfen köprü URL\'sini yaz?n',
		validateHSpace	: 'HSpace say? olmal?d?r.',
		validateVSpace	: 'VSpace say? olmal?d?r.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Yaz?m Denetimi',
		title			: 'Yaz?m? Denetle',
		notAvailable	: 'Üzügünüz, bu servis ?uanda hizmet d???d?r.',
		errorLoading	: 'Uygulamada yüklerken hata olu?tu: %s.',
		notInDic		: 'Sözlükte Yok',
		changeTo		: '?una de?i?tir:',
		btnIgnore		: 'Yoksay',
		btnIgnoreAll	: 'Tümünü Yoksay',
		btnReplace		: 'De?i?tir',
		btnReplaceAll	: 'Tümünü De?i?tir',
		btnUndo			: 'Geri Al',
		noSuggestions	: '- Öneri Yok -',
		progress		: 'Yaz?m denetimi i?lemde...',
		noMispell		: 'Yaz?m denetimi tamamland?: Yanl?? yaz?ma rastlanmad?',
		noChanges		: 'Yaz?m denetimi tamamland?: Hiçbir kelime de?i?tirilmedi',
		oneChange		: 'Yaz?m denetimi tamamland?: Bir kelime de?i?tirildi',
		manyChanges		: 'Yaz?m denetimi tamamland?: %1 kelime de?i?tirildi',
		ieSpellDownload	: 'Yaz?m denetimi yüklenmemi?. ?imdi yüklemek ister misiniz?'
	},

	smiley :
	{
		toolbar	: '?fade',
		title	: '?fade Ekle',
		options : '?fade Seçenekleri'
	},

	elementsPath :
	{
		eleLabel : 'Elementlerin yolu',
		eleTitle : '%1 element'
	},

	numberedlist	: 'Numaral? Liste',
	bulletedlist	: 'Simgeli Liste',
	indent			: 'Sekme Artt?r',
	outdent			: 'Sekme Azalt',

	justify :
	{
		left	: 'Sola Dayal?',
		center	: 'Ortalanm??',
		right	: 'Sa?a Dayal?',
		block	: '?ki Kenara Yaslanm??'
	},

	blockquote : 'Blok Olu?tur',

	clipboard :
	{
		title		: 'Yap??t?r',
		cutError	: 'Gezgin yaz?l?m?n?z?n güvenlik ayarlar? düzenleyicinin otomatik kesme i?lemine izin vermiyor. ??lem için (Ctrl/Cmd+X) tu?lar?n? kullan?n.',
		copyError	: 'Gezgin yaz?l?m?n?z?n güvenlik ayarlar? düzenleyicinin otomatik kopyalama i?lemine izin vermiyor. ??lem için (Ctrl/Cmd+C) tu?lar?n? kullan?n.',
		pasteMsg	: 'Lütfen a?a??daki kutunun içine yap??t?r?n. (<STRONG>Ctrl/Cmd+V</STRONG>) ve <STRONG>Tamam</STRONG> butonunu t?klay?n.',
		securityMsg	: 'Gezgin yaz?l?m?n?z?n güvenlik ayarlar? düzenleyicinin direkt olarak panoya eri?imine izin vermiyor. Bu pencere içine tekrar yap??t?rmal?s?n?z..',
		pasteArea	: 'Paste Area'
	},

	pastefromword :
	{
		confirmCleanup	: 'Yap??t?rmaya çal??t???n?z metin Word\'den kopyalanm??t?r. Yap??t?rmadan önce silmek istermisiniz?',
		toolbar			: 'Word\'den Yap??t?r',
		title			: 'Word\'den Yap??t?r',
		error			: 'Yap??t?rmadaki veri bilgisi hata düzelene kadar silinmeyecektir'
	},

	pasteText :
	{
		button	: 'Düz Metin Olarak Yap??t?r',
		title	: 'Düz Metin Olarak Yap??t?r'
	},

	templates :
	{
		button			: '?ablonlar',
		title			: '?çerik ?ablonlar?',
		options : '?ablon Seçenekleri',
		insertOption	: 'Mevcut içerik ile de?i?tir',
		selectPromptMsg	: 'Düzenleyicide açmak için lütfen bir ?ablon seçin.<br>(hali haz?rdaki içerik kaybolacakt?r.):',
		emptyListMsg	: '(Belirli bir ?ablon seçilmedi)'
	},

	showBlocks : 'Bloklar? Göster',

	stylesCombo :
	{
		label		: 'Biçem',
		panelTitle	: 'Stilleri Düzenliyor',
		panelTitle1	: 'Blok Stilleri',
		panelTitle2	: 'Inline Stilleri',
		panelTitle3	: 'Nesne Stilleri'
	},

	format :
	{
		label		: 'Biçim',
		panelTitle	: 'Biçim',

		tag_p		: 'Normal',
		tag_pre		: 'Biçimli',
		tag_address	: 'Adres',
		tag_h1		: 'Ba?l?k 1',
		tag_h2		: 'Ba?l?k 2',
		tag_h3		: 'Ba?l?k 3',
		tag_h4		: 'Ba?l?k 4',
		tag_h5		: 'Ba?l?k 5',
		tag_h6		: 'Ba?l?k 6',
		tag_div		: 'Paragraf (DIV)'
	},

	div :
	{
		title				: 'Div ?çeri?i Olu?tur',
		toolbar				: 'Div ?çeri?i Olu?tur',
		cssClassInputLabel	: 'Stilltipi S?n?f?',
		styleSelectLabel	: 'Stil',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: ' Dil Kodu',
		inlineStyleInputLabel	: 'Inline Stili',
		advisoryTitleInputLabel	: 'Tavsiye Ba?l???',
		langDirLabel		: 'Dil Yönü',
		langDirLTRLabel		: 'Soldan sa?a (LTR)',
		langDirRTLLabel		: 'Sa?dan sola (RTL)',
		edit				: 'Div Düzenle',
		remove				: 'Div Kald?r'
  	},

	iframe :
	{
		title		: 'IFrame Properties', // MISSING
		toolbar		: 'IFrame', // MISSING
		noUrl		: 'Please type the iframe URL', // MISSING
		scrolling	: 'Enable scrollbars', // MISSING
		border		: 'Show frame border' // MISSING
	},

	font :
	{
		label		: 'Yaz? Türü',
		voiceLabel	: 'Font',
		panelTitle	: 'Yaz? Türü'
	},

	fontSize :
	{
		label		: 'Boyut',
		voiceLabel	: 'Font Size',
		panelTitle	: 'Boyut'
	},

	colorButton :
	{
		textColorTitle	: 'Yaz? Rengi',
		bgColorTitle	: 'Arka Renk',
		panelTitle		: 'Renkler',
		auto			: 'Otomatik',
		more			: 'Di?er renkler...'
	},

	colors :
	{
		'000' : 'Siyah',
		'800000' : 'Kestane',
		'8B4513' : 'Koyu Kahverengi',
		'2F4F4F' : 'Koyu Kur?uni Gri',
		'008080' : 'Teal',
		'000080' : 'Mavi',
		'4B0082' : 'Çivit Mavisi',
		'696969' : 'Silik Gri',
		'B22222' : 'Ate? Tu?las?',
		'A52A2A' : 'Kahverengi',
		'DAA520' : 'Altun S?r?k',
		'006400' : 'Koyu Ye?il',
		'40E0D0' : 'Turkuaz',
		'0000CD' : 'Orta Mavi',
		'800080' : 'Pembe',
		'808080' : 'Gri',
		'F00' : 'K?rm?z?',
		'FF8C00' : 'Koyu Portakal',
		'FFD700' : 'Alt?n',
		'008000' : 'Ye?il',
		'0FF' : 'Ciyan',
		'00F' : 'Mavi',
		'EE82EE' : 'Menek?e',
		'A9A9A9' : 'Koyu Gri',
		'FFA07A' : 'Aç?k Sar?ms?',
		'FFA500' : 'Portakal',
		'FFFF00' : 'Sar?',
		'00FF00' : 'Aç?k Ye?il',
		'AFEEEE' : 'Sönük Turkuaz',
		'ADD8E6' : 'Aç?k Mavi',
		'DDA0DD' : 'Mor',
		'D3D3D3' : 'Aç?k Gri',
		'FFF0F5' : 'Eflatun Pembe',
		'FAEBD7' : 'Antik Beyaz',
		'FFFFE0' : 'Aç?k Sar?',
		'F0FFF0' : 'Balsar?s?',
		'F0FFFF' : 'Gök Mavisi',
		'F0F8FF' : 'Reha Mavi',
		'E6E6FA' : 'Eflatun',
		'FFF' : 'Beyaz'
	},

	scayt :
	{
		title			: 'Girmi? oldu?unuz kelime denetimi',
		opera_title		: 'Opera taraf?ndan desteklenmemektedir',
		enable			: 'SCAYT etkinle?tir',
		disable			: 'SCAYT pasifle?tir',
		about			: 'SCAYT hakk?nda',
		toggle			: 'SCAYT de?i?tir',
		options			: 'Seçenekler',
		langs			: 'Diller',
		moreSuggestions	: 'Daha fazla öneri',
		ignore			: 'Yoksay',
		ignoreAll		: 'Tümünü Yoksay',
		addWord			: 'Kelime Ekle',
		emptyDic		: 'Sözlük ad? bo? olamaz.',

		optionsTab		: 'Seçenekler',
		allCaps			: 'Tüm büyük küçük kelimeleri yoksay',
		ignoreDomainNames : 'Domain adlar?n? yoksay',
		mixedCase		: 'Kar???k büyüklük ile Sözcükler yoksay',
		mixedWithDigits	: 'Say?larla Kelimeler yoksay',

		languagesTab	: 'Diller',

		dictionariesTab	: 'Sözlükler',
		dic_field_name	: 'Sözlük ad?',
		dic_create		: 'Olu?tur',
		dic_restore		: 'Geri al',
		dic_delete		: 'Sil',
		dic_rename		: 'Yeniden adland?r',
		dic_info		: 'Initially the User Dictionary is stored in a Cookie. However, Cookies are limited in size. When the User Dictionary grows to a point where it cannot be stored in a Cookie, then the dictionary may be stored on our server. To store your personal dictionary on our server you should specify a name for your dictionary. If you already have a stored dictionary, please type it\'s name and click the Restore button.',

		aboutTab		: 'Hakk?nda'
	},

	about :
	{
		title		: 'CKEditor Hakk?nda',
		dlgTitle	: 'CKEditor Hakk?nda',
		moreInfo	: 'Lisanslama hakk?nda daha fazla bilgi almak için lütfen sitemizi ziyaret edin:',
		copy		: 'Copyright &copy; $1. Tüm haklar? sakl?d?r.'
	},

	maximize : 'Büyült',
	minimize : 'Küçült',

	fakeobjects :
	{
		anchor		: 'Ba?lant?',
		flash		: 'Flash Animasyonu',
		iframe		: 'IFrame', // MISSING
		hiddenfield	: 'Hidden Field', // MISSING
		unknown		: 'Bilinmeyen Nesne'
	},

	resize : 'Boyutland?rmak için sürükle',

	colordialog :
	{
		title		: 'Renk seç',
		options	:	'Renk Seçenekleri',
		highlight	: '??aretle',
		selected	: 'Seçilmi?',
		clear		: 'Temizle'
	},

	toolbarCollapse	: 'Toolbar\'? topla',
	toolbarExpand	: 'Toolbar\'? aç',

	bidi :
	{
		ltr : 'Text direction from left to right', // MISSING
		rtl : 'Text direction from right to left' // MISSING
	}
};
