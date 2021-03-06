 /*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Czech language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang['cs'] =
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
	editorTitle : 'Textový editor, %1, nápov?du zobrazíte stiskem ALT 0.',

	// ARIA descriptions.
	toolbar	: 'Panel nástroj?',
	editor	: 'Textový editor',

	// Toolbar buttons without dialogs.
	source			: 'Zdroj',
	newPage			: 'Nová stránka',
	save			: 'Uložit',
	preview			: 'Náhled',
	cut				: 'Vyjmout',
	copy			: 'Kopírovat',
	paste			: 'Vložit',
	print			: 'Tisk',
	underline		: 'Podtržené',
	bold			: 'Tu?né',
	italic			: 'Kurzíva',
	selectAll		: 'Vybrat vše',
	removeFormat	: 'Odstranit formátování',
	strike			: 'P?eškrtnuté',
	subscript		: 'Dolní index',
	superscript		: 'Horní index',
	horizontalrule	: 'Vložit vodorovnou linku',
	pagebreak		: 'Vložit konec stránky',
	pagebreakAlt		: 'Konec stránky',
	unlink			: 'Odstranit odkaz',
	undo			: 'Zp?t',
	redo			: 'Znovu',

	// Common messages and labels.
	common :
	{
		browseServer	: 'Vybrat na serveru',
		url				: 'URL',
		protocol		: 'Protokol',
		upload			: 'Odeslat',
		uploadSubmit	: 'Odeslat na server',
		image			: 'Obrázek',
		flash			: 'Flash',
		form			: 'Formulá?',
		checkbox		: 'Zaškrtávací polí?ko',
		radio			: 'P?epína?',
		textField		: 'Textové pole',
		textarea		: 'Textová oblast',
		hiddenField		: 'Skryté pole',
		button			: 'Tla?ítko',
		select			: 'Seznam',
		imageButton		: 'Obrázkové tla?ítko',
		notSet			: '<nenastaveno>',
		id				: 'Id',
		name			: 'Jméno',
		langDir			: 'Orientace jazyka',
		langDirLtr		: 'Zleva do prava (LTR)',
		langDirRtl		: 'Zprava do leva (RTL)',
		langCode		: 'Kód jazyka',
		longDescr		: 'Dlouhý popis URL',
		cssClass		: 'T?ída stylu',
		advisoryTitle	: 'Pomocný titulek',
		cssStyle		: 'Styl',
		ok				: 'OK',
		cancel			: 'Storno',
		close			: 'Zav?ít',
		preview			: 'Náhled',
		generalTab		: 'Obecné',
		advancedTab		: 'Rozší?ené',
		validateNumberFailed : 'Zadaná hodnota není ?íselná.',
		confirmNewPage	: 'Jakékoliv neuložené zm?ny obsahu budou ztraceny. Skute?n? chete otevrít novou stránku?',
		confirmCancel	: 'N?která z nastavení byla zm?n?na. Skute?n? chete zav?ít dialogové okno?',
		options			: 'Nastavení',
		target			: 'Cíl',
		targetNew		: 'Nové okno (_blank)',
		targetTop		: 'Okno nejvyšší úrovn? (_top)',
		targetSelf		: 'Stejné okno (_self)',
		targetParent	: 'Rodi?ovské onko (_parent)',
		langDirLTR		: 'Zleva doprava (LTR)',
		langDirRTL		: 'Zprava doleva (RTL)',
		styles			: 'Styly',
		cssClasses		: 'T?ídy styl?',
		width			: 'Ší?ka',
		height			: 'Výška',
		align			: 'Zarovnání',
		alignLeft		: 'Vlevo',
		alignRight		: 'Vpravo',
		alignCenter		: 'Na st?ed',
		alignTop		: 'Nahoru',
		alignMiddle		: 'Na st?ed',
		alignBottom		: 'Dol?',
		invalidHeight	: 'Zadaná výška musí být ?íslo.',
		invalidWidth	: 'Zadaná ší?ka musí být ?íslo.',

		// Put the voice-only part of the label in the span.
		unavailable		: '%1<span class="cke_accessibility">, nedostupné</span>'
	},

	contextmenu :
	{
		options : 'Nastavení kontextové nabídky'
	},

	// Special char dialog.
	specialChar		:
	{
		toolbar		: 'Vložit speciální znaky',
		title		: 'Výb?r speciálního znaku',
		options : 'Nastavení speciálních znak?'
	},

	// Link dialog.
	link :
	{
		toolbar		: 'Vložit/zm?nit odkaz',
		other 		: '<jiný>',
		menu		: 'Zm?nit odkaz',
		title		: 'Odkaz',
		info		: 'Informace o odkazu',
		target		: 'Cíl',
		upload		: 'Odeslat',
		advanced	: 'Rozší?ené',
		type		: 'Typ odkazu',
		toUrl		: 'URL',
		toAnchor	: 'Kotva v této stránce',
		toEmail		: 'E-Mail',
		targetFrame		: '<rámec>',
		targetPopup		: '<vyskakovací okno>',
		targetFrameName	: 'Název cílového rámu',
		targetPopupName	: 'Název vyskakovacího okna',
		popupFeatures	: 'Vlastnosti vyskakovacího okna',
		popupResizable	: 'Umož?ující m?nit velikost',
		popupStatusBar	: 'Stavový ?ádek',
		popupLocationBar: 'Panel umíst?ní',
		popupToolbar	: 'Panel nástroj?',
		popupMenuBar	: 'Panel nabídky',
		popupFullScreen	: 'Celá obrazovka (IE)',
		popupScrollBars	: 'Posuvníky',
		popupDependent	: 'Závislost (Netscape)',
		popupLeft		: 'Levý okraj',
		popupTop		: 'Horní okraj',
		id				: 'Id',
		langDir			: 'Orientace jazyka',
		langDirLTR		: 'Zleva do prava (LTR)',
		langDirRTL		: 'Zprava do leva (RTL)',
		acccessKey		: 'P?ístupový klí?',
		name			: 'Jméno',
		langCode			: 'Orientace jazyka',
		tabIndex			: 'Po?adí prvku',
		advisoryTitle		: 'Pomocný titulek',
		advisoryContentType	: 'Pomocný typ obsahu',
		cssClasses		: 'T?ída stylu',
		charset			: 'P?i?azená znaková sada',
		styles			: 'Styl',
		rel			: 'Relationship', // MISSING
		selectAnchor		: 'Vybrat kotvu',
		anchorName		: 'Podle jména kotvy',
		anchorId			: 'Podle Id objektu',
		emailAddress		: 'E-Mailová adresa',
		emailSubject		: 'P?edm?t zprávy',
		emailBody		: 'T?lo zprávy',
		noAnchors		: '(Ve stránce není definována žádná kotva!)',
		noUrl			: 'Zadejte prosím URL odkazu',
		noEmail			: 'Zadejte prosím e-mailovou adresu'
	},

	// Anchor dialog
	anchor :
	{
		toolbar		: 'Vložít/zm?nit záložku',
		menu		: 'Vlastnosti záložky',
		title		: 'Vlastnosti záložky',
		name		: 'Název záložky',
		errorName	: 'Zadejte prosím název záložky'
	},

	// List style dialog
	list:
	{
		numberedTitle		: 'Vlastnosti ?íslování',
		bulletedTitle		: 'Vlastnosti odrážek',
		type				: 'Typ',
		start				: 'Po?átek',
		validateStartNumber				:'?íslování musí za?ínat celým ?íslem.',
		circle				: 'Kroužky',
		disc				: 'Kole?ka',
		square				: '?tverce',
		none				: 'Nic',
		notset				: '<nenastaveno>',
		armenian			: 'Arménské',
		georgian			: 'Gruzínské (an, ban, gan, atd.)',
		lowerRoman			: 'Malé ?ímské (i, ii, iii, iv, v, atd.)',
		upperRoman			: 'Velké ?ímské (I, II, III, IV, V, atd.)',
		lowerAlpha			: 'Malá latinka (a, b, c, d, e, atd.)',
		upperAlpha			: 'Velká latinka (A, B, C, D, E, atd.)',
		lowerGreek			: 'Malé ?ecké (alpha, beta, gamma, atd.)',
		decimal				: 'Arabská ?ísla (1, 2, 3, atd.)',
		decimalLeadingZero	: 'Arabská ?ísla uvozená nulou (01, 02, 03, atd.)'
	},

	// Find And Replace Dialog
	findAndReplace :
	{
		title				: 'Najít a nahradit',
		find				: 'Hledat',
		replace				: 'Nahradit',
		findWhat			: 'Co hledat:',
		replaceWith			: '?ím nahradit:',
		notFoundMsg			: 'Hledaný text nebyl nalezen.',
		matchCase			: 'Rozlišovat velikost písma',
		matchWord			: 'Pouze celá slova',
		matchCyclic			: 'Procházet opakovan?',
		replaceAll			: 'Nahradit vše',
		replaceSuccessMsg	: '%1 nahrazení.'
	},

	// Table Dialog
	table :
	{
		toolbar		: 'Tabulka',
		title		: 'Vlastnosti tabulky',
		menu		: 'Vlastnosti tabulky',
		deleteTable	: 'Smazat tabulku',
		rows		: '?ádky',
		columns		: 'Sloupce',
		border		: 'Ohrani?ení',
		widthPx		: 'bod?',
		widthPc		: 'procent',
		widthUnit	: 'jednotka ší?ky',
		cellSpace	: 'Vzdálenost bun?k',
		cellPad		: 'Odsazení obsahu v bu?ce',
		caption		: 'Popis',
		summary		: 'Souhrn',
		headers		: 'Záhlaví',
		headersNone		: 'Žádné',
		headersColumn	: 'První sloupec',
		headersRow		: 'První ?ádek',
		headersBoth		: 'Obojí',
		invalidRows		: 'Po?et ?ádk? musí být ?íslo v?tší než 0.',
		invalidCols		: 'Po?et sloupc? musí být ?íslo v?tší než 0.',
		invalidBorder	: 'Zdaná velikost okraje musí být ?íselná.',
		invalidWidth	: 'Zadaná ší?ka tabulky musí být ?íselná.',
		invalidHeight	: 'zadaná výška tabulky musí být ?íselná.',
		invalidCellSpacing	: 'Zadaná vzdálenost bun?k musí být ?íselná.',
		invalidCellPadding	: 'Zadané odsazení obsahu v bu?ce musí být ?íselné.',

		cell :
		{
			menu			: 'Bu?ka',
			insertBefore	: 'Vložit bu?ku p?ed',
			insertAfter		: 'Vložit bu?ku za',
			deleteCell		: 'Smazat bu?ky',
			merge			: 'Slou?it bu?ky',
			mergeRight		: 'Slou?it doprava',
			mergeDown		: 'Slou?it dol?',
			splitHorizontal	: 'Rozd?lit bu?ky vodorovn?',
			splitVertical	: 'Rozd?lit bu?ky svisle',
			title			: 'Vlastnosti bu?ky',
			cellType		: 'Typ bu?ky',
			rowSpan			: 'Spojit ?ádky',
			colSpan			: 'Spojit sloupce',
			wordWrap		: 'Zalamování',
			hAlign			: 'Vodorovné zarovnání',
			vAlign			: 'Svislé zarovnání',
			alignBaseline	: 'Na ú?a?í',
			bgColor			: 'Barva pozadí',
			borderColor		: 'Barva okraje',
			data			: 'Data',
			header			: 'Hlavi?ka',
			yes				: 'Ano',
			no				: 'Ne',
			invalidWidth	: 'Zadaná ší?ka bu?ky musí být ?íslená.',
			invalidHeight	: 'Zadaná výška bu?ky musí být ?íslená.',
			invalidRowSpan	: 'Zadaný po?et slou?ených ?ádk? musí být celé ?íslo.',
			invalidColSpan	: 'Zadaný po?et slou?ených sloupc? musí být celé ?íslo.',
			chooseColor		: 'Výb?r'
		},

		row :
		{
			menu			: '?ádek',
			insertBefore	: 'Vložit ?ádek p?ed',
			insertAfter		: 'Vložit ?ádek za',
			deleteRow		: 'Smazat ?ádky'
		},

		column :
		{
			menu			: 'Sloupec',
			insertBefore	: 'Vložit sloupec p?ed',
			insertAfter		: 'Vložit sloupec za',
			deleteColumn	: 'Smazat sloupec'
		}
	},

	// Button Dialog.
	button :
	{
		title		: 'Vlastnosti tla?ítka',
		text		: 'Popisek',
		type		: 'Typ',
		typeBtn		: 'Tla?ítko',
		typeSbm		: 'Odeslat',
		typeRst		: 'Obnovit'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio :
	{
		checkboxTitle : 'Vlastnosti zaškrtávacího polí?ka',
		radioTitle	: 'Vlastnosti p?epína?e',
		value		: 'Hodnota',
		selected	: 'Zaškrtnuto'
	},

	// Form Dialog.
	form :
	{
		title		: 'Vlastnosti formulá?e',
		menu		: 'Vlastnosti formulá?e',
		action		: 'Akce',
		method		: 'Metoda',
		encoding	: 'Kódování'
	},

	// Select Field Dialog.
	select :
	{
		title		: 'Vlastnosti seznamu',
		selectInfo	: 'Info',
		opAvail		: 'Dostupná nastavení',
		value		: 'Hodnota',
		size		: 'Velikost',
		lines		: '?ádk?',
		chkMulti	: 'Povolit mnohonásobné výb?ry',
		opText		: 'Text',
		opValue		: 'Hodnota',
		btnAdd		: 'P?idat',
		btnModify	: 'Zm?nit',
		btnUp		: 'Nahoru',
		btnDown		: 'Dol?',
		btnSetValue : 'Nastavit jako vybranou hodnotu',
		btnDelete	: 'Smazat'
	},

	// Textarea Dialog.
	textarea :
	{
		title		: 'Vlastnosti textové oblasti',
		cols		: 'Sloupc?',
		rows		: '?ádk?'
	},

	// Text Field Dialog.
	textfield :
	{
		title		: 'Vlastnosti textového pole',
		name		: 'Název',
		value		: 'Hodnota',
		charWidth	: 'Ší?ka ve znacích',
		maxChars	: 'Maximální po?et znak?',
		type		: 'Typ',
		typeText	: 'Text',
		typePass	: 'Heslo'
	},

	// Hidden Field Dialog.
	hidden :
	{
		title	: 'Vlastnosti skrytého pole',
		name	: 'Název',
		value	: 'Hodnota'
	},

	// Image Dialog.
	image :
	{
		title		: 'Vlastnosti obrázku',
		titleButton	: 'Vlastností obrázkového tla?ítka',
		menu		: 'Vlastnosti obrázku',
		infoTab		: 'Informace o obrázku',
		btnUpload	: 'Odeslat na server',
		upload		: 'Odeslat',
		alt			: 'Alternativní text',
		lockRatio	: 'Zámek',
		unlockRatio	: 'Odemknout pom?r',
		resetSize	: 'P?vodní velikost',
		border		: 'Okraje',
		hSpace		: 'H-mezera',
		vSpace		: 'V-mezera',
		alertUrl	: 'Zadejte prosím URL obrázku',
		linkTab		: 'Odkaz',
		button2Img	: 'Skute?n? chcete p?evést zvolené obrázkové tla?ítko na oby?ejný obrázek?',
		img2Button	: 'Skute?n? chcete p?evést zvolený obrázek na obrázkové tla?ítko?',
		urlMissing	: 'Zadané URL zdroje obrázku nebylo nalezeno.',
		validateBorder	: 'Okraj musí být nastaven v celých ?íslech.',
		validateHSpace	: 'H-mezera musí být nastavena v celých ?íslech.',
		validateVSpace	: 'V-mezera musí být nastavena v celých ?íslech.'
	},

	// Flash Dialog
	flash :
	{
		properties		: 'Vlastnosti Flashe',
		propertiesTab	: 'Vlastnosti',
		title			: 'Vlastnosti Flashe',
		chkPlay			: 'Automatické spušt?ní',
		chkLoop			: 'Opakování',
		chkMenu			: 'Nabídka Flash',
		chkFull			: 'Povolit celoobrazovkový režim',
 		scale			: 'Zobrazit',
		scaleAll		: 'Zobrazit vše',
		scaleNoBorder	: 'Bez okraje',
		scaleFit		: 'P?izp?sobit',
		access			: 'P?ístup ke skriptu',
		accessAlways	: 'Vždy',
		accessSameDomain: 'Ve stejné domén?',
		accessNever		: 'Nikdy',
		alignAbsBottom	: 'Zcela dol?',
		alignAbsMiddle	: 'Doprost?ed',
		alignBaseline	: 'Na ú?a?í',
		alignTextTop	: 'Na horní okraj textu',
		quality			: 'Kvalita',
		qualityBest		: 'Nejlepší',
		qualityHigh		: 'Vysoká',
		qualityAutoHigh	: 'Vysoká - auto',
		qualityMedium	: 'St?ední',
		qualityAutoLow	: 'Nízká - auto',
		qualityLow		: 'Nejnižší',
		windowModeWindow: 'Okno',
		windowModeOpaque: 'Nepr?hledné',
		windowModeTransparent : 'Pr?hledné',
		windowMode		: 'Režim okna',
		flashvars		: 'Prom?nné pro Flash',
		bgcolor			: 'Barva pozadí',
		hSpace			: 'H-mezera',
		vSpace			: 'V-mezera',
		validateSrc		: 'Zadejte prosím URL odkazu',
		validateHSpace	: 'Zadaná H-mezera musí být ?íslo.',
		validateVSpace	: 'Zadaná V-mezera musí být ?íslo.'
	},

	// Speller Pages Dialog
	spellCheck :
	{
		toolbar			: 'Zkontrolovat pravopis',
		title			: 'Kontrola pravopisu',
		notAvailable	: 'Omlouváme se, ale služba nyní není dostupná.',
		errorLoading	: 'Chyba nahrávání služby aplikace z: %s.',
		notInDic		: 'Není ve slovníku',
		changeTo		: 'Zm?nit na',
		btnIgnore		: 'P?esko?it',
		btnIgnoreAll	: 'P?eskakovat vše',
		btnReplace		: 'Zam?nit',
		btnReplaceAll	: 'Zam??ovat vše',
		btnUndo			: 'Zp?t',
		noSuggestions	: '- žádné návrhy -',
		progress		: 'Probíhá kontrola pravopisu...',
		noMispell		: 'Kontrola pravopisu dokon?ena: Žádné pravopisné chyby nenalezeny',
		noChanges		: 'Kontrola pravopisu dokon?ena: Beze zm?n',
		oneChange		: 'Kontrola pravopisu dokon?ena: Jedno slovo zm?n?no',
		manyChanges		: 'Kontrola pravopisu dokon?ena: %1 slov zm?n?no',
		ieSpellDownload	: 'Kontrola pravopisu není nainstalována. Chcete ji nyní stáhnout?'
	},

	smiley :
	{
		toolbar	: 'Smajlíky',
		title	: 'Vkládání smajlík?',
		options : 'Nastavení smajlík?'
	},

	elementsPath :
	{
		eleLabel : 'Cesta objektu',
		eleTitle : '%1 objekt'
	},

	numberedlist	: '?íslování',
	bulletedlist	: 'Odrážky',
	indent			: 'Zv?tšit odsazení',
	outdent			: 'Zmenšit odsazení',

	justify :
	{
		left	: 'Zarovnat vlevo',
		center	: 'Zarovnat na st?ed',
		right	: 'Zarovnat vpravo',
		block	: 'Zarovnat do bloku'
	},

	blockquote : 'Citace',

	clipboard :
	{
		title		: 'Vložit',
		cutError	: 'Bezpe?nostní nastavení Vašeho prohlíže?e nedovolují editoru spustit funkci pro vyjmutí zvoleného textu do schránky. Prosím vyjm?te zvolený text do schránky pomocí klávesnice (Ctrl/Cmd+X).',
		copyError	: 'Bezpe?nostní nastavení Vašeho prohlíže?e nedovolují editoru spustit funkci pro kopírování zvoleného textu do schránky. Prosím zkopírujte zvolený text do schránky pomocí klávesnice (Ctrl/Cmd+C).',
		pasteMsg	: 'Do následujícího pole vložte požadovaný obsah pomocí klávesnice (<STRONG>Ctrl/Cmd+V</STRONG>) a stiskn?te <STRONG>OK</STRONG>.',
		securityMsg	: 'Z d?vod? nastavení bezpe?nosti Vašeho prohlíže?e nem?že editor p?istupovat p?ímo do schránky. Obsah schránky prosím vložte znovu do tohoto okna.',
		pasteArea	: 'Oblast vlkádání'
	},

	pastefromword :
	{
		confirmCleanup	: 'Jak je vid?t, vkládaný text je kopírován z Wordu. Chcete jej p?ed vložením vy?istit?',
		toolbar			: 'Vložit z Wordu',
		title			: 'Vložit z Wordu',
		error			: 'Z d?vodu vnit?ní chyby nebylo možné provést vy?išt?ní vkládaného textu.'
	},

	pasteText :
	{
		button	: 'Vložit jako ?istý text',
		title	: 'Vložit jako ?istý text'
	},

	templates :
	{
		button			: 'Šablony',
		title			: 'Šablony obsahu',
		options : 'Nastavení šablon',
		insertOption	: 'Nahradit aktuální obsah',
		selectPromptMsg	: 'Prosím zvolte šablonu pro otev?ení v editoru<br>(aktuální obsah editoru bude ztracen):',
		emptyListMsg	: '(Není definována žádná šablona)'
	},

	showBlocks : 'Ukázat bloky',

	stylesCombo :
	{
		label		: 'Styl',
		panelTitle	: 'Formátovací styly',
		panelTitle1	: 'Blokové styly',
		panelTitle2	: '?ádkové styly',
		panelTitle3	: 'Objektové styly'
	},

	format :
	{
		label		: 'Formát',
		panelTitle	: 'Formát',

		tag_p		: 'Normální',
		tag_pre		: 'Naformátováno',
		tag_address	: 'Adresa',
		tag_h1		: 'Nadpis 1',
		tag_h2		: 'Nadpis 2',
		tag_h3		: 'Nadpis 3',
		tag_h4		: 'Nadpis 4',
		tag_h5		: 'Nadpis 5',
		tag_h6		: 'Nadpis 6',
		tag_div		: 'Normální (DIV)'
	},

	div :
	{
		title				: 'Vytvo?it Div kontejner',
		toolbar				: 'Vytvo?it Div kontejner',
		cssClassInputLabel	: 'T?ídy styl?',
		styleSelectLabel	: 'Styly',
		IdInputLabel		: 'Id',
		languageCodeInputLabel	: ' Kód jazyka',
		inlineStyleInputLabel	: 'Vnit?ní styly',
		advisoryTitleInputLabel	: 'Nápov?dní titulek',
		langDirLabel		: 'Orientace textu',
		langDirLTRLabel		: 'Zleva doprava (LTR)',
		langDirRTLLabel		: 'Zprava doleva (RTL)',
		edit				: 'Zm?nit Div',
		remove				: 'Odstranit Div'
  	},

	iframe :
	{
		title		: 'Vlastnosti IFrame',
		toolbar		: 'IFrame',
		noUrl		: 'Zadejte prosím URL obsahu pro IFrame',
		scrolling	: 'Zapnout posuvníky',
		border		: 'Zobrazit okraj'
	},

	font :
	{
		label		: 'Písmo',
		voiceLabel	: 'Písmo',
		panelTitle	: 'Písmo'
	},

	fontSize :
	{
		label		: 'Velikost',
		voiceLabel	: 'Velikost písma',
		panelTitle	: 'Velikost'
	},

	colorButton :
	{
		textColorTitle	: 'Barva textu',
		bgColorTitle	: 'Barva pozadí',
		panelTitle		: 'Barvy',
		auto			: 'Automaticky',
		more			: 'Více barev...'
	},

	colors :
	{
		'000' : '?erná',
		'800000' : 'Kaštanová',
		'8B4513' : 'Sedlová hn??',
		'2F4F4F' : 'Tmav? bled? šedá',
		'008080' : '?írka',
		'000080' : 'Námo?nická mod?',
		'4B0082' : 'Inkoustová',
		'696969' : 'Tmav? šedá',
		'B22222' : 'Pálená cihla',
		'A52A2A' : 'Hn?dá',
		'DAA520' : 'Zlatý prut',
		'006400' : 'Tmav? zelená',
		'40E0D0' : 'Tyrkisová',
		'0000CD' : 'St?edn? modrá',
		'800080' : 'Purpurová',
		'808080' : 'Šedá',
		'F00' : '?ervená',
		'FF8C00' : 'Tmav? oranžová',
		'FFD700' : 'Zlatá',
		'008000' : 'Zelená',
		'0FF' : 'Kyanidová',
		'00F' : 'Modrá',
		'EE82EE' : 'Fialová',
		'A9A9A9' : 'Kaln? šedá',
		'FFA07A' : 'Sv?tle lososová',
		'FFA500' : 'Oranžová',
		'FFFF00' : 'Žlutá',
		'00FF00' : 'Limetková',
		'AFEEEE' : 'Bled? tyrkisová',
		'ADD8E6' : 'Sv?tle modrá',
		'DDA0DD' : 'Švestková',
		'D3D3D3' : 'Sv?tle šedá',
		'FFF0F5' : 'Levandulov? rum?nná',
		'FAEBD7' : 'Antická bílá',
		'FFFFE0' : 'Sv?tle žlutá',
		'F0FFF0' : 'Medová rosa',
		'F0FFFF' : 'Azurová',
		'F0F8FF' : 'Alen?ina modrá',
		'E6E6FA' : 'Lavendulová',
		'FFF' : 'Bílá'
	},

	scayt :
	{
		title			: 'Kontrola pravopisu b?hem psaní (SCAYT)',
		opera_title		: 'Not supported by Opera', // MISSING
		enable			: 'Zapnout SCAYT',
		disable			: 'Vypnout SCAYT',
		about			: 'O aplikaci SCAYT',
		toggle			: 'Vypína? SCAYT',
		options			: 'Nastavení',
		langs			: 'Jazyky',
		moreSuggestions	: 'Více návrh?',
		ignore			: 'P?esko?it',
		ignoreAll		: 'P?esko?it vše',
		addWord			: 'P?idat slovo',
		emptyDic		: 'Název slovníku nesmí být prázdný.',

		optionsTab		: 'Nastavení',
		allCaps			: 'Ignorovat slova velkými písmeny',
		ignoreDomainNames : 'Ignorovat doménová jména',
		mixedCase		: 'Ignorovat slova obsahující r?znou velikost písma',
		mixedWithDigits	: 'Ignorovat slova obsahující ?ísla',

		languagesTab	: 'Jazyky',

		dictionariesTab	: 'Slovníky',
		dic_field_name	: 'Název slovníku',
		dic_create		: 'vytvo?it',
		dic_restore		: 'Obnovit',
		dic_delete		: 'Smazat',
		dic_rename		: 'P?ejmenovat',
		dic_info		: 'Zpo?átku se uživatelský slovník ukládá do cookies ve vašem prohlíže?i. Ovšem cookies mají omezenou velikost, takže když slovník dosáhne velikosti, kdy se již do cookies nevejde, m?že být uložen na našem serveru. Chcete-li uložit Váš osobní slovník na našem serveru, je t?eba slovník nejd?íve pojmenovat. Máte-li již slovník pojmenován a uložen, zadejte jeho název a klepn?te na tla?ítko Obnovit.',

		aboutTab		: 'O aplikaci'
	},

	about :
	{
		title		: 'O aplikaci CKEditor',
		dlgTitle	: 'O aplikaci CKEditor',
		moreInfo	: 'Pro informace o lincenci navštivte naši webovou stránku:',
		copy		: 'Copyright &copy; $1. All rights reserved.'
	},

	maximize : 'Maximalizovat',
	minimize : 'Minimalizovat',

	fakeobjects :
	{
		anchor		: 'Záložka',
		flash		: 'Flash animace',
		iframe		: 'IFrame',
		hiddenfield	: 'Skryté pole',
		unknown		: 'Neznámý objekt'
	},

	resize : 'Uchopit pro zm?nu velikosti',

	colordialog :
	{
		title		: 'Výb?r barvy',
		options	:	'Nastavení barvy',
		highlight	: 'Zvýraznit',
		selected	: 'Vybráno',
		clear		: 'Vy?istit'
	},

	toolbarCollapse	: 'Skrýt panel nástroj?',
	toolbarExpand	: 'Zobrazit panel nástroj?',

	bidi :
	{
		ltr : 'Orientace textu zleva doprava',
		rtl : 'Orientace textu zprava do leva'
	}
};
