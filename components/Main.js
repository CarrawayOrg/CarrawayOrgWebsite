import Particles from "./Particles";
// import {ReactComponent as Wave} from "../public/images/wave.svg";
// import backgroundVideo from "../public/images/vid.mp4";
//#3b82f6 = blue
//#f3f4f5 = white

export default function Main() {
  return (
    <section class="text-gray-600 body-font">
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <Particles style = {{height: 10}}/>
        <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          Building Technological Solutions For Companies and NPO
        </h1>
        <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          Building advanced, scalable, and technological
          <br />  
          solutions specalized for companies
        </h2>
        <div className="ml-6 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
            href="/"
          >
            <div className="flex text-lg">
              <span className="justify-center">View Work</span>
            </div>
          </a>
          <a
            className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
            href="/"
          >
            <div className="flex text-lg">
              <span className="justify-center">Contact</span>
            </div>
          </a>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f3f4f5" fillOpacity="1" d="M0,96L80,96C160,96,320,96,480,128C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <div style={{backgroundColor : "#f3f4f5"}}> 
        <h2 id ="mission" className="pt-10 mb-1 text-2xl font-semibold text-black tracking-tighter text-center lg:text-7xl md:text-6xl">
            Mission Statement
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center text-black font-normal leading-relaxed fs521 lg:w-2/4" style = {{paddingBottom: "70px"}}>
          At Carraway, we connect computer science and outreach in order to give back to our community. We make solutions for companies and non-profits such as websites, apps, and more. In return for making these solutions, we simply ask for an optional donation. These donations are then utilized to support our community through various outreach efforts such as school supplies drives, relief efforts, and more. Carraway wishes to expand to locations around the globe and make an everlasting positive impact to society.  
        </p>
        <div className="container flex flex-col items-center justify-center mx-auto object-cover object-center w-3/4 mb-10 border shadow-md g327" />
        <h2 className="pt-10 mb-1 text-2xl font-semibold text-black tracking-tighter text-center lg:text-7xl md:text-6xl">
          Portfolio
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center text-black font-normal leading-relaxed fs521 lg:w-2/3">
          Take a look at some of our projects 
        </p>
        <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
          <div class="ktq4">
            <img className="w-10" src="https://i.ibb.co/6H0gggK/logo.png"></img>
            <h3 class="pt-3 font-semibold text-lg text-white">
              Cougar Support Den
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
              Designed a full stack website using Firebase and ReactJS for educating students about mental health and giving them updated resources. Cougar Support Den is an organization affiliated with the counselling department of my highschool.
            </p>
          </div>
          <div class="ktq4">
            <img className="w-10" src="https://i.ibb.co/7KJzSLd/rishi-Logo.jpg"></img>
            <h3 class="pt-3 font-semibold text-lg text-white">
              Rishi Kumar For Congress
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
              Designed a full stack website with HTML/CSS/JS and Firebase for connecting students during the pandemic. Designed a mobile ios app for notifications about his campign.
            </p>
          </div>
          <div class="ktq4">
            <img className="w-10" src="https://www.pikpng.com/pngl/m/9-99836_pencil-clipart-png-transparent-png.png"></img>
            <h3 class="pt-3 font-semibold text-lg text-white">
              Simple Tutor
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
              Designed an interface and homepage for a local tutoring non-profit with steady traffic
            </p>
          </div>
          {/* <div class="ktq4">
            <img className="w-10" src="https://nine4.app/cLogo.png"></img>
            <h3 class="pt-3 font-semibold text-lg text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div> */}
        </div>

        <div className="container flex flex-col items-center justify-center mx-auto object-cover object-center w-3/4 mb-10 border shadow-md g327" />
        <h2 className="pt-10 mb-1 text-2xl font-semibold text-black tracking-tighter text-center lg:text-7xl md:text-6xl">
          Impact
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center text-black font-normal leading-relaxed fs521 lg:w-2/3">
          Take a look at some of our outreach efforts 
        </p>
        <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3" style = {{margin:"auto", display:"flex"}}>
          <div class="ktq4">
          <img style = {{margin:"auto", display:"flex", width: "50%"}} src="https://i.ibb.co/RH8RV2q/Donate-FOR-School-Supplies-To-Children-In-Foster-Care-2.png"></img>
            <h3 class="pt-3 font-semibold text-lg text-white">
              School Supplies Drive
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
              Raised over $800 for school supplies for foster kids. Raised over 700 items for students. Donated an additional 40 kits. Donated supplies went to the Bill Willson Center, Unity Care, and Santa Clara Youth Program For Foster Kids
            </p>
          </div>
          {/* <div class="ktq4">
            <img className="w-10" src="https://i.ibb.co/7KJzSLd/rishi-Logo.jpg"></img>
            <h3 class="pt-3 font-semibold text-lg text-white">
              Rishi Kumar For Congress
            </h3>
            <p class="pt-2 value-text text-md text-gray-200 fkrr1">
              Designed a full stack website with HTML/CSS/JS and Firebase for connecting students during the pandemic. Designed a mobile ios app for notifications about his campign.
            </p>
          </div> */}
        </div>

        


        <div className="container flex flex-col items-center justify-center mx-auto object-cover object-center w-3/4 mb-10 border shadow-md g327" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fillOpacity="1" d="M0,96L80,96C160,96,320,96,480,128C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div style={{backgroundColor : "black"}}>
          {/* <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
            <div class="ktq4">
              <img src="https://nine4.app/images/nine4-3.png"></img>
              <h3 class="pt-3 font-semibold text-lg text-white">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
                Nullam vehicula, libero at euismod tristique, neque ligula faucibus
                urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
                rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
                odio.
              </p>
            </div>
            <div class="ktq4">
              <img src="https://nine4.app/images/nine4-3.png"></img>
              <h3 class="pt-3 font-semibold text-lg text-white">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
                Nullam vehicula, libero at euismod tristique, neque ligula faucibus
                urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
                rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
                odio.
              </p>
            </div>
          </div> */}
          <section class="relative pb-24">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
              <div class="">
                <h1 class="mb-5 text-6xl font-bold text-white">
                    Chapter Application Form
                </h1>
                <h1 class="mb-9 text-2xl font-semibold text-gray-200">
                  Intrested in starting a chapter in your community? Fill out the form below and a member from our leadership team will contact you shortly.
                </h1>
                <div className = "mb-5 text-6xl font-bold text-white" style = {{align: "center"}}>
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffzO2J6Up595fs-n6kWkPVWOn860icKsFGJUf04Yxikv8_pA/viewform?embedded=true" width="649" height="1000" frameBorder="0" style = {{margin: "auto"}}>Loading…</iframe>
                </div>

                <h1 class="mb-5 text-6xl font-bold text-white" style = {{paddingTop: "50px"}}> 
                  Contact Us
                </h1>
                <h1 class="mb-9 text-2xl font-semibold text-gray-200">
                  Email us at <u><a href = "mailto: carrawayorg@gmail.com">carrawayorg@gmail.com</a></u>
                </h1>
                {/* <input
                  type="email"
                  placeholder="jack@example.com"
                  name="email"
                  autocomplete="email"
                  class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
                />{" "}
                <a
                  class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
                  href="/"
                >
                  <span class="justify-center">Subscribe</span>
                </a> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
