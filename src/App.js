import logo from './logo.svg';
import classNames from 'classnames'
import './App.css';

function App() {
  return (
 
      <header>
            <div className={classNames({"header-area":true , "grey-3-bg":true , "pl-55 ":true , "pr-55":true})} >
                <div className="container-fluid">
                    <div className="row">
                        <div className={classNames({"col-xl-8":true , "col-lg-9":true , "col-md-8":true})}>
                            <div className="header-top-wrapper">
                                <div className="header-info">
                                    <span><img src="phone.png" height="13px" style={{marginTop:"-3px" , marginRight:'5px'}} /> Call Us +123 (456) 7879</span>
                                    <span className="envelopes-header-icon"><img src="envelope.jpeg" height="13px" style={{marginTop:"-1px" , marginRight:'3px'}} />  <a href="mailto:support@gmail.com" className="__cf_email__" >support@gmail.com</a></span>
                                    <span className="mails-header-icon"><img src="map_marked.png" height="21px" style={{marginTop:"-1px" , marginRight:'3px'}} /> 205 Main Street, USA</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-4">
                            <div className="header-icon f-right">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
   
  );
}

export default App;
