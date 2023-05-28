
import Sidemenu from "./Sidemenu";
import Header from "./Header";
import Footer from "./Footer";

function BecomeHost() {

  const navigate = useNavigate();
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);

  function handleYes() {



    const input = { userId: user._id }
    fetch("hostsignup", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(input),
      method: 'POST'
    })
      .then(res => {

        if (!res.ok) {
          console.log("Error in Host Signup")
        } else {
          return res.json()
        }
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/home")
      })
  }

  function handleNo() {
    navigate("/home")
  }

  return (
    <div>
      <div>
        <div className="wrapper">
          <Sidemenu></Sidemenu>
          <div id="content">
            <Header></Header>

            <div className="hostcontainer">
              <p className="hostpara mb-4">
                Are you sure you want to <br className="hidden-ss"></br>become a host?
              </p>
              <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-4" role="group" aria-label="First group">
                  <button type="button" onClick={handleYes} className="btn btn-outline-success hostacceptButton">Yes</button>

                </div>
                <div className="btn-group" role="group" aria-label="Third group">
                  <button type="button" onClick={handleNo} className="btn btn-outline-danger hostdeclineButton">No</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BecomeHost;
