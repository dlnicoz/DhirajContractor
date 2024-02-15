const Stats = () => {
  return (
    <div className="container w-full flex flex-col mx-auto bg-white">
      <div className="w-full draggable">
        <div className="container p-4 flex flex-col items-center gap-16 mx-auto my-32">
          <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                <span id="countto1">250</span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-black">
                Successful Projects
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                $<span id="countto2">100</span>m
              </h3>
              <p className="text-base font-medium leading-7 text-center text-black">
                Annual Revenue Growth
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                <span id="countto3" data-decimal="1">
                  290
                </span>
                k+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-black">
                Global Partners
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                <span id="countto4">190</span>+
              </h3>
              <p className="text-base font-medium leading-7 text-center text-black">
                Daily Website Visitors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
