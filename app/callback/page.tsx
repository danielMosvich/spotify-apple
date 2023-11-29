"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { error } from "console";

export default function Callback() {
  const code = new URLSearchParams(window.location.search).get("code");
  useEffect(() => {
    // console.log(code);
    if (code) {
      axios
        .post("http://localhost:3001/login", { code })
        .then((res) => {
          if (res && window) {
            // const now = new Date()
            // console.log(Date.now() / 1000)
            localStorage.setItem(
              "last_update",
              JSON.stringify(Date.now() / 1000)
            );
            localStorage.setItem("access_token", res.data.access_token);
            localStorage.setItem("expires_in", res.data.expires_in);
            localStorage.setItem("refresh_token", res.data.refresh_token);

            // localStorage.setItem("timeSaveToken", xd)
            // push("/")
            (window as Window).location = "/";
          }
          // console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // if (code) {
    //   axios
    //     .post("http://localhost:3001/login", {
    //       code,
    //     })
    //     .then((res) => {
    //       console.log(res.data);
    //     });
    // }
    // console.log(code)
    // const hash = window.location.hash;
    // let token: string | undefined = window.localStorage.getItem(
    //   "token"
    // ) as string;
    // if (!token && hash) {
    //   // const code = new URLSearchParams(window.location.search).get('code')
    //   // console.log("XD",code)
    //   token = hash
    //     ?.substring(1)
    //     ?.split("&")
    //     ?.find((elem) => elem.startsWith("code"))
    //     ?.split("=")[1];

    //   //   fetch("https://accounts.spotify.com/api/token", {
    //   //     body: `client_id=${"9e0d92d6c8c641448e32478bc8789ecc"}&client_secret=${"d417d703420a4a11b5fa32584ec51247"}&grant_type=authorization_code&code=${token}&redirect_uri=${"http://localhost:3000/callback"}`,
    //   //     headers: {
    //   //       "Content-Type": "application/x-www-form-urlencoded",
    //   //     },
    //   //     method: "POST",
    //   //   }).then((res) => console.log(res));
    //   console.log(token)
    //   if (token) {
    //     // console.log(token);
    //     // window.localStorage.setItem("token", token);
    //     // window.location.hash = "/";\
    //     // push("/");
    //   }
    // }
  }, [code]);
  return <div>loading</div>;
}
