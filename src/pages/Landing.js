import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lof-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="jpb hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
