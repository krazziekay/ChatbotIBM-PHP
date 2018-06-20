/**
 * Polish translation
 * @author Marcin Mikołajczyk <marcin@pjwstk.edu.pl>
 * @author Wojciech Jabłoński <www.jablonski@gmail.com>
 * @version 2014-12-19
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.pl = {
		translator : 'Marcin Mikołajczyk &lt;marcin@pjwstk.edu.pl&gt;, Wojciech Jabłoński &lt;www.jablonski@gmail.com&gt;',
		language   : 'Polski',
		direction  : 'ltr',
		dateFormat : 'd M Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Błąd',
			'errUnknown'           : 'Nieznany błąd.',
			'errUnknownCmd'        : 'Nieznane polecenie.',
			'errJqui'              : 'Niepoprawna konfiguracja jQuery UI. Muszą być zawarte komponenty selectable, draggable i droppable.',
			'errNode'              : 'elFinder wymaga utworzenia obiektu DOM.',
			'errURL'               : 'Niepoprawna konfiguracja elFinder! Pole URL nie jest ustawione.',
			'errAccess'            : 'Dostęp zabroniony.',
			'errConnect'           : 'Błąd połączenia z backend.',
			'errAbort'             : 'Połączenie zostało przerwane.',
			'errTimeout'           : 'Upłynął czas oczekiwania na połączenie.',
			'errNotFound'          : 'Backend nie został znaleziony.',
			'errResponse'          : 'Nieprawidłowa odpowiedź backend.',
			'errConf'              : 'Niepoprawna konfiguracja backend.',
			'errJSON'              : 'Moduł PHP JSON nie jest zainstalowany.',
			'errNoVolumes'         : 'Brak możliwości odczytu katalogów.',
			'errCmdParams'         : 'Nieprawidłowe parametry dla polecenia "$1".',
			'errDataNotJSON'       : 'Dane nie są JSON.',
			'errDataEmpty'         : 'Dane są puste.',
			'errCmdReq'            : 'Backend wymaga podania nazwy polecenia.',
			'errOpen'              : 'Nie można otworzyć "$1".',
			'errNotFolder'         : 'Obiekt nie jest folderem.',
			'errNotFile'           : 'Obiekt nie jest plikiem.',
			'errRead'              : 'Nie można odczytać "$1".',
			'errWrite'             : 'Nie można zapisać do "$1".',
			'errPerm'              : 'Brak uprawnień.',
			'errLocked'            : '"$1" jest zablokowany i nie może zostać zmieniony, przeniesiony lub usunięty.',
			'errExists'            : 'Plik "$1" już istnieje.',
			'errInvName'           : 'Nieprawidłowa nazwa pliku.',
			'errFolderNotFound'    : 'Katalog nie został znaleziony.',
			'errFileNotFound'      : 'Plik nie został znaleziony.',
			'errTrgFolderNotFound' : 'Katalog docelowy "$1" nie został znaleziony.',
			'errPopup'             : 'Przeglądarka zablokowała otwarcie nowego okna. Aby otworzyć plik, zmień ustawienia przeglądarki.',
			'errMkdir'             : 'Nie można utworzyć katalogu "$1".',
			'errMkfile'            : 'Nie można utworzyć pliku "$1".',
			'errRename'            : 'Nie można zmienić nazwy "$1".',
			'errCopyFrom'          : 'Kopiowanie z katalogu "$1" nie jest możliwe.',
			'errCopyTo'            : 'Kopiowanie do katalogu "$1" nie jest możliwe.',
			'errUpload'            : 'Błąd wysyłania.',
			'errUploadFile'        : 'Nie można wysłać "$1".',
			'errUploadNoFiles'     : 'Nie znaleziono plików do wysłania.',
			'errUploadTotalSize'   : 'Przekroczono dopuszczalny rozmiar wysyłanych plików.',
			'errUploadFileSize'    : 'Plik przekracza dopuszczalny rozmiar.',
			'errUploadMime'        : 'Niedozwolony typ pliku.',
			'errUploadTransfer'    : 'Błąd przesyłania "$1".',
			'errNotReplace'        : 'Object "$1" already exists at this location and can not be replaced by object with another type.',
			'errReplace'           : 'Unable to replace "$1".',
			'errSave'              : 'Nie można zapisać "$1".',
			'errCopy'              : 'Nie można skopiować "$1".',
			'errMove'              : 'Nie można przenieść "$1".',
			'errCopyInItself'      : 'Nie można skopiować "$1" w miejsce jego samego.',
			'errRm'                : 'Nie można usunąć "$1".',
			'errRmSrc'             : 'Unable remove source file(s).',
			'errExtract'           : 'Nie można wypakować plików z "$1".',
			'errArchive'           : 'Nie można utworzyć archiwum.',
			'errArcType'           : 'Nieobsługiwany typ archiwum.',
			'errNoArchive'         : 'Plik nie jest prawidłowym typem archiwum.',
			'errCmdNoSupport'      : 'Backend nie obsługuje tego polecenia.',
			'errReplByChild'       : 'Nie można zastąpić katalogu "$1" elementem w nim zawartym',
			'errArcSymlinks'       : 'Ze względów bezpieczeństwa rozpakowywanie archiwów zawierających dowiązania symboliczne (symlinks) jest niedozwolone.',
			'errArcMaxSize'        : 'Archiwum przekracza maksymalny dopuszczalny rozmiar.',
			'errResize'            : 'Nie można zmienić rozmiaru "$1".',
			'errResizeDegree'      : 'Invalid rotate degree.',
			'errResizeRotate'      : 'Image dose not rotated.',
			'errResizeSize'        : 'Invalid image size.',
			'errResizeNoChange'    : 'Image size not changed.',
			'errUsupportType'      : 'Nieobsługiwany typ pliku.',
			'errNotUTF8Content'    : 'File "$1" is not in UTF-8 and cannot be edited.',  // added 9.11.2011
			'errNetMount'          : 'Unable to mount "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Unsupported protocol.',     // added 17.04.2012
			'errNetMountFailed'    : 'Mount failed.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Host required.', // added 18.04.2012
			'errSessionExpires'    : 'Your session has expired due to inactivity.',
			'errCreatingTempDir'   : 'Unable to create temporary directory: "$1"',
			'errFtpDownloadFile'   : 'Unable to download file from FTP: "$1"',
			'errFtpUploadFile'     : 'Unable to upload file to FTP: "$1"',
			'errFtpMkdir'          : 'Unable to create remote directory on FTP: "$1"',
			'errArchiveExec'       : 'Error while archiving files: "$1"',
			'errExtractExec'       : 'Error while extracting files: "$1"',

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Utwórz archiwum',
			'cmdback'      : 'Wstecz',
			'cmdcopy'      : 'Kopiuj',
			'cmdcut'       : 'Wytnij',
			'cmddownload'  : 'Pobierz',
			'cmdduplicate' : 'Duplikuj',
			'cmdedit'      : 'Edytuj plik',
			'cmdextract'   : 'Wypakuj pliki z archiwum',
			'cmdforward'   : 'Dalej',
			'cmdgetfile'   : 'Wybierz pliki',
			'cmdhelp'      : 'Informacje o programie',
			'cmdhome'      : 'Katalog główny',
			'cmdinfo'      : 'Właściwości',
			'cmdmkdir'     : 'Nowy folder',
			'cmdmkfile'    : 'Nowy plik tekstowy',
			'cmdopen'      : 'Otwórz',
			'cmdpaste'     : 'Wklej',
			'cmdquicklook' : 'Podgląd',
			'cmdreload'    : 'Odśwież',
			'cmdrename'    : 'Zmień nazwę',
			'cmdrm'        : 'Usuń',
			'cmdsearch'    : 'Wyszukaj pliki',
			'cmdup'        : 'W górę',
			'cmdupload'    : 'Wyślij pliki',
			'cmdview'      : 'Widok',
			'cmdresize'    : 'Zmień rozmiar obrazu',
			'cmdsort'      : 'Sortuj',
			'cmdnetmount'  : 'Mount network volume',

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Zamknij',
			'btnSave'   : 'Zapisz',
			'btnRm'     : 'Usuń',
			'btnApply'  : 'Zastosuj',
			'btnCancel' : 'Anuluj',
			'btnNo'     : 'Nie',
			'btnYes'    : 'Tak',
			'btnMount'  : 'Mount',

			/******************************** notifications ********************************/
			'ntfopen'     : 'Otwórz folder',
			'ntffile'     : 'Otwórz plik',
			'ntfreload'   : 'Odśwież zawartość folderu',
			'ntfmkdir'    : 'Tworzenie katalogu',
			'ntfmkfile'   : 'Tworzenie plików',
			'ntfrm'       : 'Usuwanie plików',
			'ntfcopy'     : 'Kopiowanie plików',
			'ntfmove'     : 'Przenoszenie plików',
			'ntfprepare'  : 'Przygotowanie do kopiowania plików',
			'ntfrename'   : 'Zmiana nazw plików',
			'ntfupload'   : 'Wysyłanie plików',
			'ntfdownload' : 'Pobieranie plików',
			'ntfsave'     : 'Zapisywanie plików',
			'ntfarchive'  : 'Tworzenie archiwum',
			'ntfextract'  : 'Wypakowywanie plików z archiwum',
			'ntfsearch'   : 'Wyszukiwanie plików',
			'ntfresize'   : 'Resizing images',
			'ntfsmth'     : 'Robienie czegoś >_<',
			'ntfloadimg'  : 'Ładowanie obrazu',
			'ntfnetmount' : 'Mounting network volume', // added 18.04.2012
			'ntfdim'      : 'Acquiring image dimension', // added 20.05.2013

			/************************************ dates **********************************/
			'dateUnknown' : 'nieznana',
			'Today'       : 'Dzisiaj',
			'Yesterday'   : 'Wczoraj',
			'msJan'       : 'sty',
			'msFeb'       : 'lut',
			'msMar'       : 'mar',
			'msApr'       : 'kwi',
			'msMay'       : 'maj',
			'msJun'       : 'cze',
			'msJul'       : 'lip',
			'msAug'       : 'sie',
			'msSep'       : 'wrz',
			'msOct'       : 'paź',
			'msNov'       : 'lis',
			'msDec'       : 'gru',
			'January'     : 'Styczeń',
			'February'    : 'Luty',
			'March'       : 'Marzec',
			'April'       : 'Kwiecień',
			'May'         : 'Maj',
			'June'        : 'Czerwiec',
			'July'        : 'Lipiec',
			'August'      : 'Sierpień',
			'September'   : 'Wrzesień',
			'October'     : 'Październik',
			'November'    : 'Listopad',
			'December'    : 'Grudzień',
			'Sunday'      : 'niedziela',
			'Monday'      : 'poniedziałek',
			'Tuesday'     : 'wtorek',
			'Wednesday'   : 'środa',
			'Thursday'    : 'czwartek',
			'Friday'      : 'piątek',
			'Saturday'    : 'sobota',
			'Sun'         : 'nie',
			'Mon'         : 'pon',
			'Tue'         : 'wto',
			'Wed'         : 'śro',
			'Thu'         : 'czw',
			'Fri'         : 'pią',
			'Sat'         : 'sob',

			/******************************** sort variants ********************************/
			'sortname'          : 'po nazwie', 
			'sortkind'          : 'po typie', 
			'sortsize'          : 'po rozmiarze',
			'sortdate'          : 'po dacie',
			'sortFoldersFirst'  : 'Folders first',

			/********************************** messages **********************************/
			'confirmReq'      : 'Wymagane potwierdzenie',
			'confirmRm'       : 'Czy na pewno chcesz usunąć pliki?<br/>Tej operacji nie można cofnąć!',
			'confirmRepl'     : 'Zastąpić stary plik nowym?',
			'apllyAll'        : 'Zastosuj do wszystkich',
			'name'            : 'Nazwa',
			'size'            : 'Rozmiar',
			'perms'           : 'Uprawnienia',
			'modify'          : 'Zmodyfikowany',
			'kind'            : 'Typ',
			'read'            : 'odczyt',
			'write'           : 'zapis',
			'noaccess'        : 'brak dostępu',
			'and'             : 'i',
			'unknown'         : 'nieznany',
			'selectall'       : 'Zaznacz wszystkie pliki',
			'selectfiles'     : 'Zaznacz plik(i)',
			'selectffile'     : 'Zaznacz pierwszy plik',
			'selectlfile'     : 'Zaznacz ostatni plik',
			'viewlist'        : 'Widok listy',
			'viewicons'       : 'Widok ikon',
			'places'          : 'Ulubione',
			'calc'            : 'Oblicz',
			'path'            : 'Ścieżka',
			'aliasfor'        : 'Alias do',
			'locked'          : 'Zablokowany',
			'dim'             : 'Wymiary',
			'files'           : 'Pliki',
			'folders'         : 'Foldery',
			'items'           : 'Elementy',
			'yes'             : 'tak',
			'no'              : 'nie',
			'link'            : 'Odnośnik',
			'searcresult'     : 'Wyniki wyszukiwania',
			'selected'        : 'Zaznaczonych obiektów',
			'about'           : 'Informacje o programie',
			'shortcuts'       : 'Skróty klawiaturowe',
			'help'            : 'Pomoc',
			'webfm'           : 'Menedżer plików sieciowych',
			'ver'             : 'Wersja',
			'protocolver'     : 'wersja wydania',
			'homepage'        : 'Strona główna projektu',
			'docs'            : 'Dokumentacja',
			'github'          : 'Obserwuj rozwój projektu na Github',
			'twitter'         : 'Śledź nas na Twitterze',
			'facebook'        : 'Dołącz do nas na Facebooku',
			'team'            : 'Autorzy',
			'chiefdev'        : 'główny programista',
			'developer'       : 'programista',
			'contributor'     : 'współautor',
			'maintainer'      : 'koordynator',
			'translator'      : 'tłumacz',
			'icons'           : 'Ikony',
			'dontforget'      : 'i nie zapomnij zabrać ręcznika',
			'shortcutsof'     : 'Skróty klawiaturowe są wyłączone',
			'dropFiles'       : 'Upuść pliki tutaj',
			'or'              : 'lub',
			'selectForUpload' : 'Wybierz pliki do wysłania',
			'moveFiles'       : 'Przenieś pliki',
			'copyFiles'       : 'Kopiuj pliki',
			'rmFromPlaces'    : 'Usuń z ulubionych',
			'aspectRatio'     : 'Zachowaj proporcje',
			'scale'           : 'Skala',
			'width'           : 'Szerokość',
			'height'          : 'Wysokość',
			'resize'          : 'Zmień rozmiar',
			'crop'            : 'Przytnij',
			'rotate'          : 'Obróć',
			'rotate-cw'       : 'Obróć 90° w lewo',
			'rotate-ccw'      : 'Obróć 90° w prawo',
			'degree'          : '°',
			'netMountDialogTitle' : 'Mount network volume', // added 18.04.2012
			'protocol'            : 'Protocol', // added 18.04.2012
			'host'                : 'Host', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'User', // added 18.04.2012
			'pass'                : 'Password', // added 18.04.2012

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Nieznany',
			'kindFolder'      : 'Folder',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Utracony alias',
			// applications
			'kindApp'         : 'Aplikacja',
			'kindPostscript'  : 'Dokument Postscript',
			'kindMsOffice'    : 'Dokument Office',
			'kindMsWord'      : 'Dokument Word',
			'kindMsExcel'     : 'Dokument Excel',
			'kindMsPP'        : 'Prezentacja PowerPoint',
			'kindOO'          : 'Dokument OpenOffice',
			'kindAppFlash'    : 'Aplikacja Flash',
			'kindPDF'         : 'Dokument przenośny PDF',
			'kindTorrent'     : 'Plik BitTorrent',
			'kind7z'          : 'Archiwum 7z',
			'kindTAR'         : 'Archiwum TAR',
			'kindGZIP'        : 'Archiwum GZIP',
			'kindBZIP'        : 'Archiwum BZIP',
			'kindXZ'          : 'Archiwum XZ',
			'kindZIP'         : 'Archiwum ZIP',
			'kindRAR'         : 'Archiwum RAR',
			'kindJAR'         : 'Java JAR file',
			'kindTTF'         : 'Czcionka TrueType',
			'kindOTF'         : 'Czcionka OpenType',
			'kindRPM'         : 'Pakiet RPM',
			// texts
			'kindText'        : 'Dokument tekstowy',
			'kindTextPlain'   : 'Zwykły tekst',
			'kindPHP'         : 'Kod źródłowy PHP',
			'kindCSS'         : 'Kaskadowe arkusze stylów',
			'kindHTML'        : 'Dokument HTML',
			'kindJS'          : 'Kod źródłowy Javascript',
			'kindRTF'         : 'Tekst sformatowany RTF',
			'kindC'           : 'Kod źródłowy C',
			'kindCHeader'     : 'Plik nagłówka C',
			'kindCPP'         : 'Kod źródłowy C++',
			'kindCPPHeader'   : 'Plik nagłówka C++',
			'kindShell'       : 'Skrypt powłoki Unix',
			'kindPython'      : 'Kod źródłowy Python',
			'kindJava'        : 'Kod źródłowy Java',
			'kindRuby'        : 'Kod źródłowy Ruby',
			'kindPerl'        : 'Skrypt Perl',
			'kindSQL'         : 'Kod źródłowy SQL',
			'kindXML'         : 'Dokument XML',
			'kindAWK'         : 'Kod źródłowy AWK',
			'kindCSV'         : 'Tekst rozdzielany przecinkami CSV',
			'kindDOCBOOK'     : 'Dokument Docbook XML',
			// images
			'kindImage'       : 'Obraz',
			'kindBMP'         : 'Obraz BMP',
			'kindJPEG'        : 'Obraz JPEG',
			'kindGIF'         : 'Obraz GIF',
			'kindPNG'         : 'Obraz PNG',
			'kindTIFF'        : 'Obraz TIFF',
			'kindTGA'         : 'Obraz TGA',
			'kindPSD'         : 'Obraz Adobe Photoshop',
			'kindXBITMAP'     : 'Obraz X BitMap',
			'kindPXM'         : 'Obraz Pixelmator',
			// media
			'kindAudio'       : 'Plik dźwiękowy',
			'kindAudioMPEG'   : 'Plik dźwiękowy MPEG',
			'kindAudioMPEG4'  : 'Plik dźwiękowy MPEG-4',
			'kindAudioMIDI'   : 'Plik dźwiękowy MIDI',
			'kindAudioOGG'    : 'Plik dźwiękowy Ogg Vorbis',
			'kindAudioWAV'    : 'Plik dźwiękowy WAV',
			'AudioPlaylist'   : 'Lista odtwarzania MP3',
			'kindVideo'       : 'Plik wideo',
			'kindVideoDV'     : 'Plik wideo DV',
			'kindVideoMPEG'   : 'Plik wideo MPEG',
			'kindVideoMPEG4'  : 'Plik wideo MPEG-4',
			'kindVideoAVI'    : 'Plik wideo AVI',
			'kindVideoMOV'    : 'Plik wideo Quick Time',
			'kindVideoWM'     : 'Plik wideo Windows Media',
			'kindVideoFlash'  : 'Plik wideo Flash',
			'kindVideoMKV'    : 'Plik wideo Matroska',
			'kindVideoOGG'    : 'Plik wideo Ogg'
		}
	};
}
