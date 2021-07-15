function openChat(){
    var chatURL="https://chat66.dotcomuse9.com/index/index/home?visiter_id=&visiter_name=&avatar=&business_id=1&groupid=0&special=1&theme=7571f9";
    try{
        window.app.ShowFullWebView('url:'+chatURL,1);
    }catch(e){
        window.app.OpenURL(chatURL);
    }
}