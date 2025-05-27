import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import HealthStatusCards from "./HealthStatusCards";

const anatomyPoints = [
  {
    id: "heart",
    label: "Healthy Heart",
    icon: faHeart,
    position: { x: 65, y: 20 },
    color: "#ef4444", 
    labelSide: "right",
  },
  {
    id: "leg",
    label: "Healthy Leg",
    icon: faPersonRunning,
    position: { x: 45, y: 75 },
    color: "#0ea5e9", 
    labelSide: "left",
  },
];

export function AnatomySection() {
  return (
    <div className="flex gap-11 max-w-2xl">
      <div className="bg-[#F6FAFF] rounded-lg shadow-sm p-9 max-w-sm">
        <div className="flex items-start space-x-6">
          <div className="relative flex-shrink-0">
            <div
              className="relative mx-auto"
              style={{ width: "300px", height: "430px" }}
            >
              <Image
                src="/anatomy.png"
                alt="3D Human Anatomy Model"
                width={220}
                height={470}
                className="h-[465px] w-[360px] object-contain"
              />

              {anatomyPoints.map((point) => {
                const isLeft = point.labelSide === "left";

                return (
                  <div key={point.id}>
                    <div
                      className="absolute w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10 cursor-pointer hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: point.color,
                        left: `${point.position.x}%`,
                        top: `${point.position.y}%`,
                        transform: "translate(-50%, -40%)",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={point.icon}
                        className="w-4 h-4 text-white"
                      />
                    </div>

                    <div
                      className="absolute px-3 py-2 rounded-lg shadow-lg border z-20"
                      style={{
                        backgroundColor: point.color,
                        borderColor: point.color,
                        left: isLeft
                          ? `${point.position.x - 25}%`
                          : `${point.position.x + 7}%`,
                        top: `${point.position.y - 1}%`,
                        transform: isLeft
                          ? "translate(-100%, -50%)"
                          : "translateY(-50%)",
                      }}
                    >
                      <div
                        className={`flex items-center gap-2 ${
                          isLeft ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon
                            icon={point.icon}
                            style={{ color: point.color }}
                            className="w-4 h-4"
                          />
                        </div>
                        <span className="text-sm font-medium text-white whitespace-nowrap">
                          {point.label}
                        </span>
                      </div>

                      <div
                        className={`absolute w-0 h-0 ${
                          isLeft ? "right-0" : "left-0"
                        }`}
                        style={{
                          top: "50%",
                          transform: "translateY(-50%)",
                          [isLeft ? "right" : "left"]: "-8px",
                          borderTop: "6px solid transparent",
                          borderBottom: "6px solid transparent",
                          [isLeft
                            ? "borderLeft"
                            : "borderRight"]: `8px solid ${point.color}`,
                        }}
                      />
                    </div>

                    <div
                      className="absolute opacity-60 z-10"
                      style={{
                        backgroundColor: point.color,
                        left: isLeft
                          ? `${point.position.x - 12}%`
                          : `${point.position.x + 4}%`,
                        top: `${point.position.y}%`,
                        width: "12%",
                        height: "2px",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <HealthStatusCards />
    </div>
  );
}
