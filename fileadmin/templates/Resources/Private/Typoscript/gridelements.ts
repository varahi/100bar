 tt_content.gridelements_pi1.20.10.setup {
  # Bg gradient container 
  1 < lib.gridelements.defaultGridSetup
  1 {
    wrap = <div class="bg-gradient">|</div>
    innerWrap = <div class="content"><div class="container">|</div></div>
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = |
        innerWrap =  |
      }
    } # end columns
  } # end grid 1
  
  # Standard container
  2 < lib.gridelements.defaultGridSetup
  2 {
    wrap = <div class="content">|</div>
    innerWrap = <div class="container">|</div>
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = |
        innerWrap =  |
      }
    } # end columns
  } # end grid 2 
  
  
  # Two columns contact
  3 < lib.gridelements.defaultGridSetup
  3 {
    wrap = <div class="contact-columns">|</div>
    innerWrap = <div class="row">|</div>
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = <div class="col-md-6 col-sm-6 col-xs-6 text-right left-column">|</div>
        innerWrap =  |
      }
      # colPos ID
      1 < .default
      1 {
        wrap = <div class="col-md-6 col-sm-6 col-xs-6 text-left right-column">|</div>
        innerWrap =  |
      }      
    } # end columns
  } # end grid 3  
  
  
  # Block catalog list
  4 < lib.gridelements.defaultGridSetup
  4 {
    wrap = <div class="contact-columns">|</div>
    innerWrap = <div class="row">|</div>
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = <div class="col-md-6 text-right left-column">|</div>
        innerWrap =  |
      }
      # colPos ID
      1 < .default
      1 {
        wrap = <div class="col-md-6 text-left right-column">|</div>
        innerWrap =  |
      }      
    } # end columns
  } # end grid 4 

}