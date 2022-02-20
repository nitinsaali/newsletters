export function fnBrowserDetect(){ 
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "Chrome";
      }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "Firefox";
      }  else if(userAgent.match(/safari/i)){
        browserName = "Safari";
      }else if(userAgent.match(/opr\//i)){
        browserName = "Opera";
      } else if(userAgent.match(/edg/i)){
        browserName = "Edge";
      }else{
        browserName = "No browser detection";
      }        
    return browserName;
  }