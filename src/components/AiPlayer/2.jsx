// // /* eslint-disable react/display-name */
// // import { Canvas } from "@react-three/fiber";

// // import { usePathname, useRouter, useSearchParams } from "next/navigation";
// // import { isVideoMaximizedAtom } from "@/src/jotai/atoms";
// // import { useAtom } from "jotai";
// // import { useEffect, useRef, useState } from "react";
// // import Experience from "../Experience";


// // function AiModel() {
// //   const [isVideoMaximized, setIsVideoMaximized] = useAtom(isVideoMaximizedAtom);
// //   const [isRecording, setIsRecording] = useState(false);

// //   const pathname = usePathname();
// //   const searchParams = useSearchParams();
// //   const isVideoQuery = searchParams.get("isVideo") === "true";
// //   const chatIdParam = searchParams.get("chatId");
// //   const router = useRouter();


// //   const recognition = useRef(null);
// //   const lastuuidRef = useRef(null);

// //   useEffect(() => {
// //     lastuuidRef.current = chatIdParam;
// //   }, [searchParams, pathname, chatIdParam, router]);

// //   useEffect(() => {
// //     const speech = window?.SpeechRecognition || window?.webkitSpeechRecognition;

// //     recognition.current = new speech();

// //     recognition.current.lang = "fa-IR";
// //     recognition.current.continuous = true;
// //     recognition.current.interimResults = true;

// //     recognition.current.onresult = (event) => {
// //       let transcript = "";
// //       for (let i = event.resultIndex; i < event.results.length; ++i) {
// //         transcript += event.results[i][0].transcript;
// //       }
// //       onUpdate(transcript);
// //     };

// //     recognition.current.onend = () => {
// //       if (!sttText.current) {
// //         return;
// //       }

// //       if (chatIdParam || lastuuidRef.current) {
// //         setTotalChats((prevChats) => {
// //           if (chatIdParam) {
// //             // lastuuidRef.current = chatIdParam;
// //           }

// //           const chatsCopy = deepCopy(prevChats);
// //           const selectedConversation = chatsCopy?.find((chat) => {
// //             return chat.id === lastuuidRef.current;
// //           });

// //           selectedConversation.chats.push({ sender: "bot", text: "loading" });
// //           return chatsCopy;
// //         });

// //         ref?.current?.emit("sendTextMessage", {
// //           conversationId: lastuuidRef.current,
// //           message: sttText.current,
// //           responseType: "video",
// //         });
// //       }

// //       sttText.current = "";
// //       setIsDisabled(true);
// //       // updateStreamScrolling();
// //     };

// //     const onSendTextMessageRes = (res) => {
// //       // updateStreamScrolling();

// //       // if (res?.text) {
// //       //   setTotalChats((v) => {
// //       //     const copyTotalChats = [...v];

// //       //     const selectedConversation = copyTotalChats.find(
// //       //       (item) => item.id === (lastuuidRef.current || chatIdParam)
// //       //     );

// //       //     if (selectedConversation?.chats?.at(-1)?.text === "loading") {
// //       //       selectedConversation.chats.at(-1).text = res?.text;
// //       //     } else {
// //       //       selectedConversation.chats.at(-1).text += res?.text;
// //       //     }

// //       //     return copyTotalChats;
// //       //   });
// //       // }

// //       if (res?.video?.url) {
// //         setLastVideoUrl(res.video.url);
// //       }

// //       if (res?.textFinished) {
// //         setIsDisabled(false);
// //       }
// //     };

// //     isVideoMaximizedAtom &&
// //       ref?.current?.on("sendTextMessageRes", onSendTextMessageRes);

// //     return () => {};
// //   }, []);

// //   const handleButtonClick = () => {
// //     if (isRecording) {
// //       recognition.current.stop();
// //       setIsRecording(false);
// //     }
// //     try {
// //       if (!chatIdParam) {
// //         console.log("there is no chatidparam");
// //         chatIdParam;
// //       }
// //       recognition.current.start();
// //       setIsRecording(true);
// //     } catch (error) {
// //       console.error("Error starting speech recognition:", error);
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="w-[1312px] h-[738px]  mt-0 relative bg-black ">
// //         {/* <Canvas camera={{ position: [0, 0.2, 1] }}>
// //           <Experience />
// //         </Canvas> */}
// //         <div className="w-[487px] h-[136px] bg-[#7B899D4D] blur-4 rounded-[76px] mx-auto border-2 border-white absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center  gap-[72px] justify-center ">
// //           <button className=" rounded-full bg-white w-[88px] h-[88px]"></button>
// //           <button className=" rounded-full bg-[#FF8C00] w-[88px] h-[88px]"  onClick={handleButtonClick}></button>
// //           <button className=" rounded-full bg-white w-[88px] h-[88px]"></button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default AiModel;



// // import React, { useEffect, useRef, useState } from 'react';
// // import { useAtom } from 'jotai';
// // import { usePathname, useSearchParams, useRouter } from 'next/navigation'; 
// // import { isVideoMaximizedAtom } from "@/src/jotai/atoms";
// // import { Canvas } from '@react-three/fiber';
// // import Experience from '../Experience';

// // const AiModel = React.forwardRef((props, ref) => {
// //   const [isVideoMaximized, setIsVideoMaximized] = useAtom(isVideoMaximizedAtom);
// //   const [isRecording, setIsRecording] = useState(false);

// //   const pathname = usePathname();
// //   const searchParams = useSearchParams();
// //   const isVideoQuery = searchParams.get("isVideo") === "true";
// //   const chatIdParam = searchParams.get("chatId");
// //   const router = useRouter();

// //   const recognition = useRef(null);
// //   const lastuuidRef = useRef(null);
// //   const sttText = useRef("");

// //   useEffect(() => {
// //     lastuuidRef.current = chatIdParam;
// //   }, [searchParams, pathname, chatIdParam, router]);

// //   useEffect(() => {
// //     const speech = window?.SpeechRecognition || window?.webkitSpeechRecognition;

// //     recognition.current = new speech();
// //     recognition.current.lang = "fa-IR";
// //     recognition.current.continuous = true;
// //     recognition.current.interimResults = true;

// //     recognition.current.onresult = (event) => {
// //       let transcript = "";
// //       for (let i = event.resultIndex; i < event.results.length; ++i) {
// //         transcript += event.results[i][0].transcript;
// //       }
// //       props.onUpdate(transcript); // فرض بر این است که onUpdate به عنوان props ارسال شده است
// //     };

// //     recognition.current.onend = () => {
// //       if (!sttText.current) {
// //         return;
// //       }

// //       if (chatIdParam || lastuuidRef.current) {
// //         props.setTotalChats((prevChats) => {
// //           const chatsCopy = deepCopy(prevChats);
// //           const selectedConversation = chatsCopy?.find((chat) => chat.id === lastuuidRef.current);

// //           selectedConversation.chats.push({ sender: "bot", text: "loading" });
// //           return chatsCopy;
// //         });

// //         ref?.current?.emit("sendTextMessage", {
// //           conversationId: lastuuidRef.current,
// //           message: sttText.current,
// //           responseType: "video",
// //         });
// //       }

// //       sttText.current = "";
// //       props.setIsDisabled(true);
// //     };

// //     const onSendTextMessageRes = (res) => {
// //       if (res?.video?.url) {
// //         props.setLastVideoUrl(res.video.url);
// //       }

// //       if (res?.textFinished) {
// //         props.setIsDisabled(false);
// //       }
// //     };

// //     isVideoMaximized && ref?.current?.on("sendTextMessageRes", onSendTextMessageRes);

// //     return () => {};
// //   }, [isVideoMaximized, chatIdParam, props]);

// //   const handleButtonClick = () => {
// //     if (isRecording) {
// //       recognition.current.stop();
// //       setIsRecording(false);
// //     }
// //     try {
// //       if (!chatIdParam) {
// //         console.log("there is no chatidparam");
// //       }
// //       recognition.current.start();
// //       setIsRecording(true);
// //     } catch (error) {
// //       console.error("Error starting speech recognition:", error);
// //     }
// //   };

// //   return (
// //     <div className="w-[1312px] h-[738px] mt-0 relative bg-black ">
// //          {/* <Canvas camera={{ position: [0, 0.2, 1] }}>
// //           <Experience />
// //         </Canvas> */}
// //       <div className="w-[487px] h-[136px] bg-[#7B899D4D] blur-4 rounded-[76px] mx-auto border-2 border-white absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-[72px] justify-center">
// //         <button className="rounded-full bg-white w-[88px] h-[88px]"></button>
// //         <button className="rounded-full bg-[#FF8C00] w-[88px] h-[88px]" onClick={handleButtonClick}></button>
// //         <button className="rounded-full bg-white w-[88px] h-[88px]"></button>
// //       </div>
// //     </div>
// //   );
// // });

// // export default AiModel;



// React.forwardRef(({ updateStreamScrolling }, ref) => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [isVideoMaximized, setIsVideoMaximized] = useAtom(isVideoMaximizedAtom);
//   const [lastVideoUrl, setLastVideoUrl] = useAtom(lastVideoUrlAtom);
//   const [inputValue, setInputValue] = useState("");
//   const [isDisabled, setIsDisabled] = useState(false);
//   const [totalChats, setTotalChats] = useAtom(totalChatsAtom);

//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const isVideoQuery = searchParams.get("isVideo") === "true";
//   // const isVideoQuery = true;
//   const router = useRouter();
//   const chatIdParam = searchParams.get("chatId");

//   const lastuuidRef = useRef(null);
//   const sttText = useRef("");
//   const recognition = useRef(null);

//   const handleUrl = () => {
//     const params = new URLSearchParams(searchParams);
//     params.delete("isVideo");
//     return `${pathname}?${params.toString()}`;
//   };

//   useEffect(() => {
//     setIsMobile(window.innerWidth <= 768);
//   }, []);

//   const onSizeChanged = () => {
//     setIsVideoMaximized((v) => !v);
//   };

//   useEffect(() => {
//     lastuuidRef.current = chatIdParam;
//   }, [searchParams, pathname, chatIdParam, router]);

//   const onUpdate = (sttValue) => {
//     if (!sttValue || sttValue.length === 0) {
//       return;
//     }

//     sttText.current = sttValue;

//     if (lastuuidRef.current || chatIdParam) {
//       setTotalChats((prevChats) => {
//         const chatsCopy = deepCopy(prevChats);

//         const selectedConversation = chatsCopy?.find(
//           (chat) => chat.id === (chatIdParam || lastuuidRef.current)
//         );

//         if (
//           selectedConversation?.chats &&
//           selectedConversation.chats.at(-1).sender === "user"
//         ) {
//           selectedConversation.chats.at(-1).text = sttValue;
//         } else if (selectedConversation?.chats) {
//           selectedConversation.chats.push({ sender: "user", text: sttValue });
//         }

//         return chatsCopy;
//       });
//     } else {
//       ref?.current?.emit("startConversation", {}, (data) => {
//         lastuuidRef.current = data?.data?.conversationId;
//         const params = new URLSearchParams(searchParams);
//         params.append("chatId", data.data.conversationId);
//         const newParams = params.toString();

//         router.push(`${pathname}?${newParams}&isVideo=true`);

//         setTotalChats((prevChats) => {
//           return [
//             ...prevChats,
//             {
//               id: lastuuidRef.current,
//               date: Date.now(),
//               chats: [{ sender: "user", text: sttValue }],
//             },
//           ];
//         });
//       });
//     }

//     // updateStreamScrolling();
//   };

//   const handleButtonClick = () => {
//     if (isRecording) {
//       recognition.current.stop();
//       setIsRecording(false);
//     }
//     try {
//       if (!chatIdParam) {
//         console.log("there is no chatidparam");
//         chatIdParam;
//       }
//       recognition.current.start();
//       setIsRecording(true);
//     } catch (error) {
//       console.error("Error starting speech recognition:", error);
//     }
//   };

//   useEffect(() => {
//     const speech = window?.SpeechRecognition || window?.webkitSpeechRecognition;

//     recognition.current = new speech();

//     recognition.current.lang = "fa-IR";
//     recognition.current.continuous = true;
//     recognition.current.interimResults = true;

//     recognition.current.onresult = (event) => {
//       let transcript = "";
//       for (let i = event.resultIndex; i < event.results.length; ++i) {
//         transcript += event.results[i][0].transcript;
//       }
//       onUpdate(transcript);
//     };

//     recognition.current.onend = () => {
//       if (!sttText.current) {
//         return;
//       }

//       if (chatIdParam || lastuuidRef.current) {
//         setTotalChats((prevChats) => {
//           if (chatIdParam) {
//             // lastuuidRef.current = chatIdParam;
//           }

//           const chatsCopy = deepCopy(prevChats);
//           const selectedConversation = chatsCopy?.find((chat) => {
//             return chat.id === lastuuidRef.current;
//           });

//           selectedConversation.chats.push({ sender: "bot", text: "loading" });
//           return chatsCopy;
//         });

//         ref?.current?.emit("sendTextMessage", {
//           conversationId: lastuuidRef.current,
//           message: sttText.current,
//           responseType: "video",
//         });
//       }

//       sttText.current = "";
//       setIsDisabled(true);
//       // updateStreamScrolling();
//     };

//     const onSendTextMessageRes = (res) => {
//       // updateStreamScrolling();

//       // if (res?.text) {
//       //   setTotalChats((v) => {
//       //     const copyTotalChats = [...v];

//       //     const selectedConversation = copyTotalChats.find(
//       //       (item) => item.id === (lastuuidRef.current || chatIdParam)
//       //     );

//       //     if (selectedConversation?.chats?.at(-1)?.text === "loading") {
//       //       selectedConversation.chats.at(-1).text = res?.text;
//       //     } else {
//       //       selectedConversation.chats.at(-1).text += res?.text;
//       //     }

//       //     return copyTotalChats;
//       //   });
//       // }

//       if (res?.video?.url) {
//         setLastVideoUrl(res.video.url);
//       }

//       if (res?.textFinished) {
//         setIsDisabled(false);
//       }
//     };

//     isVideoMaximizedAtom &&
//       ref?.current?.on("sendTextMessageRes", onSendTextMessageRes);

//     return () => {};
//   }, []);

//   const videoRef = useRef(null);
//   const playerRef = useRef(null);

//   useEffect(() => {
//     playerRef.current;
//   }, [lastVideoUrl]);

//   useEffect(() => {
//     if (playerRef.current) {
//       return;
//     }

//     const videoElement = document.createElement("video-js");
//     videoElement.classList.add("vjs-big-play-centered");
//     videoElement.style.backgroundColor = "#fff";
//     videoRef.current?.appendChild(videoElement);

//     playerRef.current = videojs(videoElement, {
//       autoplay: true,
//       sources: [
//         {
//           src: lastVideoUrl,
//           type: "video/mp4",
//         },
//       ],
//     });

//     playerRef.current.ready(() => {
//       const techElement = playerRef?.current?.tech?.()?.el();
//       if (techElement) {
//         techElement.style.backgroundColor = "#000";
//         techElement.style.borderRadius = "30px";
//       }
//     });

//     return () => {
//       if (playerRef.current && !playerRef.current.isDisposed()) {
//         playerRef.current.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [videoRef]);

//   useEffect(() => {
//     if (playerRef.current) {
//       if (lastVideoUrl && isVideoQuery) {
//         playerRef.current.src({ src: lastVideoUrl, type: "video/mp4" });
//         playerRef.current.play();
//       } else {
//         playerRef.current.src({ src: "/placeholder.mp4", type: "video/mp4" });
//         playerRef.current.play();
//       }
//     }
//   }, [lastVideoUrl]);

//   return (
//     <div
//       className={`${isVideoQuery ? "w-full" : "w-0"} overflow-hidden relative`}
//       style={{ transition: "0.5s all" }}
//     >
//       <div
//         style={{
//           transform: "translateX(-50%)",
//           backdropFilter: "blur(3px)",
//           transition: "0.3s all",
//         }}
//         className={`${
//           isVideoMaximized
//             ? "px-[74px] py-[24px] gap-[38px] h-[137px]"
//             : "px-[50px] py-[17px] gap-[26px] h-[93px]"
//         } flex items-center justify-between absolute z-40 left-1/2 bottom-4 bg-opacity-30 rounded-[76px] bg-[#7B899D]`}
//       >
//         {isMobile ? (
//           <Link
//             href={handleUrl()}
//             className={`${
//               isVideoMaximized ? "p-5" : "p-4"
//             } rounded-full h-full aspect-square justify-center items-center flex bg-[#99A7BC]`}
//           >
//             <div className="relative w-full h-full overflow-hidden">
//               {isVideoMaximized ? (
//                 <Image src="/images/messages.png" alt="CloseVideoChat" fill />
//               ) : (
//                 <Image src="/images/maximize-2.png" alt="CloseVideoChat" fill />
//               )}
//             </div>
//           </Link>
//         ) : (
//           <button
//             className={`${
//               isVideoMaximized ? "p-5" : "p-4"
//             } rounded-full h-full aspect-square justify-center items-center flex bg-[#99A7BC]`}
//             onClick={onSizeChanged}
//           >
//             <div className="relative w-full h-full overflow-hidden">
//               {isVideoMaximized ? (
//                 <Image src="/images/messages.png" alt="CloseVideoChat" fill />
//               ) : (
//                 <Image src="/images/maximize-2.png" alt="CloseVideoChat" fill />
//               )}
//             </div>
//           </button>
//         )}

//         <button
//           onClick={handleButtonClick}
//           className={`${isRecording ? "bg-[#ff8c0079]" : "bg-[#FF8C00]"} ${
//             isVideoMaximized ? "p-5" : "p-4"
//           } rounded-full h-full aspect-square justify-center items-center flex`}
//         >
//           <div className="relative w-full h-full overflow-hidden">
//             <Image src="/images/microphone-2.png" fill alt="CloseVideoChat" />
//           </div>
//         </button>
//         <Link
//           href={handleUrl()}
//           className={`${
//             isVideoMaximized ? "p-5" : "p-4"
//           } rounded-full h-full aspect-square justify-center items-center flex bg-[#99A7BC]`}
//         >
//           <div className="relative w-full h-full overflow-hidden">
//             <Image src="/images/CloseVideoChat.png" fill alt="CloseVideoChat" />
//           </div>
//         </Link>
//       </div>

//       <div className=" bg-black">
//         <div />
//       </div>
//     </div>
//   );
// });