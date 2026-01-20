const GRADIENT_COLORS = [
  "var(--bg-accent)",
  "var(--text-accent)",
  "var(--bg-accent)",
  "var(--text-accent)",
  "var(--bg-accent)",
  "var(--text-accent)"
];

const GLOW_COLORS = {
  active: "var(--bg-accent)",
  background: "var(--bg-accent)"
};

const SIZE = {
  container: "w-10 h-10",
  particleDefault: "w-1 h-1",
  particleHover: "w-1.5 h-1.5"
};

const OPACITY = {
  particleDefault: 0.8,
  particleHover: 1.0,
  overlayDefault: 0.3,
  overlayHover: 0.5,
  blurDefault: 0.6,
  blurHover: 0.9
};

const TRANSITION_DURATION = {
  fast: "duration-300",
  normal: "duration-500"
};

const createGradientStyle = (colors) => ({
  background: `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")})`
});

const createParticleClassName = (isHovered, position) => {
  const size = isHovered ? SIZE.particleHover : SIZE.particleDefault;
  const opacity = isHovered ? OPACITY.particleHover : OPACITY.particleDefault;
  return `particle absolute bg-white rounded-full transition-all ${TRANSITION_DURATION.fast} ${size} opacity-${opacity * 100} ${position}`;
};

export default function AnimatedGradient({ isHovered = false }) {
  return (
    <div className="flex justify-center mr-3">
      <div className="inline-block relative">
        <div className="relative">
          <div
            className={`animated-gradient ${SIZE.container} rounded-full relative overflow-hidden shadow-xl transition-all ${TRANSITION_DURATION.normal} ${isHovered ? "scale-110" : "scale-100"}`}
            style={{
              ...createGradientStyle(GRADIENT_COLORS),
              filter: isHovered ? "brightness(1.3) saturate(1.4)" : "brightness(1) saturate(1)",
              boxShadow: isHovered
                ? `0 0 30px ${GLOW_COLORS.active}, 0 0 60px ${GLOW_COLORS.background}`
                : `0 0 20px ${GLOW_COLORS.background}`
            }}
          >
            <div
              className={`absolute inset-0 mix-blend-overlay bg-linear-to-r from-transparent via-white to-transparent transition-opacity ${TRANSITION_DURATION.fast}`}
              style={{ opacity: isHovered ? OPACITY.overlayHover : OPACITY.overlayDefault }}
            />

            {createParticleClassName(isHovered, "top-1/5 left-1/5").split(" ").includes("particle") && (
              <>
                <div className={createParticleClassName(isHovered, "top-1/5 left-1/5")} />
                <div className={createParticleClassName(isHovered, "top-9/12 right-1/4")} />
                <div className={createParticleClassName(isHovered, "bottom-1/4 left-3/5")} />
              </>
            )}
          </div>

          <div
            className={`absolute inset-0 rounded-xl blur-lg transition-all ${TRANSITION_DURATION.normal} ${isHovered ? "scale-125" : "scale-100"}`}
            style={{
              ...createGradientStyle(["var(--bg-accent)", "var(--text-accent)", "var(--bg-accent)"]),
              opacity: isHovered ? OPACITY.blurHover : OPACITY.blurDefault,
              zIndex: -1
            }}
          />
        </div>
      </div>
    </div>
  );
}