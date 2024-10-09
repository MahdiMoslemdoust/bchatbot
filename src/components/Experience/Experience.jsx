// import { OrbitControls, ScrollControls } from "@react-three/drei";
// import { Model } from "../Model/Model";

// function Experience() {
//   return (
//     <>
//       <ambientLight intensity={1} />
//       <OrbitControls enableZoom={false} />
//       <ScrollControls pages={3} damping={0.25}>
//         `
//         <Model />
//       </ScrollControls>
//     </>
//   );
// }

// export default Experience;

import { OrbitControls } from "@react-three/drei";
import { Model } from "../Model/Model";

function Experience() {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight intensity={2} position={[2, 5, 3]} />
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
      <Model position={[0, -1.3, 0]} />
    </>
  );
}

export default Experience;
