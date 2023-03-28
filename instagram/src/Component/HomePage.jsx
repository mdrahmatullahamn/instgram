// import './Instagram.css'
// import { useState } from "react";
// import Sidebar from './Sidebar';

// function HomePage() {
//   return (
//     <div id="homePage">
//       <Sidebar/>
      
//       <div className="home-content">
//         <div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//         </div>
//         <div className="home-add-content"></div>
//       </div>
//       <div className="home-suggestions">
//         <div className="home-suggestions-top"></div>
//         <div className="home-suggestions-mid">
//           <div>
//             <p>Suggestions for you</p>
//             <p>See All</p>
//           </div>
//           <div className="home-profiles">
//             <div></div>
//             <div>
//               <h5>abc1234</h5>
//               <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
//             </div>
//             <div>Follow</div>
//           </div>
//           <div className="home-profiles">
//             <div></div>
//             <div>
//               <h5>abc1234</h5>
//               <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
//             </div>
//             <div>Follow</div>
//           </div>
//           <div className="home-profiles">
//             <div></div>
//             <div>
//               <h5>abc1234</h5>
//               <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
//             </div>
//             <div>Follow</div>
//           </div>
//           <div className="home-profiles">
//             <div></div>
//             <div>
//               <h5>abc1234</h5>
//               <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
//             </div>
//             <div>Follow</div>
//           </div>
//         </div>
//         <div className="home-suggestions-bot">
//           <div>
//             <p>About</p>
//             <p>Help</p>
//             <p>Press</p>
//             <p>API</p> 
//             <p>Jobs</p> 
//             <p>Privacy</p>
//             <p>Terms</p>
//             <p>Locations</p> 
//             <p>Language</p>
//             <p>English</p> 
//             <p>Meta</p> 
//             <p>Verified</p> 
//           </div>
//           <div>
//           © 2023 INSTAGRAM FROM META
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


import { useEffect, useState } from "react";
import "./Instagram.css";
import Sidebar from "./Sidebar";
// import { toast } from "react-hot-toast";

function HomePage() {
  const [userData, setUserData] = useState();
  const [currentData, setCurrentData] = useState();
  const [like, setLike] = useState();

  useEffect(() => {
    var currentUser = JSON.parse(localStorage.getItem("current-prsent-user"));
    if (currentUser) {
      var dataFromLs = JSON.parse(localStorage.getItem("instaUserid"));
      if (dataFromLs) {
        var array = [];
        for (var i = 0; i < dataFromLs.length; i++) {
          if (dataFromLs[i].posts) {
            array = array.concat(dataFromLs[i].posts);
          }
          // setUserData(array);
        }
        setUserData(random(array));
      }
      setCurrentData(currentUser.currentUserName);
    } else {
      alert("Login to your Profile");
    }
  }, []);

  function change() {
    setLike(!like);
  }

  function random(array){
    let currentIndex = array.length;
    let randomIndex;

    while(currentIndex !== 0){

      randomIndex =Math.floor(Math.random()* currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }
    return array;
  }



  // console.log(userData);

  return (
    <div id="homePage">
      <Sidebar />
      <div className="home-content">
        <div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/05/13/13/53/skull-765477_960_720.jpg"
              alt="pro-pic"
              className="resize-img"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/02/01/17/09/man-3123561__340.jpg"
              alt="pro-pic"
              className="resize-img"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/01/15/12/44/model-600222__340.jpg"
              alt="pro-pic"
              className="resize-img"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2012/02/29/15/40/beautiful-19075__340.jpg"
              alt="pro-pic"
              className="resize-img"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2017/02/25/06/39/girl-2097003__340.jpg"
              alt="pro-pic"
              className="resize-img"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2012/02/29/12/22/adult-19033__340.jpg"
              alt="pro-pic"
              className="resize-img"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/01/06/43/girl-3576679__340.jpg"
              alt="pro-pic"
              className="resize-img"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2022/10/01/21/25/woman-7492273__340.jpg"
              alt="pro-pic"
              className="resize-img"
            />
          </div>
        </div>
        <div className="home-add-content">
          {userData &&
            userData.map((e, i) => (
              <div key={i}>
                <div className="home-add-content-first">
                  <div>
                    <div>
                      <img
                        src="https://cdn.pixabay.com/photo/2020/01/24/08/43/redhead-4789668__340.jpg"
                        alt="pro-pic"
                        className="resize-img"
                      />
                    </div>
                    <div>
                      <p>{e.name}</p>
                      <p>Somewhere</p>
                    </div>
                  </div>
                  <div>
                    <i className="fa-solid fa-ellipsis"></i>
                  </div>
                </div>

                <div className="home-add-content-second">
                  <img src={e.image} alt="posts" />
                </div>

                <div className="home-add-content-third">
                  <div>
                    {like ? (
                      <i
                        className="fa-solid fa-heart like cursor"
                        onClick={() => {
                          change();
                        }}
                      ></i>
                    ) : (
                      <i
                        className="fa-regular fa-heart cursor"
                        onClick={() => {
                          change();
                        }}
                      ></i>
                    )}

                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-paper-plane"></i>
                  </div>
                  <div>
                    <i className="fa-regular fa-bookmark"></i>
                  </div>
                </div>

                <div className="home-add-content-four">
                  <p>{e.caption}</p>
                </div>

                <div className="home-add-content-five">
                  <input type="text" placeholder="Add a comment" />
                  <i className="fa-regular fa-face-smile"></i>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="home-suggestions">
        <div className="home-suggestions-top">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2016/06/11/12/15/females-1450050_960_720.jpg"
              alt="pro-pic"
              className="resize-img"
            />
          </div>
          <div>
            <p>{currentData}</p>
            <p>amaan</p>
          </div>
        </div>
        <div className="home-suggestions-mid">
          <div>
            <p>Suggestions for you</p>
            <p>See All</p>
          </div>
          <div className="home-profiles">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/03/09/08/05/woman-1245558__340.jpg"
                alt="pro-pic"
                className="resize-img"
              />
            </div>
            <div>
              <h5>zpoint123</h5>
              <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699__340.jpg"
                alt="pro-pic"
                className="resize-img"
              />
            </div>
            <div>
              <h5>z point123</h5>
              <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/08/05/04/02/people-875597__340.jpg"
                alt="pro-pic"
                className="resize-img"
              />
            </div>
            <div>
              <h5>zpoint123</h5>
              <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/02/19/13/15/indians-642075_960_720.jpg"
                alt="pro-pic"
                className="resize-img"
              />
            </div>
            <div>
              <h5>zpoint123</h5>
              <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
            </div>
            <div>Follow</div>
          </div>
        </div>
        <div className="home-suggestions-bot">
          <div>
            <p>About</p>
            <p>Help</p>
            <p>Press</p>
            <p>API</p>
            <p>Jobs</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Locations</p>
            <p>Language</p>
            <p>English</p>
            <p>Meta</p>
            <p>Verified</p>
          </div>
          <div>© 2023 INSTAGRAM FROM META</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;