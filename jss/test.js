function testJS(){
    Notification.requestPermission();
    if(Notification.permission === 'granted'){
        const newNotification = new Notification("Hello World!");
    }   
    if("Notification" in window){
        Notification.close();
    }
}