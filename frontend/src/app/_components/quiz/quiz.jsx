"use client"
import { useEffect, useState } from "react";
import Button from "@/app/_components/ui/Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Rankings from "./Rankings";

const OptionButton = ({ option }) => {
  return (
      <motion.div 
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
      className="flex cursor-pointer justify-center w-full">
      <div className="relative bg-[#D9D9D938]/78 hover:bg-[#D9D9D938]/90 lg:px-6 px-4 py-3 text-center min-w-[250px] lg:min-w-[200px] whitespace-nowrap w-full">
        {/* Top border with irregular dashes */}
        <div className="absolute top-0 left-0 right-0 h-[1px] flex">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="h-full bg-[#a89a84] w-full"
              style={{
                //width: `${Math.random() * 16 + 4}px`,
                marginRight: `${Math.random() * 8 + 4}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Bottom border with irregular dashes */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] flex">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="h-full bg-[#a89a84] w-full"
              style={{
                //width: `${Math.random() * 8 + 4}px`,
                marginRight: `${Math.random() * 8 + 4}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Left border with irregular dashes */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] flex flex-col">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-full bg-[#a89a84] h-full"
              style={{
                height: `${Math.random() * 8 + 4}px`,
                marginBottom: `${Math.random() * 8 + 4}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Right border with irregular dashes */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] flex flex-col">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-full bg-[#a89a84]"
              style={{
                height: `${Math.random() * 8 + 4}px`,
                marginBottom: `${Math.random() * 8 + 4}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Corner notches */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#a89a84]"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#a89a84]"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#a89a84]"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#a89a84]"></div>

        <p className="text-[#a89a84] font-orbitron font-bold">{option.optionText}</p>
      </div>
    </motion.div>
  );
}

const Quiz = () => {
  const backendUrl = process.env.NEXT_PUBLIC_API_URL
  const authApiUrl = `${backendUrl}/auth?redirect_uri=${encodeURIComponent("/quiz")}`

  const [quizQuestion, setQuizQuestion] = useState(null);
  const [quizError, setQuizError] = useState(null);

  const router = useRouter();

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true); // Track auth flow

  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  
  const [leaderboard, setLeaderboard] = useState([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);

  const fetchUser = async (accessToken) => {
    try {
      const res = await fetch(`${backendUrl}/auth/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

       if (!res.ok) throw new Error("Access token invalid");
       const data = await res.json();
       setUser(data);
       setLoading(false);
     } catch (err) {
       throw err;
     }
   };

   const refreshAccessToken = async (refreshToken) => {
     try {
       const res = await fetch(`${backendUrl}/auth/refresh`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ refreshToken: refreshToken }),
       });

       if (!res.ok) throw new Error("Refresh token invalid");

       const data = await res.json();
       const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;

       sessionStorage.setItem("accessToken", newAccessToken);
       localStorage.setItem("refreshToken", newRefreshToken);
       return newAccessToken;
     } catch (err) {
       return null;
     }
   };

 // 👉 Effect #1: Handle tokens from URL and store them
   useEffect(() => {
     const urlParams = new URLSearchParams(window.location.search);
     const accessTokenFromURL = urlParams.get("accessToken");
     const refreshTokenFromURL = urlParams.get("refreshToken");

     if (accessTokenFromURL && refreshTokenFromURL) {
       sessionStorage.setItem("accessToken", accessTokenFromURL);
       localStorage.setItem("refreshToken", refreshTokenFromURL);

       // Clean up URL (replace to avoid query reuse)
       router.replace("/quiz");
     }
     setLoading(false);
  }, [router]);

   // 👉 Effect #2: Try auth using stored tokens
   useEffect(() => {
     console.log("checking tokens...");
     const tryAuth = async () => {
       const accessToken = sessionStorage.getItem("accessToken");
       const refreshToken = localStorage.getItem("refreshToken");

       if (accessToken) {
         console.log("found accessToken")
        try {
           await fetchUser(accessToken);
           return;
         } catch (_) {
           // Try refresh
         }
       } else if (refreshToken) {
         console.log("found refreshToken")
         const newAccessToken = await refreshAccessToken(refreshToken);
         if (newAccessToken) {
           try {
             await fetchUser(newAccessToken);
             return;
           } catch (_) {
             // failed even after refresh
           }
         }
       }

       // All failed, show login
       setLoading(false);
     };

     tryAuth();
   }, [backendUrl]);

  useEffect(() => {
  const fetchTodayQuiz = async () => {
    if (!user || loading) return;

    try {
      const accessToken = sessionStorage.getItem("accessToken");
      const res = await fetch(`${backendUrl}/quiz/today`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.status === 400) {setQuizError("You've Already answered Today's Quiz"); return}

      if (!res.ok) throw new Error("Failed to fetch today's quiz");

      const data = await res.json();
      setQuizQuestion(data);
    } catch (err) {
      console.error("Error fetching quiz:", err);
      setQuizError("Unable to fetch today’s quiz. Try again later.");
    }
  };

  fetchTodayQuiz();
}, [user, loading, backendUrl]);

  const handleSubmitAnswer = async (optionId) => {
  if (submitted) return; // Prevent multiple submissions

  try {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) throw new Error("No access token");

    const res = await fetch(`${backendUrl}/quiz/answer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        questionId: quizQuestion.id,
        optionId: optionId,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      if (res.status === 400) {
        setSubmitStatus(data.message);
      } else {
        setSubmitStatus("error");
      }
    } else {
      let updateUser = user;
      updateUser.quizScore = data.score;
      setUser(updateUser);
      console.log(data)
    }

    setSubmitted(true);
    if (data.isCorrect) {
      setSubmitStatus("Great work detective!")
      } else { 
        setSubmitStatus("Looks like you missed a clue, detective.");
      }
  } catch (err) {
    console.error("Error submitting answer:", err);
    setSubmitStatus("error");
  }
};

  useEffect(() => {
  const fetchLeaderboard = async () => {
    setLeaderboardLoading(true);
    try {
      const res = await fetch(`${backendUrl}/quiz/leaderboard`);
      if (!res.ok) throw new Error("Failed to fetch leaderboard");
      const data = await res.json();
      setLeaderboard(data);
    } catch (err) {
      console.error("Error loading leaderboard:", err);
    } finally {
      setLeaderboardLoading(false);
    }
  };

  fetchLeaderboard();
}, [backendUrl, user, submitted]);

  return (
    <div>
    <img src="/svg/quiz-ui/vector1.svg" className="absolute size-[400px] md:size-[600px] top-10"/>
    <img src="/svg/quiz-ui/vector2.svg" className="absolute size-[400px] md:size-[600px] bottom-20 right-0"/>
    <div className="w-full flex flex-col relative" name="quiz">
      <div className="w-full h-screen flex flex-col">
        <div className="w-full flex flex-row justify-between items-center px-2 py-4">
          <div className="flex flex-row justify-center items-center space-x-2">
            <a href="/" className="font-['Orbitron'] text-md font-medium border border-transparent hover:border hover:border-[#a69188]/50 px-4 py-2 transition duration-150 ease-in-out">&larr; Home</a>
            <img src="/svg/quiz-ui/divider.svg"/>
          </div>
          <img src="/svg/quiz-ui/divider.svg" className="rotate-180 pl-4 md:block hidden"/>
        </div>
          <img src="/logo.png" className="h-14 w-14 mx-auto"/>
        <div className="w-full flex flex-row justify-center items-center px-2 py-4 mt-8">
          {loading ? <p>Loading...</p> : <div className="w-full flex flex-col items-center justify-between space-y-6 h-[80vh]">
            <h2 className="font-khinterference text-white text-3xl">Quiz of the day</h2>
            {
            !user ? (
                <div className="flex flex-col justify-center items-center space-y-16 text-2xl -mt-10">
                  <p className="font-orbitron text-xl text-center">You need to sign in to participate</p>
                  <a className="bg-Button font-orbitron px-6 py-4" href={authApiUrl}>{"Sign in with Google"}</a>
                  <p className="font-orbitron text-lg text-white/70 text-center">Use the same ID as Devfolio to avail quiz advantage during the event</p>
                </div> )
                : (
                quizQuestion && !submitted? (
                    <div className="flex flex-col justify-center items-center space-y-12 w-full">
                      <motion.h2 
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ opacity: 0, y: -50 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="font-khinterference md:text-5xl text-2xl text-center">{quizQuestion.questionTitle}</motion.h2>
                      <div className="grid md:grid-cols-2 gap-8 text-2xl w-full justify-center items-center md:px-10 px-2">
                      {
                        quizQuestion.options.map((opt) => {
                          return <button key={opt.id} onClick={() => {
                              handleSubmitAnswer(opt.id)
                            }}><OptionButton option={opt} /></button>
                        }) 
                      }
                      </div>
                      <motion.p 
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="text-lg text-center font-khinterference text-white/80">Click on any option to submit your answer</motion.p>
                    </div>
                  ) : submitted ? (
                      <div className="flex flex-col justify-center items-center space-y-16">
                        <motion.p 
                          whileInView={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: -50 }}
                          transition={{ duration: 1.5 }}
                          viewport={{ once: true }}
                          className="font-khinterference text-4xl md:text-6xl">{ submitStatus }</motion.p>
                        <motion.p 
                          whileInView={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: -50 }}
                          transition={{ duration: 2 }}
                          viewport={{ once: true }}
                            className="text-white font-orbitron text-center text-xl">Your  Current  Score:  { user.quizScore }</motion.p>
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                        >
                      <Link to="leaderboard" smooth duration={1500} offset={-100}>
                        <Button href="" children="View Leaderboard" />
                      </Link>
                      </motion.div>
                      </div>
                  ) :
                    quizError ? (
                    <div className="flex flex-col justify-center items-center space-y-16">
                        <motion.p 
                          whileInView={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: -50 }}
                          transition={{ duration: 1.5 }}
                          viewport={{ once: true }}
                          className="font-khinterference text-4xl text-center md:text-6xl">{ quizError }</motion.p>
                        <motion.p 
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                              className="text-white font-orbitron text-xl">Your  Current  Score:  { user.quizScore }</motion.p>
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                        >
                      <Link to="leaderboard" smooth duration={1500} offset={10}>
                        <Button href="" children="View Leaderboard" />
                      </Link>
                      </motion.div>
                      </div>
                ) : <p className="font-orbitron text-2xl">Fetching Today's Question...</p>
                )

            }
            <div className="flex flex-row py-6 space-x-4">
            <img src="/svg/quiz-ui/divider.svg" className="hidden md:block"/>
            <motion.h4 
                className="text-sm min-[440px]:text-xl sm:text-2xl font-khinterference text-bold tracking-wider">
              WELCOME{
                  user ? `, ${user.name}` : " CODER"
                }
            </motion.h4>
            <img src="/svg/quiz-ui/divider.svg" className="rotate-180 hidden md:block"/>
            </div> 
          </div>}
        </div>
      </div>
      <div className="w-screen">
        <Rankings loading={leaderboardLoading} data={leaderboard} /> 
      </div>
    </div>
    </div>
  );
}

export default Quiz
