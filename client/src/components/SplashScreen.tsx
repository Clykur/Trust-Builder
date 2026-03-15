import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import clykurLogo from "@/assets/icons/ClykurLogo.svg";

const loadingAnimation = {
  v: "5.5.7",
  fr: 60,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: "Loading",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle 1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.33], y: [1] },
              o: { x: [0.67], y: [0] },
              t: 0,
              s: [0],
            },
            { t: 120, s: [360] },
          ],
        },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [80, 80] },
              p: { a: 0, k: [0, 0] },
              nm: "Ellipse Path 1",
            },
            {
              ty: "st",
              c: { a: 0, k: [0.06, 0.09, 0.16, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 4 },
              lc: 2,
              lj: 1,
              ml: 4,
              d: [
                { n: "d", nm: "dash", v: { a: 0, k: 60 } },
                { n: "g", nm: "gap", v: { a: 0, k: 200 } },
                {
                  n: "o",
                  nm: "offset",
                  v: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.33], y: [1] },
                        o: { x: [0.67], y: [0] },
                        t: 0,
                        s: [0],
                      },
                      { t: 120, s: [-251] },
                    ],
                  },
                },
              ],
              nm: "Stroke 1",
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
              nm: "Transform",
            },
          ],
          nm: "Ellipse 1",
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
    },
  ],
};

const SPLASH_SHOWN_KEY = "trustbuilder_splash_shown";
const MIN_DURATION_MS = 4000;
const FADEOUT_MS = 600;
const CONTENT_DELAY_MS = 150;

export function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [lottieError, setLottieError] = useState(false);
  const lottieReadyRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    const hasSeenSplash =
      typeof window !== "undefined" && localStorage.getItem(SPLASH_SHOWN_KEY);
    if (hasSeenSplash) {
      setVisible(false);
      setShouldShow(false);
      return;
    }
    setShouldShow(true);
    const contentTimer = setTimeout(
      () => setShowContent(true),
      CONTENT_DELAY_MS,
    );
    const hideTimeout = setTimeout(() => {
      localStorage.setItem(SPLASH_SHOWN_KEY, "true");
      setFadeOut(true);
      setTimeout(() => setVisible(false), FADEOUT_MS);
    }, MIN_DURATION_MS);
    return () => {
      clearTimeout(contentTimer);
      clearTimeout(hideTimeout);
    };
  }, []);

  // Show CSS loading dots if Lottie doesn’t render within 1.5s
  useEffect(() => {
    if (!shouldShow) return;
    const t = setTimeout(() => {
      if (!lottieReadyRef.current) setLottieError(true);
    }, 800);
    return () => clearTimeout(t);
  }, [shouldShow]);

  if (!mounted || !visible || !shouldShow) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white transition-all duration-500 ease-out ${
        fadeOut ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center flex-1 gap-8 transition-all duration-700 ease-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Main title – same as reference: serif, bold, dark, ample whitespace */}
        <h1 className="font-calegar font-normal text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#0f172a] uppercase">
          F r e e T r u s t
        </h1>

        {/* Loading animation – unchanged */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          {!lottieError && (
            <Lottie
              animationData={loadingAnimation}
              loop
              className="w-full h-full [&>svg]:w-full [&>svg]:h-full"
              onDOMLoaded={() => {
                lottieReadyRef.current = true;
              }}
              onDataFailed={() => setLottieError(true)}
            />
          )}
          {/* CSS fallback: three bouncing dots when Lottie fails or is slow */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-2"
            style={{
              visibility: lottieError ? "visible" : "hidden",
              pointerEvents: "none",
            }}
            aria-hidden
          >
            <span className="splash-dot" />
            <span className="splash-dot animation-delay-150" />
            <span className="splash-dot animation-delay-300" />
          </div>
        </div>

        {/* A [logo] Product – just below spinner */}
        <div
          className={`flex items-center justify-center gap-3 pt-4 transition-all duration-700 ease-out ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-sm text-[#6b7280]">A</span>
          <img
            src={clykurLogo}
            alt="Clykur"
            width={160}
            height={160}
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
            aria-hidden
          />
          <span className="text-sm text-[#6b7280]">Product</span>
        </div>
      </div>
    </div>
  );
}
