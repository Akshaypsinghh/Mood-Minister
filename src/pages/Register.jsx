import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white flex flex-col items-center px-4 py-6">
      {/* Main Container */}
      <div className="w-full max-w-[760px] min-h-[610px] rounded-[28px] border-[7px] border-[#aeb4bf] bg-gradient-to-br from-[#211735] via-[#17131f] to-[#0d0d0f] shadow-2xl">
        {/* Header */}
        <div className="text-center pt-4">
          <h1 className="text-lg font-bold text-[#b995ff]">MusicHub</h1>

          <p className="text-[10px] text-gray-300 mt-1">
            Join the sound revolution.
          </p>
        </div>

        {/* Register Card */}
        <div className="w-[320px] sm:w-[320px] mx-auto mt-6 mb-10 bg-[#1b1b1d] rounded-lg p-6 shadow-xl">
          <form className="space-y-3">
            {/* Account Type */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                type="button"
                className="h-[65px] rounded-md border border-[#7545c9] bg-[#211c2d] text-white flex flex-col items-center justify-center shadow-[0_0_12px_rgba(126,70,230,0.2)]"
              >
                <span className="text-xl">♪</span>
                <span className="text-[8px] font-bold mt-1">LISTENER</span>
              </button>

              <button
                type="button"
                className="h-[65px] rounded-md border border-[#303034] bg-[#1a1a1c] text-gray-400 flex flex-col items-center justify-center"
              >
                <span className="text-lg">♩</span>
                <span className="text-[8px] font-bold mt-1">ARTIST</span>
              </button>
            </div>

            {/* Full Name */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                ♙
              </span>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-[30px] rounded-full bg-[#0d0d0e] border border-[#303034] pl-8 pr-3 text-[10px] text-white placeholder:text-gray-600 outline-none focus:border-[#8149dc]"
              />
            </div>

            {/* Username */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                @
              </span>

              <input
                type="text"
                placeholder="Username"
                className="w-full h-[30px] rounded-full bg-[#0d0d0e] border border-[#303034] pl-8 pr-3 text-[10px] text-white placeholder:text-gray-600 outline-none focus:border-[#8149dc]"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                ✉
              </span>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-[30px] rounded-full bg-[#0d0d0e] border border-[#303034] pl-8 pr-3 text-[10px] text-white placeholder:text-gray-600 outline-none focus:border-[#8149dc]"
              />
            </div>

            {/* Password + Confirm */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                  ♙
                </span>

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-[30px] rounded-full bg-[#0d0d0e] border border-[#303034] pl-8 pr-3 text-[10px] text-white placeholder:text-gray-600 outline-none focus:border-[#8149dc]"
                />
              </div>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                  ↻
                </span>

                <input
                  type="password"
                  placeholder="Confirm"
                  className="w-full h-[30px] rounded-full bg-[#0d0d0e] border border-[#303034] pl-8 pr-3 text-[10px] text-white placeholder:text-gray-600 outline-none focus:border-[#8149dc]"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 px-1 pt-1">
              <input type="checkbox" className="w-3 h-3 accent-[#8149dc]" />

              <p className="text-[8px] text-gray-400">
                I agree to the{" "}
                <span className="text-gray-300 font-semibold">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-gray-300 font-semibold">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full h-[36px] mt-2 rounded-full bg-gradient-to-r from-[#c4a1ff] to-[#7537df] text-[#30145f] text-[10px] font-bold shadow-[0_5px_15px_rgba(125,61,224,0.35)] hover:opacity-90 transition"
            >
              Register&nbsp; →
            </button>

            {/* Login */}
            <p className="text-center text-[9px] text-gray-400 pt-1">
              Already have an account?{" "}
              <span className="text-[#c3a4ff] font-semibold">Login</span>
            </p>
          </form>
        </div>

        {/* Bottom Icons */}
        <div className="flex justify-center gap-6 text-gray-600 text-xl">
          <span>▣</span>
          <span>♧</span>
          <span>▤</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
