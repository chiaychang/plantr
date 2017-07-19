// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  render: function() {

    return (
        <div className="container-fluid" id="wrap">
          <div className="row">
            {/*header*/}
            <h1 className="align-middle">Plantr</h1>
          </div>
          {/*Navigation*/}
          <div className="row">
            <div className="col-lg-2 col-md-1 col-sm-12" id="nav-column">
                <div className="nav-icon">
                  <Link to="/app/Reminders"><i className="fa fa-exclamation fa-lg hvr-bounce-in" aria-hidden="true"></i></Link>
                </div>
                {/*<div className="nav-icon">
                    <Link to="/app/Calendar"><i className="fa fa-calendar fa-lg hvr-bounce-in" aria-hidden="true"></i></Link>
                  </div>*/}
                <div className="nav-icon">
                  <Link to="/app/Plants"><i className="fa fa-leaf fa-lg hvr-bounce-in" aria-hidden="true"></i></Link>
                </div>
                <div className="nav-icon">
                  <Link to="/app/AddPlant"><i className="fa fa-plus fa-lg hvr-bounce-in" aria-hidden="true"></i></Link>
                </div>
                <div className="nav-icon">
                  <a href="/Profile"><i className="fa fa-user fa-lg hvr-bounce-in" aria-hidden="true"></i></a>
                </div>
                <div className="nav-icon">
                  <a href="/logout" id="logout-btn"><i className="fa fa-sign-out fa-lg hvr-bounce-in" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="col-lg-10 col-md-11 col-sm-12">
              <div id="content-wrapper">
                  {/* Here we will deploy the sub components */}
                  {/* These sub-components are getting passed as this.props.children */}
                  {this.props.children}
              </div>
            </div>
          </div>
        </div> 
    );
  }
});

// Export the module back to the route
module.exports = Main;