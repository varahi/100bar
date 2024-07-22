lib.logo >
lib.logo = COA
lib.logo {
  wrap = |
  10 = IMAGE
  10 {
    file = {$template_path}/Resources/Public/Images/logo.png
    altText = {$page.header.logoTitle}
    titleText = {$page.header.logoTitle}
    file.width = 360
    file.height = 95
    stdWrap.typolink.parameter = 1
    stdWrap.wrap = |
    stdWrap.typolink.title = {$page.header.logoTitle}  
  }
}

lib.slogan = TEXT
lib.slogan.wrap = <div class="slogan">|</div>
lib.slogan.value = {$page.header.slogan}

lib.callbackLink >  
lib.callbackLink = RECORDS
lib.callbackLink {
  wrap = <div class="callback-button">|</div>
  source = 3
  dontCheckPid = 1
  tables = tt_content
}

lib.topPhone = TEXT
lib.topPhone {
  wrap = <div class="top-phone">|</div>
  value = {$page.header.phone}
}

lib.topAddress = TEXT
lib.topAddress {
  wrap = <div class="top-address">|</div>
  value = {$page.header.address}
}

lib.carousel >  
lib.carousel = RECORDS
lib.carousel {
  wrap = <div class="container">|</div>
  source = 13
  dontCheckPid = 1
  tables = tt_content
}

lib.search > 
lib.search = RECORDS
lib.search {
  wrap = |
  source = 52
  dontCheckPid = 1
  tables = tt_content
}

[globalVar = TSFE:id = 62]
lib.search > 
lib.search = TEXT
lib.search.value (
  <div class="tx-barcatalog"> 
    <div class="search"> 
      <form method="post" name="search" action="index.php?id=display&amp;cHash=711795c4d03fe6bb221c1e7a3ff65994&amp;tx_barcatalog_barcatalogsearch%5Baction%5D=search&amp;tx_barcatalog_barcatalogsearch%5Bcontroller%5D=Item"> 
      <div> <input type="hidden" name="tx_barcatalog_barcatalogsearch[__referrer][@extension]" value="Barcatalog" /> <input type="hidden" name="tx_barcatalog_barcatalogsearch[__referrer][@vendor]" value="Devcompany" /> <input type="hidden" name="tx_barcatalog_barcatalogsearch[__referrer][@controller]" value="Item" /> <input type="hidden" name="tx_barcatalog_barcatalogsearch[__referrer][@action]" value="searchForm" /> <input type="hidden" name="tx_barcatalog_barcatalogsearch[__referrer][arguments]" value="YTowOnt9ed9992d02d4111f1a9ebc4e10dda95935f6595c7" /> <input type="hidden" name="tx_barcatalog_barcatalogsearch[__trustedProperties]" value="a:1:{s:12:&quot;searchPhrase&quot;;i:1;}ec64fc504ec255f4d58f0b01be85dd50f55b9eb3" /> </div>
      <input placeholder="Поиск по каталогу" class="input-search" type="text" name="tx_barcatalog_barcatalogsearch[searchPhrase]" /> <input type="submit" class="search-submit" /> </form>
    </div>
  </div>           
)
[global]
