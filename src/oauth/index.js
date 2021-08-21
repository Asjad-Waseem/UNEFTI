import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";
import config from "../config/config.json";
import SocialLoginBtn from "../userjourney/resuable-components/SocialLoginButton";
import styled from "styled-components";
import { getUserFromSocialLogin } from "../store/actions/authedUser";
import { connect } from "react-redux"

const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
class OAuth extends Component {
  constructor() {
    super();
    this.state = { redirect: false };
  }

  sendData = (response, type) => {
      const { dispatch } = this.props;
    if (type === "Google" && response.tokenObj) {
      const socialInfo = {
        token: response.tokenObj.id_token,
        provider: "GOOGLE",
        domain: "SHOPTYPE",
      };
      dispatch(getUserFromSocialLogin(socialInfo))

      if (type === "Facebook") {
      }
    }
  };
  googleResponse = (response) => {
    console.log(response);
     this.sendData(response, "Google")
  };

  facebookResponse = (response) => {
    console.log(response);
    // this.sendData(response, "Google")
  };

  

  render() {
    return (
      <SocialLoginContainer>
        <GoogleLogin
          clientId={config.GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <SocialLoginBtn
              background="#df4a32"
              iconPath="/images/google-icon.svg"
              onClick={renderProps.onClick}
            />
          )}
          buttonText="Login"
          onSuccess={this.googleResponse}
          onFailure={this.onFailure}
          cookiePolicy={"single_host_origin"}
        />
        <FacebookLogin
          appId={config.FACEBOOK_APP_ID}
          autoLoad
          callback={this.facebookResponse}
          render={(renderProps) => (
            <SocialLoginBtn
              background="#3b5999"
              iconPath="/images/facebook-icon.svg"
              onClick={renderProps.onClick}
            />
          )}
        />
      </SocialLoginContainer>
    );
  }
}

function mapStateToProps({ authedUser }) {
    return {
      authedUser
    };
  }
  
  export default connect(mapStateToProps)(OAuth)
