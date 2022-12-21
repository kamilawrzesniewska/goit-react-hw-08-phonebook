import { LoginForm } from "components/LoginForm/LoginForm";

export default function LoginPage() {
    return (
      <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-white">Login</h2>
        <div className="text-white">
        <LoginForm />
        </div>
      </div>
    );
  }