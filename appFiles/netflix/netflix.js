function netflix(currDockIcon) {
  let appBox = `.box-box[appbox="Netflix"]`;
  toRemoveLaunchPad();
  currDockIcon.style.animation = "box 1s  alternate";
  if (!currDockIcon.querySelector(".active-dot")) {
    let divDot = document.createElement("div");
    divDot.setAttribute("appBox-dot", "Netflix-dot");
    divDot.classList = "active-dot";
    currDockIcon.append(divDot);
  }

  let boxBox = document.querySelector(appBox);
  if (boxBox) {
    currDockIcon.removeAttribute("style");
    return;
  }

  let div = document.createElement("div");
  div.classList = "box-box";
  div.setAttribute("appBox", "Netflix");
  div.style.zIndex = "75";
  div.innerHTML = `
        <div class="box-container">
            <div class="mac-dialogBox-title">
                <div class="mac-dialogBox-title-3option-box">
                    <div class="mac-dialogBox-title-icon1">
                    </div>
                    <div class="mac-dialogBox-title-icon2">
                    </div>
                    <div class="mac-dialogBox-title-icon3">
                    </div>
                </diV>
                <div class="mac-dialogBox-title-boxText">
                    Netflix
                </div>
            </div>
            <div class="netflix-appSiteBox">
                <div class="inner-netflix-appSiteBox-container">
                    <div class="inner-netflix-appSiteBox-box">
                            <div class="netflix-logo-Div">
                                    <div class="netflix-logo">
                                        <img src="../../appFiles/netflix/image/Netflix_Logo.png" alt="netflix_logo"> 
                                    </div>
                                    <div class="netflix-logo-rightBox">
                                        <div class="netflix-logo-rightBox-lang">
                                        <span class="material-icons-outlined">
                                        language
                                        </span>
                                        English
                                        </div>
                                        <div class="netflix-logo-rightBox-signIn">
                                            Sign In
                                        </div>
                                    </div>

                            </div>
                            <div class="netflix-center-content-container">
                                <div class="netflix-center-content-Box">
                                        <div class="netflix-center-text1">
                                            Unlimited Movies, TV Shows & More.
                                        </div>
                                        <div class="netflix-center-text2">
                                            Watch Anywhere. Cancel Anytime.
                                        </div>
                                        <div class="netflix-center-text3">
                                             Ready To Watch? Enter Your E-Mail To Create OR Restart Your Membership.
                                        </div>
                                        <div class="netflix-center-gmailBox">
                                            <div class="inner-netflix-center-gmailBox">
                                                E-Mail Address
                                            </div>
                                            <div class="inner-netflix-center-startBox">
                                                Get Started
                                                <span class="material-icons-outlined netflix-getStartText">
                                                arrow_forward_ios
                                                </span>
                                            </div>
                                                
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="netflix-tv-container">
                        <div class="netflix-tv-text">
                            <div class="netflix-tv-text-box1-leftSide">
                                Enjoy On Your TV.
                            </div>
                            <div class="netflix-tv-text-box2-leftSide">
                            Watch On Smart TVs, PlayStation, Xbox, ChromeCast, Apple TV, Blu-Ray Players & More.
                             
                            </div>
                        </div>
                        <div class="netflix-tv-img">
                            <img src="../../appFiles/netflix/image/tv.png" alt="tvImage">

                        </div>
                </div>
                <div class="netflix-tv-container">
                        
                        <div class="netflix-tv-img androidImg">
                            <img src="../../appFiles/netflix/image/android.png" alt="android">

                        </div>
                        <div class="netflix-tv-text">
                            <div class="netflix-tv-text-box1-rightSide">
                            Download Your Shows To Watch Offline.
                            </div>
                            <div class="netflix-tv-text-box2-rightSide">
                                Save Your Favourites Easily & Always Have Something To Watch.
                            
                            </div>
                        </div>
                </div>
                <div class="netflix-tv-container">
                        
                        <div class="netflix-tv-text">
                            <div class="netflix-tv-text-box1-leftSide">
                                Watch Everywhere.
                            </div>
                            <div class="netflix-tv-text-box2-leftSide">
                                Stream Unlimited Movies & TV Shows On Your Phone, Tablet, Laptop, & TV.
                            </div>
                        </div>
                        
                        <div class="netflix-tv-img macImg">
                            <img src="../../appFiles/netflix/image/mac.png" alt="mac">

                        </div>
                </div>
                <div class="netflix-tv-container">
                        
                        <div class="netflix-tv-img childImg">
                            <img src="../../appFiles/netflix/image/child.png" alt="child">

                        </div>
                        <div class="netflix-tv-text">
                            <div class="netflix-tv-text-box1-rightSide">
                                Create Profiles For Children.
                            </div>
                            <div class="netflix-tv-text-box2-rightSide">
                            Send Children On Adventures With Their Favourite Characters In A Space Made Just For Them — Free With Your Membership.



                            </div>
                        </div>
                </div>
                <div class="netflix-qNA-container">
                        <div class="netflix-qNA-container-box1">
                            Frequently Asked Questions
                        </div>
                        <div class="netflix-qNA-container-qNA-box">
                            <div class="qna-TextBox">
                            What is NetFlix?
                            </div>
                            <div class="qna-Symbol">
                                +
                            </div>
                        </div>
                        <div class="netflix-qNA-container-qNA-box">
                            <div class="qna-TextBox">
                                How Much Does NetFlix Cost?
                            </div>
                            <div class="qna-Symbol">
                                +
                            </div>
                        </div>
                        <div class="netflix-qNA-container-qNA-box">
                            <div class="qna-TextBox">
                            Where Can I Watch?
                            </div>
                            <div class="qna-Symbol">
                                +
                            </div>
                        </div>
                        <div class="netflix-qNA-container-qNA-box">
                            <div class="qna-TextBox">
                            What Can I Watch On NetFlix?
                            </div>
                            <div class="qna-Symbol">
                                +
                            </div>
                        </div>
                        <div class="netflix-qNA-container-qNA-box">
                            <div class="qna-TextBox">
                            Is NetFlix Good For Kids?
                            </div>
                            <div class="qna-Symbol">
                                +
                            </div>
                        </div>
                        <div class="netflix-center-text3-2">
                             Ready To Watch? Enter Your E-Mail To Create OR Restart Your Membership.
                        </div>
                   <div class="netflix-center-gmailBox2">
                       <div class="inner-netflix-center-gmailBox">
                           E-Mail Address
                       </div>
                       <div class="inner-netflix-center-startBox">
                           Get Started
                           <span class="material-icons-outlined netflix-getStartText">
                           arrow_forward_ios
                           </span>
                       </div>
                   </div>
                        
                </div>
                
            </div>
        </div>
    `;
  divScreenContainer.append(div);

  //Z-INdex
  let currBox = document.querySelector('.box-box[appbox="Netflix"]');
  if (currBox) {
    currDockIcon.addEventListener("click", function () {
      if ((lastZIndexAppBOx != lastZIndexAppBOx) != "Netflix") {
        let lastOpenBox = document.querySelector(
          `.box-box[appbox="${lastZIndexAppBOx}"]`
        );
        if (lastOpenBox) {
          lastOpenBox.style.zIndex = "0";
        }
      }
      let currBox = document.querySelector('.box-box[appbox="Netflix"]');
      currBox.style.zIndex = "80";
      lastZIndexAppBOx = "Netflix";
    });
  }

  cancelCircle(currDockIcon, appBox);
  fullScreenCircle(appBox);
  minimize(appBox);
}
