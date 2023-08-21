// ============================
// Auth Testing
// ============================

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

// ***** Home Page Component *****
const Home = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/dashboard");
  } else {
    return redirect("/signin");
  }
};

export default Home;

// ============================
// Redux Testing
// ============================

// // ***** Use Client *****
// "use client";

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // ***** Home Page Component *****
// const Home = () => {
//   // ***** State *****
//   const [counterState, setCounterState] = useState(null);

//   // ***** Redux State *****
//   const dispatch = useDispatch();

//   // ***** counterReducer *****
//   const counterReducer = useSelector((state) => state?.counter);
//   const { counter } = counterReducer;

//   // ***** useEffect *****
//   useEffect(() => {
//     setCounterState(counter);
//   }, [counter]);

//   return (
//     <div>
//       <p>{!counterState ? "loading..." : counterState}</p>
//       <p>
//         <button onClick={() => dispatch({ type: "INCREMENT_FIVE" })}>
//           increment
//         </button>
//       </p>
//       <p>
//         <button onClick={() => dispatch({ type: "DECREMENT_FIVE" })}>
//           decrement
//         </button>
//       </p>
//     </div>
//   );
// };

// export default Home;
