const Loading = () => {
  return (
    <div className="relative flex items-center justify-center font-medium">
      <p className="absolute z-10 text-lg">Loading...</p>
      <div className="border-4 border-dashed border-gray-300 rounded-full w-44 h-44 animate-spin"></div>
    </div>
  );
};

export default Loading;
