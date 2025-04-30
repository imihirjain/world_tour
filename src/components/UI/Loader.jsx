export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <h2 className="text-white mr-1 text-lg">Loading...</h2>
      <span className="loading loading-infinity loading-5xl text-white"></span>
    </div>
  );
};
