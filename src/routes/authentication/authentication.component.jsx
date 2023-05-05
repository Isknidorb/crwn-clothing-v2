import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div>
      <h1>Sign-in page</h1>
      <div className="sign-up-page">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
