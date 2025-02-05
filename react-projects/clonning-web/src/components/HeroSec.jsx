import React from 'react'

export const HeroSec = () => {
  return (
    <div>
      <h1 class="color md:text-3xl lg:text-2xl dark:text-black text-center">
        Join Us
      </h1>
      <h1 class="mt-10 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-6xl dark:text-black text-center">
        25K+ STUDENTS TRUST US
      </h1>
      <br />
      <h1 className="text-center m-5 text-3xl">
        Every day brings with it a fresh set of learning possibilities.
      </h1>
      {/* BUTTON */}
      <div className="text-center">
        <button
          type="button"
          class="btn bg-[#84CC16] focus:outline-none text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Get Qoute Now
        </button>
        <button
          type="button"
          class="btn bg-none text-[#84CC16] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-green-700"
        >
          Get Qoute Now
        </button>
      </div>
      <div class="flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <img className="m-5" src="/images/edu.jpg" alt="" />
        <div class="p-4">
          <h6 class="mb-2 text-slate-800 text-xl font-semibold">
            Expert Instruction
          </h6>
          <p class="text-slate-600 leading-normal font-light">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>
      </div>
      <div class="flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <img className="m-5" src="/images/edu.jpg" alt="" />
        <div class="p-4">
          <h6 class="mb-2 text-slate-800 text-xl font-semibold">
            Expert Instruction
          </h6>
          <p class="text-slate-600 leading-normal font-light">
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </p>
        </div>
      </div>
      <div className="flex-1 justify-self-center w-14">
        <div class="flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <img className="m-5" src="/images/edu.jpg" alt="" />
          <div class="p-4">
            <h6 class="mb-2 text-slate-800 text-xl font-semibold">
              Expert Instruction
            </h6>
            <p class="text-slate-600 leading-normal font-light">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </div>
        <div class="flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <img className="m-5" src="/images/edu.jpg" alt="" />
          <div class="p-4">
            <h6 class="mb-2 text-slate-800 text-xl font-semibold">
              Expert Instruction
            </h6>
            <p class="text-slate-600 leading-normal font-light">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
