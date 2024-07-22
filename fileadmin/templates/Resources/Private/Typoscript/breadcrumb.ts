################
# Breadcrump
################
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <ol class="breadcrumb">|</ol>
  10 = HMENU
  10.includeNotInMenu = 0
  10 {
    special = rootline
    special.range =  0 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = subtitle // title
            stdWrap.htmlSpecialChars = 1
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li class="active">|</li>
            doNotLinkIt = 1
        }
      }
    }
  }
  
[PIDinRootline = 25]
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <ol class="breadcrumb">|</ol>
  10 = HMENU
  10.includeNotInMenu = 0
  10 {
    special = rootline
    special.range =  0 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = subtitle // title
            stdWrap.htmlSpecialChars = 1
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li><a href="stati.html" title="Статьи">Статьи</a></li><li class="active">|</li>
            doNotLinkIt = 1
        }
      }
    }
  }
[global]  

[globalVar = GP:tx_news_pi1|news > 0]
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <ol class="breadcrumb">|</ol>
  10 = HMENU
  10 {
    special = rootline
    special.range =  0 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = subtitle // title
            stdWrap.htmlSpecialChars = 1
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li>|</li>
            doNotLinkIt = 0
              }
            }
          }

  # Add news title if on single view
    20 = RECORDS
    20 {
      if.isTrue.data = GP:tx_news_pi1|news
        dontCheckPid = 1
        tables = tx_news_domain_model_news
        source.data = GP:tx_news_pi1|news
        source.intval = 1
        conf.tx_news_domain_model_news = TEXT
        conf.tx_news_domain_model_news {
          field = title
          htmlSpecialChars = 1
        }
      wrap =  <li class="active">|</li>
      }
  }
[global]

[globalVar = GP:tx_barcatalog_barcatalog|item > 0]
lib.breadcrumb >.
/*
lib.breadcrumb = COA
lib.breadcrumb {
  stdWrap.wrap = <ol class="breadcrumb">|</ol>
  10 = HMENU
  10 {
    special = rootline
    special.range =  0 | -1
      1 = TMENU
      1 {
        noBlur = 1
          NO = 1
          NO {
            wrapItemAndSub = <li>|</li>
            ATagTitle.field = subtitle // title
            stdWrap.htmlSpecialChars = 1
            }

          CUR <.NO
          CUR {
            wrapItemAndSub = <li>|</li>
            doNotLinkIt = 0
              }
            }
          }
    20 = RECORDS
    20 {
      if.isTrue.data = GP:tx_barcatalog_barcatalog|item
        dontCheckPid = 1
        tables = tx_barcatalog_domain_model_item
        source.data = GP:tx_barcatalog_barcatalog|item
        source.intval = 1
        conf.tx_barcatalog_domain_model_item = TEXT
        conf.tx_barcatalog_domain_model_item {
          field = title
          htmlSpecialChars = 1
        }
      wrap =  <li class="active">|</li>
      }
  }
  */
[global]


[globalVar = TSFE:id = 62||45||66]
  lib.breadcrumb >
[treeLevel = 1]
	lib.breadcrumb >
[global]