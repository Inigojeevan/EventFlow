import EventRegistrationForm from "@/components/events/EventRegistraionForm";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleSubmitForm = () => {
    router.push(`/events/${id}`);
    alert("Thank you for registering");
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex flex-col w-1/2 h-1/2 justify-between items-center">
        <EventRegistrationForm id={id} />
        <div className="px-4 py-2 mt-auto">
          <Button
            className="text-fuchsia-600 rounded-xl shadow-md shadow-fuchsia-600 border-fuchsia-700 border-1 hover:bg-fuchsia-600 hover:text-white hover:border-fuchsia-600 hover:shadow-fuchsia-700 hover: "
            onClick={handleSubmitForm}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
