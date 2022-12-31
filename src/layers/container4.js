import React from 'react'

const container4 = () => {
    let imgs = [
        "https://i.ibb.co/80gL9By/imgonline-com-ua-resize-u-IKW9ny-GO8-Fk.jpg",
        "https://i.ibb.co/GMKb6CF/imgonline-com-ua-resize-Wtux-Fx-Bs-PNNv1wfq.jpg",
        "https://i.ibb.co/BtwJK1m/imgonline-com-ua-resize-i-OY0cyes-BXe-KBu-E8.jpg"


    ]

    return (
        <div id = "container4"> 
    <div class = "container container-flex" id = "opening">
    <p class = "table" id = "subtitle">Book Table</p>
        <h2>Opening Hours</h2>
        
        
        <div class = "telephone"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"/></svg></span></div>

        <div class = "callnow">
            <span>Call Now</span>
        </div>

        <div class = "number">
            <span>+12345 678 910</span>
        </div>

        <div class = "bothh">
            <div class = "both1">
                <div class = "days">
                    <span>Monday to Tuesday</span>
                </div>
        
                <div class = "time">
                    <span>09:00 am - 22:00pm</span>
                </div> 
            </div>

            <div class = "both">
                <div class = "days2">
                    <span>Friday to Sunday</span>
                </div>
            
    
                <div class = "time2">
                    <span>11:00am - 20:00pm</span>
                </div>
            </div>
        </div>
        
        <div class = "container-slide">
            
                <div class="swiper">
                    
                    <div class="swiper-wrapper">
                    
                    <div class="swiper-slide"><img src = {imgs[0]} alt = "img1"/></div>
                    <div class="swiper-slide"><img src = {imgs[1]} alt = "img2"/></div>
                    <div class="swiper-slide"><img src = {imgs[2]} alt = "img3"/></div>
                    </div>
                  
                    <div class= "buttons3">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                
                    </div>
                    <div class="swiper-pagination"></div>
                </div>

                
                
          </div>
    
      

    </div>   

 

</div>
    )


}

export default container4