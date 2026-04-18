import Button from "../components/Button";
import bulldog from "../assets/img/bulldog.png";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-8 bg-[#253b80]">
      <div className="flex flex-col items-start max-w-md">
        <h1 className="text-9xl font-bold text-[#ffd41c] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#ffd41c] mb-3">
          Sorry, the page is not found
        </h2>
        <p className="text-sm text-zinc-50 mb-8 leading-relaxed">
          The link you are looking for doesn't exist
          <br />
          or another error occurred.
        </p>
        <Button to="/">Back Home</Button>
      </div>

      <div className="ml-16">
        <img src={bulldog} alt="NU Bulldog" className="w-90" />
      </div>
    </div>
  );
}

export default NotFoundPage;
