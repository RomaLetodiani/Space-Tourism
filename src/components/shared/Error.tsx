type Props = {
  errorMessage: string;
};

const Error = (props: Props) => {
  return (
    <div className="relative mt-20 w-full h-60">
      <div className="animate-bouncer bg-white/20 relative py-2 px-5 md:px-10 w-40 md:w-60 text-center border rounded-full">
        <p className="text-sm md:text-xl">{props.errorMessage}</p>
      </div>
    </div>
  );
};

export default Error;
