import * as React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BlogDetails from "./components/Pages/BlogDetails";
import Home from "./components/Pages/Home";
import Home2 from "./components/Pages/Home2";
import Home3 from "./components/Pages/Home3";
import Spacing from "./components/Spacing";
import { useForm } from "react-hook-form";
const { ic } = require("ic0");
const ledger = ic("hbjjz-kaaaa-aaaan-qiocq-cai");
import { Principal } from "@dfinity/principal";
import { createActor } from "../../declarations/Token";
// import Item from "./Item";
import { AuthClient } from "@dfinity/auth-client";

export function nullParamsFormat(value) {
  return value ? [value] : [];
}

function App() {
  const { register, handleSubmit } = useForm();
  async function onSubmit(data) {
    // setloaderHidden(false);
    const authClient = await AuthClient.create();
    let identity = await authClient.getIdentity();
    if (await authClient.isAuthenticated()) {
      identity = await authClient.getIdentity();
    } else {
      await authClient.login({
        identityProvider: "https://identity.ic0.app/#authorize",
        onSuccess: async () => {
          identity = await authClient.getIdentity();
        },
      });
    }
    // console.log(identity);
    console.log(identity._principal.toString());
    const authenticatedCanister = createActor("hbjjz-kaaaa-aaaan-qiocq-cai", {
      agentOptions: {
        identity,
      },
    });
    console.log("auth ", await authenticatedCanister.icrc1_name());
    console.log("auth fee", await authenticatedCanister.icrc1_fee());

    
    // setloaderHidden(false);
    const hexVec = new Uint8Array([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
    ]);
    // Number(10),10n
    // console.log(ledger)
    // z475q-x2ruu-zzb75-k54s6-l4ccl-7n2nr-kj4aa-vtxin-col4e-xevj4-5ae
    // let mystore = new Uint8Array(0);
    // console.log("mystore==>", mystore);
    let nat8Array = new Uint8Array(1);
    let store = BigInt(1);
    nat8Array[0] = 10; // An example value
    let store2 = await authenticatedCanister.icrc1_transfer({
      to: {
        owner: Principal.fromText(
          "vbway-byaaa-aaaap-abuvq-cai"
        ),
        subaccount: [],
      },
      fee: [10n], //0xFF
      memo: [],
      from_subaccount: [],
      created_at_time: [],
      amount: Number(1000000),
    });
    console.log("why==>", store2);
  }
  return (
    <>
      <Header />
      <Spacing lg="80" md="80" />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home2" element={<Home2/>}/>
        <Route path="/home3" element={<Home3/>}/> */}
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <div onClick={handleSubmit(onSubmit)} className="">
        click here
      </div>
      <Footer />
    </>
  );
}

export default App;
