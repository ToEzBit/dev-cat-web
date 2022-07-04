{
  /* ============================ fha  =============================== */
}

<div>
  <div className="flex p-4 items-center gap-4">
    {isClicked ? (
      <>
        <div className="avatar ">
          <div className="w-14 rounded-full ">
            <img src={user?.profileImage || ProfilePic} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 border p-4 shadow-md shadow-bg-home-content text-chat rounded-lg  border-stroke">
            <div className="flex justify-between items-baseline px-4">
              <h5>{message.message}</h5>
              <div>3,000 BAHT</div>
            </div>
            <div className="text-chat-quotation">
              Quick quiz is the easiest way to make quizzes FREE
            </div>
            <div className="grid grid-cols-2 gap-4 px-4">
              <button className="border p-2 rounded-lg border-bg-home-content">
                View Detail
              </button>
              <button
                className="border p-2 rounded-lg border-bg-home-content"
                onClick={() => setIsClicked((prev) => !prev)}
              >
                Pay Now!
              </button>
            </div>
          </div>
          <div className="text-xs text-slate-400">8.00 PM</div>
        </div>
      </>
    ) : (
      <div className="w-3/5 h-1/2 flex mx-auto items-center flex-col justify-center">
        <button
          className="w-full flex justify-end"
          onClick={() => setIsClicked((prev) => !prev)}
        >
          X
        </button>
        {/* <CheckoutPage productId={orderId} /> */}
      </div>
    )}
  </div>
</div>;
{
  /* ===================================================== */
}
