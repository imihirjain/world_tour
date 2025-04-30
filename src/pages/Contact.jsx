export const Contact = () => {
  const handleFormData = (formData) => {
    const formInputData = Object.fromEntries(formData);
    console.log(formInputData);
  };
  return (
    <>
      <div className="bg-black text-white font-outfit flex justify-center items-center h-screen flex-col">
        <div>
          <h1 className="text-3xl font-semibold">Contact Us</h1>
        </div>
        <div className="mt-4">
          <form
            className="flex flex-col space-y-5 lg:w-md w-sm "
            action={handleFormData}
          >
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              className="border-2  py-3 px-3  rounded-md "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="border-2 py-3 px-3  rounded-md "
              required
            />
            <textarea
              name="message"
              className="border-2  py-3 px-3  rounded-md"
              rows={8}
              placeholder="Enter Your Message"
              required
            ></textarea>

            <button className="border-2 left-0 py-3 px-3  rounded-md">
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
