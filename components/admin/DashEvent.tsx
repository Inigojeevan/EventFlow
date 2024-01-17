import Image from "next/image";

const DashEvent = (props: AdminEvent) => {
  return (
    <div className="text-white">
      <p className="text-white">{props.Id}</p>
      <Image src={props.Image} alt={props.Title} width={200} height={50} />
    </div>
  );
};

export default DashEvent;
