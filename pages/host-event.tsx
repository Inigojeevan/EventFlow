import HostForm from "@/components/hosts/HostForm";
import { HostProvider } from "@/components/layouts/HostContext";

const CreateEventPage = () => {
  return (
    <HostProvider>
      <HostForm />
    </HostProvider>
  );
};

export default CreateEventPage;
