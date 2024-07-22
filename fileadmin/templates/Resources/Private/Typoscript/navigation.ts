#Main menu
lib.smMenu >
lib.smMenu = HMENU
lib.smMenu {
  #maxItems = 6
  includeNotInMenu = 0
  excludeUidList = {$page.menu.excludeUidList}
    1 = TMENU
    1 {
        expAll = 1
        wrap = <ul id="main-menu" class="sm sm-clean">|</ul>
        NO.wrapItemAndSub = <li class="menu-item">|</li>|*|<li class="menu-item">|</li>|*|<li class="menu-item menu-item-last">|</li>
        CUR = 1
        CUR.wrapItemAndSub = <li class="menu-item menu-item-active">|</li>       
        ACT = 1
        CUR.ATagParams = class="active" 
        ACT < .CUR
        
        /*
        IFSUB = 1
        IFSUB.before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        IFSUB.after =  </a>
        IFSUB.doNotLinkIt = 1
        IFSUB.wrapItemAndSub = <li class="dropdown first-level-item">|</li>
        IFSUB.ATagTitle.field = abstract // description // title
     
        ACTIFSUB = 1
        ACTIFSUB.before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        ACTIFSUB.after =  </a>
        ACTIFSUB.doNotLinkIt = 1
        ACTIFSUB.wrapItemAndSub = <li class="dropdown active first-level-item-active">|</li>
        ACTIFSUB.ATagTitle.field = abstract // description // title   
        */    
    }
    2 = TMENU
    2 {
        expAll = 1
        wrap = <ul class="submenu submenu-gradient">|</ul>
        NO = 1
        NO.wrapItemAndSub = <li>|</li>
        ACT = 1
        ACT.wrapItemAndSub = <li>|</li>
        #ACT < .CUR    
        ACT.ATagParams = class="active"   
    }
    3 = TMENU
    3 {
        expAll = 1
        wrap = <ul class="third-level-smmenu">|</ul>
        NO = 1
        NO.wrapItemAndSub = <li class="third-level-item">|</li>
        CUR = 1
        CUR.wrapItemAndSub = <li class="third-level-item-current">|</li>
        #ACT < .CUR        
    } 
    3 >   
}


# Catalog category menu
#[treeLevel = 2]||[globalVar = TSFE:id = 4]||[PIDinRootline = 4]
#[PIDinRootline = 4]
lib.categoryMenu >
lib.categoryMenu = HMENU
lib.categoryMenu.special = directory
lib.categoryMenu.special.field = uid 
lib.categoryMenu  {
  1 = TMENU
  1 {
    wrap = <div class="catalog-categories"><div class="row">|</div></div>
    NO.allWrap.insertData = 1
    NO.linkWrap = |
    NO.ATagBeforeWrap = 1
    NO.allWrap (
      <div class="col-md-4 catalog-category-item menu-category-item">|</div>
    )
    NO.ATagTitle.field = description // title    
    NO.stdWrap.override.cObject = FILES
    NO.stdWrap.override.cObject {
    
    # Default Image  
    stdWrap.ifEmpty.cObject = COA
    stdWrap.ifEmpty.cObject {
      10 = IMAGE
      10 {
        file = fileadmin/templates/Resources/Public/Images/dummy_news.png 
        altText.field = subtitle // title
        file.width = 219c
        file.height = 165c   
        wrap = <figure>|       
      }
      20 = TEXT
      20 {
        field = title
        wrap = <figcaption>|</figcaption></figure>
       }         
    }      
    references {
      table = pages
      uid.field = uid
      fieldName = media
    }      
    renderObj = COA
    renderObj {
      10 = IMAGE
      10 {
        wrap = <figure>|
        file.import.data = file:current:publicUrl
        file.width = 219c
        file.height = 165c-100
        altText >
        altText = TEXT
        altText.data = field:title    
          
      }
      20 = TEXT
      20 {
        field = title
        wrap = <figcaption>|</figcaption></figure>
        #typolink.parameter.field = uid
       }
     }
   }
 }
}
#[global]

lib.categoryMenu >