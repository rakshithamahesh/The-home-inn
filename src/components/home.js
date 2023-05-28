
import '../main.css';
import Footer from './Footer';
import Header from './Header';
import MainBody from './MainBody';
import Sidemenu from './Sidemenu';
function Home() {


  return (
    <div>
      <div className="wrapper">
        <Sidemenu></Sidemenu>
        <div id="content">
          <Header></Header>
          <MainBody></MainBody>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;